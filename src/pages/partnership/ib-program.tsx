import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const IbProgramBanner = ({ onClick }: { onClick: () => void }) => (
  <Banner bgType="image" bgUrl="/images/banners/ib_program.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Introducer Broker Program
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Dapatkan Income Tanpa Batas Sebagai Introducer Broker
          </Text>
          <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
            <Button variant="primary" className="py-3 !px-16" onClick={onClick}>
              <Text fontWeight={600}>Daftar IB</Text>
            </Button>
          </div>
        </div>
      </main>
    </div>
  </Banner>
);

const benefits = [
  {
    icon: '/images/instrument/call.png',
    title: 'Broker dengan Rebate IB Terbesar'
  },
  {
    icon: '/images/instrument/graph.png',
    title: 'Pencairan Mudah dan Cepat'
  },
  {
    icon: '/images/instrument/call.png',
    title: 'Bermitra dengan Broker Teregulasi'
  }
];

const IbProgram: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <IbProgramBanner onClick={() => router.push('/register')} />

      <Section className="py-24 bg-secondary-gold-5">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:order-first order-last max-w-2xl mx-auto lg:m-0 ">
            <Text fontWeight={700} className="text-primary-gold-1 !text-center lg:!text-left">
              Introducer Broker
            </Text>
            <Text fontWeight={700} fontSize={36} className="!text-center lg:!text-left mb-3">
              Mengapa Introducer Broker
            </Text>
            <Text fontSize={18} fontFamily="Inter" className="!text-center lg:!text-left">
              IB atau Introducer Broker merupakan mitra/perantara antara tarder dengan pasar.
              Hasilkan penghasilan tanpa batas di setiap perdagangan referral aktif yang di
              perkenalkan pada TPFx dan lakukan penarikan dana dengan mudah serta instan
            </Text>
          </div>
          <div className="lg:ml-0 mx-auto">
            <Image src="/images/partnership/ib_1.png" width={576} height={328} alt="Ebook-img-1" />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-24">
          <div className="lg:ml-0 mx-auto">
            <Image src="/images/partnership/ib_2.png" width={576} height={328} alt="Ebook-img-1" />
          </div>

          <div className="max-w-2xl mx-auto lg:m-0">
            <Text fontWeight={700} className="text-primary-gold-1 !text-center lg:!text-left ">
              Introducer Broker
            </Text>
            <Text fontWeight={700} fontSize={36} className="!text-center lg:!text-left mb-3">
              Manfaat untuk referral TPFx
            </Text>
            <Text fontSize={18} fontFamily="Inter" className="!text-center lg:!text-left">
              Bertransaksi pada broker terdaftar dan teregulasi dengan fasilitas spread terendah dan
              tools analisa trading secara real time pada semua referral untuk mempermudah transaksi
              referral
            </Text>
          </div>
        </div>
      </Section>

      {/* <Section className="py-24 bg-secondary-gold-5">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:ml-0 mx-auto">
            <Image src="/images/partnership/ib_2.png" width={576} height={328} alt="Ebook-img-1" />
          </div>

          <div className="max-w-2xl mx-auto lg:m-0">
            <Text fontWeight={700} className="text-primary-gold-1 !text-center lg:!text-left ">
              Introducer Broker
            </Text>
            <Text fontWeight={700} fontSize={36} className="!text-center lg:!text-left mb-3">
              Manfaat untuk referral TPFx
            </Text>
            <Text fontSize={18} fontFamily="Inter" className="!text-center lg:!text-left">
              Bertransaksi pada broker terdaftar dan teregulasi dengan fasilitas spread terendah dan
              tools analisa trading secara real time pada semua referral untuk mempermudah transaksi
              referral
            </Text>
          </div>
        </div>
      </Section> */}
      <Section className="!pb-[89px] px-12 ">
        <Text
          fontWeight={600}
          fontSize={36}
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
        >
          Manfaat bagi Introducer Broker
        </Text>
        <div className="flex items-center justify-center flex-wrap mb-20">
          {benefits.map((data, i) => (
            <Card
              key={i}
              className="px-6 p-8 !bg-secondary-gray-7 m-8 h-[170px] w-full md:max-w-[250px] flex items-center justify-center"
            >
              <Text fontWeight={600} fontSize={24} textAlign="center" className="mb-3">
                {data.title}
              </Text>
            </Card>
          ))}
        </div>

        <div className="px-4 md:px-24">
          <div className="w-full p-8 bg-primary-gold-1 mx-auto rounded-md flex justify-between items-center flex-col md:flex-row text-white">
            <div className="max-w-[567px] lg:ml-8 ">
              <Text
                fontWeight={700}
                fontSize={24}
                fontFamily="Inter"
                className="!text-center lg:!text-left "
              >
                Hasilkan income tanpa batas sekarang
              </Text>
            </div>
            <div className="w-fit flex-shrink-0 mt-3 lg:mt-0">
              <Button
                variant="primary"
                className="py-3 px-16 border-2 !border-white"
                onClick={() => router.push('/register')}
              >
                <Text fontWeight={700} fontFamily="Inter">
                  Daftar Sekarang
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default IbProgram;
