import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Button } from '@components/Button/Button';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { banners } from '@prisma/client';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import tw from 'twin.macro';

import { getAllBanners } from '../apis/banners';
import BannerComp from '../components/Banner/Banner';
import { BannerPropsInterface } from '../components/Banner/Banner.type';
import Card from '../components/Card/Card';
import { forexBenefits } from './instrument/forex';
import { RegisterSection } from './register';

const Banner = ({ children, bgUrl }: BannerPropsInterface) => {
  return (
    <div className="bg-primary-gray-4 overflow-hidden flex relative ">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full left-1/2 -translate-x-1/2"
          style={{ minWidth: 952 }}
        >
          <source src={bgUrl || ''} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="inset-y-0 right-0 w-full h-full bg-black opacity-40" />
      </div>
      <div className="max-w-7xl mx-auto flex-1 w-full">{children}</div>
    </div>
  );
};

const StyledMain = styled.main`
  ${tw`lg:w-full`}
  padding-bottom:10%;
  padding-top: 10%;
`;

const bannerContents: Array<Omit<banners, 'id' | 'priority' | 'created_at' | 'updated_at'>> = [
  {
    title: 'Sekarang Sudah Bisa Trading Mulai 0,01',
    subtitle:
      'Untuk pertama kalinya, sekarang Anda bisa trading di broker lokal mulai dari 0,01 lot',
    download: 'Mulai Trading Sekarang',
    url: ''
  },
  {
    title: 'Trading Bebas Swap, Tanpa Komisi, Spread Rendah dan Leverage Besar',
    subtitle:
      'Rasakan trading lebih profit karena tidak ada swap, tidak ada komisi, spread yang rendah dan leverage sebesar 1:400',
    download: 'Mulai Trading Tanpa Komisi dan Swap',
    url: ''
  },
  {
    title: 'Mulai Trading Dengan Lot Size 0,01',
    subtitle: 'Nikmati trading di broker lokal dimulai dari 0,01 lot, tanpa komisi dan swap.',
    download: 'Mulai Trading 0,01 Lot',
    url: ''
  },
  {
    title: 'Cara Terbaik Meningkatkan Income Dari Trading',
    subtitle:
      'Tingkatkan income Anda dengan mulai trading di berbagai instrument seperti Forex, Komoditi, dan Indeks Saham bersama TPFx.',
    download: 'Mulai Tingatkan Income Anda',
    url: ''
  }
];

const HomeBanner = ({ banners, router }: { banners?: Array<banners>; router: NextRouter }) => {
  const [bannerList, setBannerList] = useState(bannerContents);

  useEffect(() => {
    const newBanner = (banners || []).sort((a, b) => a.priority - b.priority);

    if (newBanner.length) {
      setBannerList(newBanner);
    }
  }, [banners]);

  return (
    <Banner bgType="video" bgUrl="/videos/BannerHome.mp4">
      <StyledMain className="lg:w-full z-10 h-ful flex">
        <div className="m-auto overflow-hidden">
          <Carousel
            autoPlay
            infiniteLoop
            stopOnHover
            interval={6000}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            renderIndicator={(onClick, isActive) => {
              return (
                <li className="inline-block cursor-pointer" onClick={onClick}>
                  <div
                    className={`mx-1 rounded-xl
                    ${isActive ? 'bg-primary-gold-1' : 'bg-secondary-gray-3'}`}
                    style={{ width: 10, height: 10 }}
                  />
                </li>
              );
            }}
          >
            {bannerList.map((content, i) => {
              const isSameSite = content.url.includes('www.tpfx.co.id');
              const url = isSameSite ? content.url.split('.co.id')[1] : content.url;
              return (
                <div key={i} className="px-8">
                  <div className="sm:text-center lg:text-left mr-auto w-full lg:max-w-4xl self-start">
                    <Text fontSize={36} fontWeight={600} className="mt-4 text-white" as="h1">
                      {content.title}
                    </Text>
                    <Text
                      fontSize={18}
                      fontWeight={400}
                      fontFamily="Inter"
                      className="mt-4 text-white"
                    >
                      {content.subtitle}
                    </Text>
                    <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
                      <Button
                        variant="primary"
                        className="py-3 !px-8 "
                        onClick={() => {
                          if (isSameSite) {
                            return router.push(url);
                          }
                          window.open(url, '_blank');
                        }}
                      >
                        <Text fontWeight={600} className="text-white">
                          {content.download}
                        </Text>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </StyledMain>
    </Banner>
  );
};

const Widget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.append(
      `{
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en"
      }`
    );

    const container = document.getElementById('tradingview-widget-container');
    if (container) {
      container.innerHTML = '';
      container?.appendChild(script);
    }
  }, []);
  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" id="tradingview-widget-container"></div>
    </div>
  );
};

