import Banner from '@components/Banner/Banner';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledMain = styled.main`
  ${tw`px-4 lg:max-w-3xl lg:w-full flex`}
  height: max(0.4*100vw, 650px);
`;

const CompanyProfileBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/company_profile.png">
    <StyledMain>
      <div className="sm:text-center lg:text-left m-auto">
        <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
          Tentang Kami
        </Text>
        <Text
          fontSize={18}
          fontWeight={400}
          fontFamily="Inter"
          className="mt-4 text-white !text-justify"
        >
          TPFx adalah perusahaan yang berorientasi pada inovasi yang bertujuan untuk memberikan
          pengalaman transaksi yang terbaik dengan produk-produk trading terbaik yang bervariasi dan
          memberikan pelayanan terbaik kepada para client sebagai broker terbaik di Indonesia.
          <br />
          <br />
          BAPPEBTI dan resmi sebagai anggota Jakarta Futures Exchange (JFX). Terdaftar resmi sebagai
          broker teregulasi sejak 2004 TPFx berharap dapat menjadi pelopor yang terdepan dalam
          menawarkan transaksi derivatif Forex, Komoditi, CFD dan Index karena fokus kami adalah
          pelayanan terhadap pelayanan client.
        </Text>
      </div>
    </StyledMain>
  </Banner>
);

// const licenseData = [
//   {
//     imgUrl: '/images/about-us/bappebti.png',
//     title: 'Badan Pengawas Perdagangan Berjangka Komoditi | BAPPEBTI',
//     desc: '407/BAPPEBTI/SI/VII/2004'
//   },
//   {
//     imgUrl: '/images/about-us/aspebtindo.png',
//     title: 'Asosiasi Perdagangan Berjangka Komoditi Indonesia | ASPEBTINDO',
//     desc: '0031/ASPEBTINDO/ANG-B/7/2015'
//   },
//   {
//     imgUrl: '/images/about-us/jfx.png',
//     title: 'BURSA BERJANGKA JAKARTA | JFX',
//     desc: 'SPAB-006/BBJ/05/04'
//   },
//   {
//     imgUrl: '/images/about-us/kbi.png',
//     title: 'KLIRING BERJANGKA INDONESIA | KBI',
//     desc: '25/AK-KBI/VIII/2004'
//   }
// ];

