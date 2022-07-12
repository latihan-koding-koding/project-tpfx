import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { news } from '@prisma/client';
import { getAllNews, getNews } from 'apis/news';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

import { CardNews } from '.';

const NewsDetailBanner = (props: { title: string; summary: string }) => (
  <Banner bgType="image" bgUrl="/images/banners/news_detail.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            {props.title}
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            {props.summary}
          </Text>
        </div>
      </main>
    </div>
  </Banner>
);

const NewsDetail = (props: { news: news; moreNews: Array<news> }) => {
  const router = useRouter();
  const navigateToRegist = () => router.push('/register');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;

    const container = document.getElementById('widget-container');
    if (container) {
      container?.appendChild(script);
    }
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0
    });
  }, []);

  if (!props.news) {
    router.back();
  }

  return (
    <Layout>
      <NewsDetailBanner {...props.news} />
      <Section className="py-20">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-16 my-8">
          <div className="col-span-2 p-2">
            {/* FIXME: resize  */}
            <Card
              className="text-white rounded-md overflow-hidden !bg-secondary-gray-3 h-[250px] items-center flex justify-center object-contain self-start float-left mr-12 mb-9"
              style={{
                minHeight: 296,
                maxHeight: 296,
                minWidth: 350,
                backgroundImage: `url('https://cms.tpfx.co.id/public/${props.news.image}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center'
              }}
            ></Card>
            <div className="text-primary-black-1">
              <div dangerouslySetInnerHTML={{ __html: props.news.description }} />
            </div>
          </div>
          <div className="flex flex-row xl:flex-col col-span-2 xl:col-span-1 justify-evenly xl:justify-start">
            <div>
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
            </div>
            <div>
              <Card
                className="text-white rounded-md overflow-hidden !bg-secondary-gray-3  items-center flex justify-center"
                style={{ minHeight: 296 }}
              >
                <div className="tradingview-widget-container">
                  <div className="tradingview-widget-container__widget" id="widget-container"></div>
                  <div className="tradingview-widget-copyright">
                    <a
                      href="https://www.tradingview.com/markets/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="blue-text">Financial Markets</span>
                    </a>{' '}
                    by TradingView
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Text fontSize={36} fontWeight={600} textAlign="center">
          Berita Lainnya
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 my-16 ">
          {props.moreNews?.map((data, i) => (
            <CardNews
              key={i}
              imgUrl={'https://cms.tpfx.co.id/public/' + data.image}
              date={data.created_at}
              title={data.title}
              onClick={() => {
                window.location.href =
                  window.location.origin + '/market-analysis/news/' + data.slug;
              }}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }: { query: { newsId: string } }) => {
  try {
    const response = await getNews({ slug: query.newsId });
    const responseMore = await getAllNews({ limit: 3 });

    if (response.success) {
      return { props: { news: response.data, moreNews: responseMore.data } };
    } else {
      return { props: {} };
    }
  } catch (error) {
    return { props: { news: [] } };
  }
};
export default NewsDetail;
