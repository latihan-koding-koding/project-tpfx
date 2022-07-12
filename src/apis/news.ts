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

export async function getAllNews(props?: PaginationQuery) {
  try {
    const page = props?.page || 1;
    const limit = props?.limit || DEFAULT_LIMIT;
    const newsCount = await prisma.news.count({ where: { category: 'news' } });
    const news = await prisma.news.findMany({
      skip: limit * (page - 1),
      take: limit,
      orderBy: [{ id: 'desc' }],
      where: {
        category: 'news'
      }
    });
    const response = {
      data: news.map((val) => serializeResponse(val)),
      pagination: {
        total: newsCount,
        pageCount: Math.ceil(newsCount / limit),
        currentPage: page,
        perPage: limit,
        from: (page - 1) * limit + 1,
        to: (page - 1) * limit + news.length
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

export async function getNews(props: { id?: number; slug?: string }) {
  try {
    const news = await prisma.news.findMany({ where: { id: props?.id, slug: props?.slug } });

    const response = {
      data: (news[0] && serializeResponse(news[0])) || null,
      success: true
    };
    return response;
  } catch (e) {
    return {
      data: null,
      pagination: {},
      success: false
    };
  }
}
