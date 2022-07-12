import prisma from '../lib/prisma';
import { serializeResponse } from '../utils/serializeResponse';

interface PaginationQuery {
  page?: number;
  limit?: number;
}

const DEFAULT_LIMIT = 20;

export async function getAllEbooks(props?: PaginationQuery) {
  try {
    const page = props?.page || 1;
    const limit = props?.limit || DEFAULT_LIMIT;
    const ebooksCount = await prisma.ebooks.count();
    const ebooks = await prisma.ebooks.findMany({
      skip: limit * (page - 1),
      take: limit
    });
    const response = {
      data: ebooks.map((val) => serializeResponse(val)),
      pagination: {
        total: ebooksCount,
        pageCount: Math.ceil(ebooksCount / limit),
        currentPage: page,
        perPage: limit,
        from: (page - 1) * limit + 1,
        to: (page - 1) * limit + ebooks.length
      },
      success: true
    };
    return response;
  } catch (e) {
    return {
      data: [],
      pagination: {},
      success: false
    };
  }
}
