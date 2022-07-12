import prisma from '../lib/prisma';
import { serializeResponse } from '../utils/serializeResponse';

interface PaginationQuery {
  page?: number;
  limit?: number;
}

const DEFAULT_LIMIT = 20;

export async function getAllWebinars(props?: PaginationQuery) {
  try {
    const page = props?.page || 1;
    const limit = props?.limit || DEFAULT_LIMIT;
    const webinarCount = await prisma.webinars.count();
    const webinars = await prisma.webinars.findMany({
      skip: limit * (page - 1),
      take: limit,
      orderBy: [{ id: 'desc' }]
    });
    const response = {
      data: webinars.map((val) => serializeResponse(val)),
      pagination: {
        total: webinarCount,
        pageCount: Math.ceil(webinarCount / limit),
        currentPage: page,
        perPage: limit,
        from: (page - 1) * limit + 1,
        to: (page - 1) * limit + webinars.length
      },
      success: true
    };
    return response;
  } catch (e) {
    return {
      data: [],
      pagination: {
        total: 0,
        pageCount: 1,
        currentPage: 1,
        perPage: DEFAULT_LIMIT,
        from: 1,
        to: 1
      },
      success: false
    };
  }
}
