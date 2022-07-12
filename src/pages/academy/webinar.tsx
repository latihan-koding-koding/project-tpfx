import Banner from '@components/Banner/Banner';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { webinars } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { defaultPagination, PaginationResult } from '../../apis/galleries';
import { getAllWebinars } from '../../apis/webinar';
import { PaginationItem } from '../../components';
import { usePagination } from '../../hooks/usePagination';

interface WebinarCardInterface {
  title: string;
  url?: string;
  imgUrl?: string;
  onClick?: () => void;
}
const CardWebinar = (props?: WebinarCardInterface) => (
  <div
    className="rounded-md border-secondary-gray-3 min-w-[363px] cursor-pointer"
    onClick={props?.onClick}
  >
    <div
      className="h-[296px] w-full  bg-secondary-gray-4 mb-5"
      style={{
        backgroundImage: `url('${props?.imgUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <Text fontSize={18} fontWeight={600}>
      {props?.title}
    </Text>
  </div>
);

const WebinarBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/webinar.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Jadwal Webinar dan Seminar TPFx
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Pelajari cara trading online dengan mengikuti seminar dan webinar dari TPFx.
          </Text>
        </div>
      </main>
    </div>
  </Banner>
);

const Webinar = ({
  webinars,
  pagination
}: {
  webinars: Array<webinars>;
  pagination: PaginationResult;
}) => {
  const router = useRouter();

  const paginationRange = usePagination({
    currentPage: pagination.currentPage,
    totalCount: pagination.total,
    siblingCount: 1,
    pageSize: pagination.perPage,
    totalPageCount: pagination.pageCount
  });

  return (
    <Layout>
      <WebinarBanner />
      <Section className="pt-9 pb-20">
        <Text fontSize={36} fontWeight={600} textAlign="center">
          Latest Event
        </Text>
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-16 my-16">
          {webinars.map((data, i) => (
            <CardWebinar
              key={i}
              imgUrl={data.image}
              title={data.title}
              onClick={() => window.open(data.url, '_blank')}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          {paginationRange.map((pageNumber, i) => (
            <PaginationItem
              key={i}
              {...{ pageNumber, isActive: pageNumber === pagination.currentPage }}
              onClick={() => router.push('' + '?page=' + pageNumber, undefined, { shallow: false })}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.query?.page) || 0;
  try {
    const response = await getAllWebinars({ limit: 6, page });

    return { props: { webinars: response.data, pagination: response.pagination } };
  } catch (error) {
    return { props: { webinars: [], pagination: defaultPagination } };
  }
};

export default Webinar;
