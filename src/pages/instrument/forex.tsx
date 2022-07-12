import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Collapsible from '@components/Collapsible/Collapsible';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ForexBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/forex.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Forex
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Ambil peluang profit dengan mulai trading di pasar mata uang dunia karena volume
            aktivitas perdagangan yang tinggi
          </Text>
          <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
            <Button variant="primary" className="py-3 !px-16">
              <Text fontWeight={700} fontFamily="Inter">
                Mulai Trading Sekarang
              </Text>
            </Button>
          </div>
        </div>
      </main>
    </div>
  </Banner>
);

const tradingRulesData = [
  {
    title: 'Trading Rules',
    content: (
      <Text fontFamily="Inter" fontSize={18}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    )
  },
  {
    title: 'Trading Rules',
    content: (
      <Text fontFamily="Inter" fontSize={18}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    )
  },
  {
    title: 'Trading Rules',
    content: (
      <Text fontFamily="Inter" fontSize={18}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    )
  },
  {
    title: 'Trading Rules',
    content: (
      <Text fontFamily="Inter" fontSize={18}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    )
  }
];

export const forexBenefits = [
  {
    icon: '/images/instrument/call.png',
    title: 'Transaksi 24 Jam',
    desc: 'Jam trading sangat fleksibel karena forex market buka selama 24 jam dalam sehari'
  },
  {
    icon: '/images/instrument/graph.png',
    title: 'Volume Transaksi Tinggi',
    desc: 'Volume transaksi/perdagangan yang dilakukan pada pasar mata uang sangat tinggi, hampir £3 triliun mata uang diperdagangkan setiap harinya.'
  },
  {
    icon: '/images/instrument/call.png',
    title: 'Fluktuasi Harga Tinggi',
    desc: 'Ambil keuntungan dari pergerakan harga  yang sangat berfluktuasi, mengingat volume mata uang yang diperdagangkan sangat tinggi dan terdapat 4 sesi perdagangan'
  },
  {
    icon: '/images/instrument/graph.png',
    title: 'Modal Minim',
    desc: 'Anda bisa mulai trading hanya dengan modal mulai dari $200 dan minimal 0.1 lot.'
  }
];

const tableData = {
  header: ['Tipe akun', 'Standard', 'Professional', 'Zero ECN'],
  body: [
    ['EURUSD', '1.2 Pip', '0.4 Pip', '0 Pip'],
    ['USDJPY', '1.2 Pip', '0.4 Pip', '0 Pip'],
    ['GBPUSD', '1.4 Pip', '0.6 Pip', '0.2 Pip'],
    ['EURGBP', '1.8 Pip', '1 Pip', '0.6 Pip']
  ]
};

