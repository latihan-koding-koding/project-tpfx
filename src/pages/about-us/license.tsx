import Banner from '@components/Banner/Banner';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledMain = styled.main`
  ${tw`px-4 lg:max-w-2xl lg:w-full flex`}
  height: max(0.3*100vw, 400px);
`;

const LicenseBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/license.png">
    <StyledMain>
      <div className="sm:text-center lg:text-left m-auto">
        <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
          Lisensi
        </Text>
        <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
          PT Trijaya Pratama Futures sepenuhnya diatur dan dibawah pengawasan oleh Badan Pengawas
          Perdagangan Berjangka Komoditi (BAPPEBTI) dengan Nomor Izin: 407/BAPPEBTI/SI/VII/2004.
          Menjadi anggota resmi dari Bursa Berjangka Jakarta (JFX) SPAB-066/BBJ/05/04 dan Kliring
          Berjangka Indonesia dengan Nomor: 25/AK-KBI/VIII/2004. Anggota Perdagangan Berjangka
          Komoditi Indonesia dengan nomor izin:
        </Text>
      </div>
    </StyledMain>
  </Banner>
);

const licenseData = [
  {
    imgUrl: '/images/about-us/bappebti.png',
    title: 'Badan Pengawas Perdagangan Berjangka Komoditi | BAPPEBTI',
    desc: '407/BAPPEBTI/SI/VII/2004'
  },
  {
    imgUrl: '/images/about-us/aspebtindo.png',
    title: 'Asosiasi Perdagangan Berjangka Komoditi Indonesia | ASPEBTINDO',
    desc: '0031/ASPEBTINDO/ANG-B/7/2015'
  },
  {
    imgUrl: '/images/about-us/jfx.png',
    title: 'BURSA BERJANGKA JAKARTA | JFX',
    desc: 'SPAB-006/BBJ/05/04'
  },
  {
    imgUrl: '/images/about-us/kbi.png',
    title: 'KLIRING BERJANGKA INDONESIA | KBI',
    desc: '25/AK-KBI/VIII/2004'
  }
];
const License: NextPage = () => {
  return (
    <Layout>
      <LicenseBanner />
      <Section>
        <div className="py-11 lg:py-28 flex flex-col">
          <Text
            fontWeight={600}
            fontSize={36}
            className="text-primary-gray-4 mb-12"
            textAlign="center"
          >
            Lisensi
          </Text>

          <div className="grid">
            {licenseData.map((data, i) => (
              <div key={i} className="flex rounded-lg py-10 ">
                <div className="px-10">
                  <Image src={data.imgUrl} width={100} height={100} alt="license-img" />
                </div>
                <div className="border-b w-full pb-12 pt-4 px-12">
                  <Text fontSize={18} fontWeight={600}>
                    {data.title}
                  </Text>
                  <Text className="text-secondary-gray" fontSize={18} fontWeight={600}>
                    {data.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default License;