const CompanyProfile: NextPage = () => {
  return (
    <Layout>
      <CompanyProfileBanner />
      {/* <Section>
        <div className="py-11 lg:py-28 flex flex-col">
          <Text
            fontWeight={600}
            fontSize={36}
            className="text-primary-gray-4 mb-12"
            textAlign="center"
          >
            Legalitas
          </Text>
          <div className="flex flex-wrap justify-center">
            {licenseData.map((data, i) => (
              <div
                key={i}
                className="flex flex-col m-9 w-full rounded-lg bg-secondary-gray-6 items-center p-10 "
                style={{
                  maxWidth: 487,
                  minHeight: 400
                }}
              >
                <div>
                  <Image src={data.imgUrl} width={250} height={250} alt="license-img" />
                </div>
                <Text fontSize={18} fontWeight={600} textAlign="center">
                  {data.title}
                </Text>
                <Text className="text-secondary-gray" fontSize={18} fontWeight={600}>
                  {data.desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section> */}

      <Section className="bg-secondary-gold-5 py-12">
        <Text fontWeight={700} fontSize={36} textAlign="center" className="mb-24">
          Visi Kami dan Misi Kami
        </Text>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="lg:order-first order-last max-w-2xl mx-auto lg:m-0 ">
            <Text fontWeight={700} fontSize={36} textAlign="center">
              Visi Kami
            </Text>
            <div className="mx-auto lg:m-0">
              <div className="my-9">
                <Text
                  fontWeight={600}
                  fontSize={18}
                  textAlign="center"
                  className="mb-4 !text-justify"
                >
                  Menjadi perusahaan berjangka komoditi dengan pangsa pasar yang luas, khususnya di
                  tingkat nasional. Menjadi perusahaan pialang berjangka komoditi terdepan di
                  tingkat nasional dan menjadikannya sebagai perusahaan yang bertaraf nasional.
                </Text>
              </div>
            </div>
          </div>
          <div className="lg:order-first order-last max-w-2xl mx-auto lg:m-0 ">
            <Text fontWeight={700} fontSize={36} textAlign="center">
              Misi Kami
            </Text>
            <div className="mx-auto lg:m-0">
              <div className="my-9">
                <Text
                  fontWeight={600}
                  fontSize={18}
                  textAlign="center"
                  className="mb-4 !text-justify"
                >
                  Berpartisipasi menyebarluaskan perdagangan berjangka komoditi di Indonesia.
                  Mengembangkan dan memajukan perdagangan berjangka komoditi di Indonesia, sehingga
                  dapat menjadi alternatif investasi yang dapat diandalkan dan pada gilirannya
                  membantu meningkatkan perekonomian nasional. Ikut memberdayagunakan perdagangan
                  berjangka komiditi di Bursa Berjangka Indonesia dengan membantu investor yang
                  ingin menggunakannya sebagai sarana lindung nilai (hedging) bagi produsen maupun
                  para pelaku pasar uang hanya ingin memanfaatkan fluktuasi harga komoditi yang
                  diperdagangankan.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* 
      <div className="w-full bg-white">
        <div className="max-w-7xl flex py-7 px-5 flex-wrap lg:flex-nowrap sm:justify-start md:justify-center xl:justify-between m-auto text-primary-black-1">
          <div className="flex items-center  md:max-w-sm lg:mb-2 mb-4 md:mb-2 xl:mb-0 ">
            <div className="flex-shrink-0">
              <Image src={'/images/BuildingIcon.svg'} width={80} height={80} alt="building-icon" />
            </div>
            <div className="ml-9">
              <Text fontWeight="bold" fontSize={24} className="text-primary-gold-1">
                17 Tahun +
              </Text>
              <Text fontSize={14} fontFamily="Inter">
                Pengalaman berbisnis dalam industri berjangka lebih dari 17 tahun.
              </Text>
            </div>
          </div>
          <div className="flex items-center md:max-w-sm lg:mb-2 mb-4 md:mb-2 xl:mb-0 lg:mx-2  ">
            <div className="flex-shrink-0">
              <Image src={'/images/GraphIcon.svg'} width={80} height={80} alt="building-icon" />
            </div>
            <div className="ml-9">
              <Text fontWeight="bold" fontSize={24} className="text-primary-gold-1">
                70.000+
              </Text>
              <Text fontSize={14} fontFamily="Inter">
                Sebanyak lebih dari 70.000 transaksi trading sudah terselesaikan di TPFx.
              </Text>
            </div>
          </div>
          <div className="flex items-center md:max-w-sm lg:mb-2 mb-4 md:mb-2 xl:mb-0 ">
            <div className="flex-shrink-0">
              <Image
                src={'/images/ConnectingIcon.svg'}
                width={80}
                height={80}
                alt="building-icon"
              />
            </div>
            <div className="ml-9">
              <Text fontWeight="bold" fontSize={24} className="text-primary-gold-1">
                3000+
              </Text>
              <Text fontSize={14} fontFamily="Inter">
                3.000+ nasabah sudah bergabung dan mempercayai trading di TPFx.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Banner bgType="image" bgUrl="/images/banners/company_profile2.png">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 flex-1 flex">
          <main className="mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-24 xl:mt-28">
            <div className="sm:text-center lg:text-left max-w-[500px]">
              <Text
                fontSize={36}
                fontWeight={600}
                className="mt-4 text-white sm:text-4xl"
                textAlign="left"
              >
                Title Section
              </Text>
              <Text
                fontSize={18}
                fontWeight={400}
                fontFamily="Inter"
                className="mt-4 text-white"
                textAlign="left"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit officia
                nihil ipsam. Fuga, saepe repudiandae? Pariatur recusandae architecto quaerat
                perspiciatis eius aperiam,
              </Text>
            </div>
            <div className="grid grid-cols-1 gap-12 flex-1 mx-6 mt-24 md:grid-cols-2 lg:grid-cols-3">
              <div className="mx-8 ">
                <Text
                  fontSize={18}
                  fontWeight={600}
                  className="mt-4 text-white sm:text-4xl"
                  textAlign="left"
                >
                  Content Section 1
                </Text>
                <Text fontFamily="Inter" className="mt-4 text-white" textAlign="left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus dolorum,
                  pariatur tempore sunt adipisci quis debitis necessitatibus. Magnam nesciunt
                  incidunt culpa, numquam similique.
                </Text>
              </div>
              <div className="mx-8 ">
                <Text
                  fontSize={18}
                  fontWeight={600}
                  className="mt-4 text-white sm:text-4xl"
                  textAlign="left"
                >
                  Content Section 2
                </Text>
                <Text fontFamily="Inter" className="mt-4 text-white" textAlign="left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus dolorum,
                  pariatur tempore sunt adipisci quis debitis necessitatibus. Magnam nesciunt
                  incidunt culpa, numquam similique.
                </Text>
              </div>
              <div className="mx-8 ">
                <Text
                  fontSize={18}
                  fontWeight={600}
                  className="mt-4 text-white sm:text-4xl"
                  textAlign="left"
                >
                  Content Section 3
                </Text>
                <Text fontFamily="Inter" className="mt-4 text-white" textAlign="left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus dolorum,
                  pariatur tempore sunt adipisci quis debitis necessitatibus. Magnam nesciunt
                  incidunt culpa, numquam similique.
                </Text>
              </div>
            </div>
          </main>
        </div>
      </Banner> */}
    </Layout>
  );
};
export default CompanyProfile;
