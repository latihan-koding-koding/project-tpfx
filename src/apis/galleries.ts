import prisma from '../lib/prisma';
import { serializeResponse } from '../utils/serializeResponse';

interface PaginationQuery {
  page?: number;
  limit?: number;
}

export interface PaginationResult {
  total: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
  from: number;
  to: number;
}

const DEFAULT_LIMIT = 20;

export const defaultPagination = {
  total: 0,
  pageCount: 1,
  currentPage: 1,
  perPage: DEFAULT_LIMIT,
  from: 1,
  to: 1
};

export async function getAllGalleries(props?: PaginationQuery) {
  try {
    const page = props?.page || 1;
    const limit = props?.limit || DEFAULT_LIMIT;
    const galleriesCount = await prisma.galleries.count();
    const galleries = await prisma.galleries.findMany({
      skip: limit * (page - 1),
      take: limit,
      orderBy: [{ id: 'desc' }]
    });
    const response = {
      data: galleries.map((val) => serializeResponse(val)),
      pagination: {
        total: galleriesCount,
        pageCount: Math.ceil(galleriesCount / limit),
        currentPage: page,
        perPage: limit,
        from: (page - 1) * limit + 1,
        to: (page - 1) * limit + galleries.length
      },
      success: true
    };
    return response;
  } catch (e) {
    return {
      data: [],
      pagination: defaultPagination,
      success: false
    };
  }
}
