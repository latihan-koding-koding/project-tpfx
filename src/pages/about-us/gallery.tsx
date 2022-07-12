import 'react-image-lightbox/style.css';

import Banner from '@components/Banner/Banner';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { galleries } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import { defaultPagination, getAllGalleries, PaginationResult } from '../../apis/galleries';
import { PaginationItem } from '../../components';
import { usePagination } from '../../hooks/usePagination';

const CardGallery = ({ url, onClick }: { url: string; onClick?: () => void }) => (
  <div
    className="rounded-md border-secondary-gray-3 min-w-[363px] cursor-pointer"
    onClick={onClick}
  >
    <div
      className="h-[296px] w-full  bg-secondary-gray-4 "
      style={{
        backgroundImage: `url('${url}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  </div>
);

const GalleryBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/Gallery.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Gallery
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Kenal dan temukan lebih jauh mengenai TPFx
          </Text>
        </div>
      </main>
    </div>
  </Banner>
);

const Gallery = ({
  galleries,
  pagination
}: {
  galleries: Array<galleries>;
  pagination: PaginationResult;
}) => {
  const router = useRouter();

  const [photoData, setPhotoData] = useState({ isOpen: false, photoIndex: 0 });

  const paginationRange = usePagination({
    currentPage: pagination.currentPage,
    totalCount: pagination.total,
    siblingCount: 1,
    pageSize: pagination.perPage,
    totalPageCount: pagination.pageCount
  });

  return (
    <Layout>
      {photoData.isOpen && (
        <Lightbox
          mainSrc={'https://cms.tpfx.co.id/public/' + galleries[photoData.photoIndex].file_path}
          nextSrc={
            'https://cms.tpfx.co.id/public/' +
            galleries[(photoData.photoIndex + 1) % galleries.length].file_path
          }
          prevSrc={
            'https://cms.tpfx.co.id/public/' +
            galleries[(photoData.photoIndex + galleries.length - 1) % galleries.length].file_path
          }
          onCloseRequest={() => setPhotoData((v) => ({ ...v, isOpen: false }))}
          onMovePrevRequest={() =>
            setPhotoData((v) => ({
              ...v,
              photoIndex: (photoData.photoIndex + galleries.length - 1) % galleries.length
            }))
          }
          onMoveNextRequest={() =>
            setPhotoData((v) => ({
              ...v,
              photoIndex: (photoData.photoIndex + 1) % galleries.length
            }))
          }
        />
      )}
      <GalleryBanner />
      <Section className="pt-9 pb-20">
        <Text fontSize={36} fontWeight={600} textAlign="center">
          Gallery
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-16 px-4 lg:px-0 gap-3">
          {galleries?.map((data, i) => (
            <CardGallery
              key={i}
              url={'https://cms.tpfx.co.id/public/' + data.file_path}
              onClick={() => {
                setPhotoData({ isOpen: true, photoIndex: i });
              }}
            />
          ))}
        </div>

        <div className="flex justify-end mt-4">
          {paginationRange.map((pageNumber, i) => {
            return (
              <PaginationItem
                key={i}
                {...{
                  pageNumber: Number(pageNumber),
                  isActive: Number(pageNumber) === pagination.currentPage
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
    const response = await getAllGalleries({ limit: 6, page });

    return { props: { galleries: response.data, pagination: response.pagination } };
  } catch (error) {
    return { props: { galleries: [], pagination: defaultPagination } };
  }
};

export default Gallery;