function Forex() {
  const router = useRouter();
  const navigateToRegist = () => router.push('/register');

  return (
    <div>
      <Layout>
        <ForexBanner />
        <Section className="!pb-[89px] px-12">
          <Text
            fontWeight={600}
            fontSize={36}
            className="text-primary-gray-4 mb-12 pt-2"
            textAlign="center"
          >
            Keuntungan Trading di Forex
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   gap-16">
            {forexBenefits.map((data, i) => (
              <Card key={i} className="relative px-6 pb-8 pt-16 !bg-secondary-gray-7">
                <div className="absolute -top-8 -left-7">
                  <Image src={data.icon} width={80} height={80} alt="logo-benefit" />
                </div>
                <Text fontWeight={600} fontSize={24} className="mb-3">
                  {data.title}
                </Text>
                <Text fontWeight={400} fontFamily="Inter">
                  {data.desc}
                </Text>
              </Card>
            ))}
          </div>
        </Section>
        <Section className="pb-24">
          <div className="max-w-lg mx-auto">
            <Text
              fontWeight={600}
              fontSize={36}
              className="text-primary-gray-4 mb-4 mt-10"
              textAlign="center"
            >
              Pilih Akun Sesuai Kebutuhan Trading Anda
            </Text>
            <Text fontWeight={400} fontFamily="Inter" fontSize={18} textAlign="center">
              Sesuaikan tipe akun yang sesuai dengan kebutuhan trading Anda agar profit maksimal
            </Text>
          </div>
          <div className="grid grid-cols-1 mt-16 mb-6 ">
            <div className="rounded-xl bg-primary-gold-1 py-5 px-2 md:px-16 mb-1 grid grid-cols-4 text-white">
              {tableData.header.map((value, i) => (
                <Text fontSize={18} fontWeight={400} key={i} textAlign={!i ? 'left' : 'center'}>
                  {value}
                </Text>
              ))}
            </div>
            {tableData.body.map((rowData, i) => (
              <div
                key={i}
                className="rounded-xl bg-secondary-gray-5 py-5 px-2 md:px-16 mb-1 grid grid-cols-4 text-primary-gray-4"
              >
                {rowData.map((value, i) => (
                  <Text fontSize={18} fontWeight={400} key={i} textAlign={!i ? 'left' : 'center'}>
                    {value}
                  </Text>
                ))}
              </div>
            ))}
          </div>

          <Text fontFamily="Inter" fontSize={14}>
            Spread dan komisi di atas berlaku untuk segala bentuk transaksi (buy atau sell), biaya
            swap tetap akan dibebankan ke nasabah. Untuk dapatkan *free swap, Anda dapat deposit
            mulai dari $300 di tipe akun Standard
          </Text>
          <Text fontFamily="Inter" fontSize={14}>
            *Syarat dan ketentuan berlaku
          </Text>

          <Button
            variant="secondary"
            className="!px-16 w-fit mt-11 self-center"
            onClick={navigateToRegist}
          >
            <Text fontWeight={700} fontSize={14}>
              Buka Akun Trading
            </Text>
          </Button>
        </Section>
        <Section className="bg-secondary-gold-5 py-24">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:order-first order-last max-w-2xl mx-auto lg:m-0 ">
              <Text fontWeight={700} fontSize={36} className="!text-center lg:!text-left">
                Trading lebih profit dengan penawaran menarik dari TPFx
              </Text>
              <div className="max-w-lg mx-auto lg:m-0">
                <div className="my-9">
                  <Text fontWeight={600} fontSize={18} className="mb-4 !text-center lg:!text-left">
                    Tanpa biaya swap
                  </Text>
                  <Text fontWeight={400} fontFamily="Inter" className="!text-center lg:!text-left">
                    Dapatkan penawaran trading bebas biaya swap hanya dengan deposit mulai dari $300
                    saja
                  </Text>
                </div>
                <div className="mb-9">
                  <Text fontWeight={600} fontSize={18} className="mb-4 !text-center lg:!text-left">
                    Spread rendah
                  </Text>
                  <Text fontWeight={400} fontFamily="Inter" className="!text-center lg:!text-left">
                    Trading jadi lebih profit maksimal dengan selisih spread yang rendah.
                  </Text>
                </div>
                <div className="mb-14">
                  <Text fontWeight={600} fontSize={18} className="mb-4 !text-center lg:!text-left">
                    Leverage besar
                  </Text>
                  <Text fontWeight={400} fontFamily="Inter" className="!text-center lg:!text-left">
                    Gunakan modal trading yang minim untuk dapatkan profit maksimal dengan leverage
                    yang besar 1:400
                  </Text>
                </div>
                <div className="w-fit mx-auto lg:m-0">
                  <Button className="!px-9">
                    <Text fontWeight={700} fontSize={14} fontFamily="Inter">
                      Mulai Trading Sekarang
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src="/images/instrument/forex_1.png"
                width={639}
                height={501}
                alt="forex-img-1"
              />
            </div>
          </div>
        </Section>
        <Section>
          <Text
            fontWeight={600}
            fontSize={36}
            className="text-primary-gray-4 mb-12"
            textAlign="center"
          >
            Trading Rules
          </Text>
          <div>
            <div className="w-full">
              <div>
                {tradingRulesData.map(({ title, content }, i) => (
                  <Collapsible key={i} title={title + ' ' + (i + 1)} content={content} />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="bg-secondary-gold-5 py-24">
          <div className="grid grid-cols-2 gap-20 mb-24">
            <div className="mx-auto">
              <Image
                src="/images/instrument/forex_2.png"
                width={576}
                height={328}
                alt="forex-img-2"
              />
            </div>
            <div className=" max-w-lg pt-4">
              <Text fontWeight={600} fontSize={36}>
                Title Section
              </Text>
              <div className="mb-10 mt-3">
                <Text fontWeight={400} fontFamily="Inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
                  aliquet turpis convallis, eget gravida sapien molestie. Proin at metus dolor. Ut
                  iaculis quis ex et bibendum.
                </Text>
              </div>
              <Button className="!px-16">
                <Text fontWeight={700} fontSize={14}>
                  Learn More
                </Text>
              </Button>
            </div>
          </div>
        </Section>
        <Section className="pt-11 pb-32">
          <Text fontWeight={600} fontSize={36} textAlign="center">
            Title Section
          </Text>
          <div className="mt-11 flex justify-center flex-wrap lg:justify-between md:flex-row flex-col items-center">
            {[1, 1, 1].map((_, i) => (
              <Card
                key={i}
                className="flex-1 min-w-[323px] p-9 lg:m-0 md:m-3  mt-3 !bg-secondary-gray-7"
                style={{ maxWidth: 323 }}
              >
                <Text fontSize={24} fontWeight={500} className="mb-4">
                  Value {i + 1}
                </Text>
                <Text fontFamily="Inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Text>
              </Card>
            ))}
          </div>
        </Section>
        <Banner bgUrl="/images/banners/get_started.png">
          <div className="py-24 text-white">
            <Text fontWeight={600} fontSize={36} className="mb-4" textAlign="center">
              Ready to Get Started
            </Text>

            <Text fontWeight={400} fontFamily="Inter" fontSize={18} textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
              aliquet turpis convallis.
            </Text>
            <div className="w-fit mt-16 mx-auto">
              <Button onClick={navigateToRegist}>
                <Text fontFamily="Inter" fontWeight={600}>
                  Buka Akun
                </Text>
              </Button>
            </div>
          </div>
        </Banner>
      </Layout>
    </div>
  );
}

export default Forex;
