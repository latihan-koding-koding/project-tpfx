import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { news } from '@prisma/client';
import { getAllNews, PaginationResult } from 'apis/news';
import { dateOptions } from 'constants/index';
import { usePagination } from 'hooks/usePagination';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { defaultPagination } from '../../../apis/galleries';
import { PaginationItem } from '../../../components';

interface NewsCardInterface {
  title: string;
  url?: string;
  imgUrl?: string;
  date: Date;
  onClick?: () => void;
}
export const CardNews = (props?: NewsCardInterface) => (
  <div
    className="rounded-md border-secondary-gray-3  min-w-[363px] cursor-pointer"
    style={{
      borderWidth: 0.5
    }}
    onClick={props?.onClick}
  >
    <div
      className="h-[250px] w-full rounded-t-md bg-secondary-gray-4"
      style={{
        backgroundImage: `url('${props?.imgUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="px-4 pt-3 pb-8">
      <Text fontFamily="Inter" fontSize={12} fontWeight={500}>
        {new Date(props?.date || '').toLocaleDateString('id', dateOptions)}
      </Text>
      <Text fontSize={18} fontWeight={600}>
        {props?.title}
      </Text>
    </div>
  </div>
);

const NewsBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/news.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Berita
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Lengkapi perencanaan dan strategi trading anda dengan berita dan analisa terbaru
          </Text>
        </div>
      </main>
    </div>
  </Banner>
);

const News = (props: { news: Array<news>; pagination: PaginationResult }) => {
  const router = useRouter();

  const navigateToRegist = () => router.push('/register');
  const handleClickNews =
    ({ newsId }: { newsId: string }) =>
    () => {
      router.push('news/' + newsId);
    };

  const { currentPage, total, pageCount, perPage } = props.pagination;

  const paginationRange = usePagination({
    currentPage,
    totalCount: total,
    siblingCount: 1,
    pageSize: perPage,
    totalPageCount: pageCount
  });

  return (
    <Layout>
      <NewsBanner />
      <Section className="pt-9 pb-20">
        <Text fontSize={36} fontWeight={600} textAlign="center">
          Market Insight
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 my-8">
          {props.pagination.currentPage === 1 && props.news[0] && (
            <>
              <div
                className="col-span-1 md:col-span-2 bg-secondary-gray-3  flex justify-end flex-col rounded-md cursor-pointer text-white"
                onClick={handleClickNews({ newsId: props.news[0].slug })}
                style={{
                  backgroundImage: `url('https://cms.tpfx.co.id/public/${props.news[0].image}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 300
                }}
              >
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.37)' }} className="px-12 py-9 ">
                  <Text className="mb-3" fontSize={36} fontWeight={600}>
                    {props.news[0].title}
                  </Text>
                  <Text fontSize={18} fontWeight={600}>
                    {new Date(props.news[0].created_at || '').toLocaleDateString('id', dateOptions)}
                  </Text>
                </div>
              </div>

              <Card
                className="text-white rounded-md overflow-hidden !bg-secondary-gray-3 p-4 pt-6 tems-center flex-col flex justify-end items-center"
                style={{
                  minHeight: 296,
                  backgroundImage: "url('/images/market-analysis/news_detail_1.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Text fontSize={26} textAlign="center">
                  Dapatkan informasi kondisi pasar terkini, potensial pergerakan harga dan strategi
                  trading hanya di TPFx
                </Text>
                <Button className="py-3 !px-16 !w-fit mt-12" onClick={navigateToRegist}>
                  <Text fontFamily="Inter" fontWeight={700}>
                    Buka Akun
                  </Text>
                </Button>
              </Card>
            </>
          )}
          {props.news.slice(currentPage <= 1 ? 1 : 0).map((newsData, i) => (
            <CardNews
              key={i}
              imgUrl={'https://cms.tpfx.co.id/public/' + newsData.image}
              date={newsData.created_at}
              title={newsData.title}
              onClick={handleClickNews({ newsId: newsData.slug })}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          {paginationRange.map((pageNumber, i) => {
            return (
              <PaginationItem
                key={i}
                {...{
                  pageNumber: pageNumber,
                  isActive: Number(pageNumber) === currentPage
                }}
                onClick={() =>
                  router.push('' + '?page=' + pageNumber, undefined, { shallow: false })
                }
              />
            );
          })}
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.query?.page) || 0;

  try {
    const response = await getAllNews({ limit: page <= 1 ? 7 : 6, page });

    return { props: { news: response.data, pagination: response.pagination } };
  } catch (error) {
    return { props: { news: [], pagination: defaultPagination } };
  }
};
export default News;