const Home = ({ banners }: { banners?: Array<banners> }) => {
  const router = useRouter();

  const goToRegister = () => router.push('/register');

  return (
    <Layout>
      <HomeBanner {...{ router, banners }} />
      <div className="w-full bg-white">
        <div className="max-w-7xl flex py-7 px-5 flex-wrap lg:flex-nowrap sm:justify-start md:justify-center xl:justify-between m-auto text-primary-black-1">
          <div className="flex items-center  md:max-w-sm lg:mb-2 mb-4 md:mb-2 xl:mb-0 ">
            <div className="ml-9">
              <Text fontWeight="bold" fontSize={24} className="text-primary-gold-1">
                18 Tahun +
              </Text>
              <Text fontSize={14} fontFamily="Inter">
                Pengalaman berbisnis dalam industri berjangka lebih dari 18 tahun.
              </Text>
            </div>
          </div>
          <div className="flex items-center md:max-w-sm lg:mb-2 mb-4 md:mb-2 xl:mb-0 lg:mx-2">
            <div className="ml-9">
              <Text fontWeight="bold" fontSize={24} className="text-primary-gold-1">
                1,000 +
              </Text>
              <Text fontSize={14} fontFamily="Inter">
                Sebanyak lebih dari 1,000 lot transaksi trading sudah terselesaikan di TPFx setiap
                harinya.
              </Text>
            </div>
          </div>
          <div className="flex items-center md:max-w-sm lg:mb-2 mb-4 md:mb-2 xl:mb-0">
            <div className="ml-9">
              <Text fontWeight="bold" fontSize={24} className="text-primary-gold-1">
                15,000+
              </Text>
              <Text fontSize={14} fontFamily="Inter">
                15,000+ nasabah sudah bergabung dan mempercayai trading di TPFx.
              </Text>
            </div>
          </div>
        </div>
      </div>

      <BannerComp bgType="image" bgUrl="/images/home/section_6.jpg">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 flex-1 flex justify-center">
          <main className="mt-10 m-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center max-w-[600px] text-white">
              <Text fontSize={36} fontWeight={600} className="mt-4  sm:text-4xl" textAlign="center">
                Platform Trading dengan Acuity
              </Text>
              <Text
                fontSize={18}
                fontWeight={400}
                fontFamily="Inter"
                className="mt-4 "
                textAlign="center"
              >
                Eksekusi langsung menggunakan expert advisor Acuity pada platform Metatrader anda
              </Text>
              <Button variant="primary" className="mt-12" onClick={goToRegister}>
                <Text fontWeight={600} fontFamily="Inter">
                  Dapatkan Acuity
                </Text>
              </Button>
            </div>
          </main>
        </div>
      </BannerComp>
      <Widget />
      <Section className="bg-secondary-gold-5 relative rounded-b-xl">
        <div className="absolute z-1 top-0 -right-10">
          <Image src="/images/tpfx_white.png" width={800} height={357.35} alt="tpfx" />
        </div>
        <div className="max-w-7xl flex mx-auto flex-col w-full z-10">
          <div className="max-w-7xl flex py-11 lg:py-8 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col-reverse">
            <div className="lg:mr-10 mb-6 flex-1">
              <Text
                fontWeight={700}
                className="text-primary-gold-1 mb-2 !text-center lg:!text-left mt-4 lg:mt-0"
              >
                Motto TPFx
              </Text>
              <Text
                fontWeight={600}
                fontSize={36}
                className="mb-3 !text-center lg:!text-left"
                as="h1"
              >
                Your Trust is Our Satisfaction
              </Text>
              <Text
                className="max-w-md mb-9 !text-center lg:!text-left mx-auto lg:ml-0 "
                fontWeight={400}
                fontFamily="Inter"
                fontSize={18}
                as="h2"
              >
                Kami telah menyiapkan berbagai strategi dalam mewujudkan motto Kami. Yang dikelola
                oleh tenaga ahli dan profesional di bidang Perdagangan Berjangka serta mengutamakan
                kenyamanan para nasabah.
              </Text>
              <div className="w-fit mx-auto lg:ml-0">
                <Button onClick={goToRegister}>
                  <Text fontFamily="Inter" fontWeight={700} className="text-white">
                    Trading dengan TPFx
                  </Text>
                </Button>
              </div>
            </div>
            <div className="flex-1 lg:ml-10 w-full max-w-xl">
              <Image
                src="/images/home/section_1_1.jpg"
                alt="Your Trust is Our Satisfaction"
                width={576}
                height={328}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex py-11 lg:py-11 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col">
            <div className="flex-1 lg:mr-10 w-full max-w-xl">
              <Image
                src="/images/home/section_1_2.jpg"
                alt="Your Trust is Our Satisfaction"
                width={576}
                height={328}
                className="rounded-lg"
              />
            </div>
            <div className="lg:ml-10 mb-6 flex-1">
              <Text
                fontWeight={700}
                className="text-primary-gold-1 mb-2 mt-4 lg:mt-0 !text-center lg:!text-left"
                as="h1"
              >
                Keunggulan TPFx
              </Text>
              <Text
                fontWeight={600}
                fontSize={36}
                className="mb-3 !text-center lg:!text-left"
                as="h1"
              >
                Keamanan dan Kenyamanan Nasabah
              </Text>
              <Text
                className="max-w-md mb-9 !text-center lg:!text-left mx-auto lg:ml-0"
                fontWeight={400}
                fontFamily="Inter"
                fontSize={18}
                as="h2"
              >
                Semua keamanan dana nasabah terjamin karena disetorkan ke rekening terpisah pada
                bank yang ditunjuk oleh BAPPEBTI (segregated account).
              </Text>
              <div className="w-fit mx-auto lg:ml-0">
                <Button onClick={goToRegister}>
                  <Text fontFamily="Inter" fontWeight={700} className="text-white">
                    Trading Aman dengan TPFx
                  </Text>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pb-[89px] px-12">
        <Text
          fontWeight={600}
          fontSize={36}
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
        >
          Keuntungan Trading di Forex
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 xl:gap-16">
          {forexBenefits.map((data, i) => (
            <Card key={i} className="relative px-6 py-8 !bg-secondary-gray-7">
              <>
                <Text fontWeight={600} fontSize={24} className="mb-3">
                  {data.title}
                </Text>
                <Text fontWeight={400} fontFamily="Inter">
                  {data.desc}
                </Text>
              </>
            </Card>
          ))}
        </div>
      </Section>
      <RegisterSection />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getAllBanners();
    if (response.success) {
      return { props: { banners: response.data } };
    } else {
      return { props: { banners: [] } };
    }
  } catch (error) {
    return { props: { banners: [] } };
  }
};
export default Home;
