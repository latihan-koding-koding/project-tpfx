import Banner from '@components/Banner/Banner';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Card from '../../components/Card/Card';
import Map from '../../components/Maps';

const StyledMain = styled.main`
  ${tw`px-4 lg:max-w-2xl lg:w-full flex`}
  height: max(0.4*100vw, 350px);
`;

const ContactUsBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/contact_us.png">
    <StyledMain>
      <div className="sm:text-center lg:text-left m-auto  ">
        <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
          Hubungi Kami
        </Text>
        <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
          Hubungi kami untuk informasi lebih lanjut
        </Text>
      </div>
    </StyledMain>
  </Banner>
);

const center = { lat: -6.2108315, lng: 106.818838 };
const zoom = 17;

const colData = [
  {
    title: 'Alamat Kantor',
    desc: 'Untuk mendapatkan pelayanan terbaik anda dapat mengunjungi kantor TPFx'
  },
  {
    title: 'Pengaduan Online',
    desc: 'Untuk mempermudah pengaduan, anda dapat melakukan nya secara online'
  }
];

const ContactUs: NextPage = () => {
  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <div />;
  };

  return (
    <Layout>
      <ContactUsBanner />
      <div className="w-full bg-white">
        <div className="max-w-7xl flex py-7 px-5 flex-wrap lg:flex-nowrap  justify-center xl:justify-between m-auto text-primary-black-1">
          <div className="flex md:max-w-2xl lg:mb-2 mb-4 md:mb-2 xl:mb-0 ">
            <div className="md:ml-9 mt-9">
              <Text fontWeight="bold" fontSize={24} className="!text-center lg:!text-left">
                Hubungi kami
              </Text>
              <Text fontSize={14} fontFamily="Inter" className="!text-center lg:!text-left">
                Pengalaman berbisnis dalam industri berjangka lebih dari 17 tahun.
              </Text>
            </div>
          </div>
          <div className="flex items-center md:max-w-2xl lg:mb-2 mb-4 md:mb-2 xl:mb-0 lg:mx-2">
            <div className="md:ml-9 mt-9">
              <Text fontWeight="bold" fontSize={24} className="!text-center lg:!text-left">
                Kirimkan pesan kepada kami
              </Text>
              <Text fontSize={14} fontFamily="Inter" className="!text-center lg:!text-left">
                Sebanyak lebih dari 70.000 transaksi trading sudah terselesaikan di TPFx.
              </Text>
            </div>
          </div>
          <div className="flex items-center md:max-w-2xl lg:mb-2 mb-4 md:mb-2 xl:mb-0 ">
            <div className="md:ml-9 mt-9">
              <Text
                fontWeight="bold"
                fontSize={24}
                className="xl:whitespace-nowrap !text-center lg:!text-left"
              >
                Dukungan Obrolan Langsung
              </Text>
              <Text fontSize={14} fontFamily="Inter" className="!text-center lg:!text-left">
                Cara tercepat untuk berkomunikasi dengan Dukungan Pelanggan
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Section className="pt-32 pb-28">
        <Text
          fontWeight={600}
          fontSize={36}
          className="text-primary-gray-4 mb-12"
          textAlign="center"
        >
          Hubungi Kami
        </Text>
        <div className="grid grid-cols-2 gap-9">
          <div className="py-12 sm:px-3 md:px-11 rounded-xl bg-secondary-gray-7 flex flex-wrap-reverse justify-center sm:justify-between items-center text-primary-black-1">
            <div>
              <Text fontSize={24} fontWeight={700} className="!text-center sm:!text-left">
                Alamat Email
              </Text>
              <Text fontFamily="Inter" fontSize={18} className="!text-center sm:!text-left">
                support@tpfx.co.id
              </Text>
            </div>
            <div>
              <Image src="/images/icons/Mail.png" width={60} height={60} alt="mail-icon" />
            </div>
          </div>
          <div className="py-12 sm:px-3 md:px-11 rounded-xl bg-secondary-gray-7 flex flex-wrap-reverse justify-center sm:justify-between text-primary-black-1">
            <div>
              <Text fontSize={24} fontWeight={700} className="!text-center sm:!text-left">
                Nomor Telefon
              </Text>
              <Text fontFamily="Inter" fontSize={18} className="!text-center sm:!text-left">
                (+62)21 252 75 77
              </Text>
            </div>
            <div>
              <Image src="/images/icons/Phone.png" width={60} height={60} alt="mail-icon" />
            </div>
          </div>
        </div>
      </Section>
      <Section className="py-24 bg-secondary-gold-5">
        <div className="grid xl:grid-cols-2 gap-20">
          <div className="xl:ml-0 mx-auto border" style={{ height: 467, width: '100%' }}>
            {/* TODO: MOVE APIKEY TO ENV */}
            <Wrapper apiKey="AIzaSyDc4tgf7y_ZKGC4KqrYv5CC9bpaqBShCyM" render={render}>
              <Map center={center} zoom={zoom} />
            </Wrapper>
          </div>
          <div className="max-w-2xl mx-auto xl:m-0">
            <div>
              <Text fontWeight={700} fontSize={36} className="!text-center xl:!text-left mb-3">
                Alamat Kami TPFx
              </Text>
              <Text fontSize={18} fontFamily="Inter" className="!text-center xl:!text-left">
                Gedung Sahid Soedirman Center, Lt. 20A/E,
                <br />
                Jl. Jenderal Sudirman No 86,
                <br />
                Kel. Karet Tengsin, Kec. Tanah Abang,
                <br />
                Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta,
                <br />
                Kode Pos 10220
              </Text>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-20">
              {colData.map((data, i) => (
                <Card
                  key={i}
                  className="relative px-6 p-8 !bg-secondary-gray-7"
                  style={{ maxWidth: 263 }}
                >
                  <>
                    {/* <div className="absolute -top-8 -left-7">
                    <Image
                      src={'/images/instrument/graph.png'}
                      width={80}
                      height={80}
                      alt="logo-benefit"
                    />
                  </div> */}
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
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid lg:grid-cols-2">
          <div>
            <Text fontWeight={700} fontSize={36} className="!text-center xl:!text-left mb-3">
              Pengaduan Online
            </Text>
            <Text fontSize={18} fontFamily="Inter" className="!text-center xl:!text-left">
              Hubungi kami melalui pengaduan online
            </Text>
          </div>
          <div>
            <div className="w-fit ml-auto mr-auto lg:mr-0 mt-7 lg:mt-0">
              <div className="flex items-center mb-5 flex-wrap">
                <Image src={'/images/icons/Website.png'} width={35} height={35} alt="l" />
                <Text fontWeight={700} fontSize={18} className="w-36 mx-5">
                  Situs Resmi
                </Text>
                {/* onclick target blank */}
                <Text fontSize={18} fontFamily="Inter" className="text-primary-gold-1">
                  https://pengaduan.bappebti.go.id
                </Text>
              </div>
              <div className="flex items-center mb-5">
                <Image src={'/images/icons/Call.png'} width={35} height={35} alt="l" />
                <Text fontWeight={700} fontSize={18} className="w-36 mx-5">
                  Nomor Telfon
                </Text>
                <Text fontSize={18} fontFamily="Inter" className="text-primary-gold-1">
                  +6221 252 75 77
                </Text>
              </div>
              <div className="flex items-center mb-5">
                <Image src={'/images/icons/Address.png'} width={35} height={35} alt="l" />
                <Text fontWeight={700} fontSize={18} className="w-36 mx-5">
                  Alamat Email
                </Text>
                <Text fontSize={18} fontFamily="Inter" className="text-primary-gold-1">
                  pengaduan@tpfx.co.id
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default ContactUs;
