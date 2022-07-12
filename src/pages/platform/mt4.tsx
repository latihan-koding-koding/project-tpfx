import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Mt4Banner = ({ onClick }: { onClick: () => void }) => (
  <Banner bgType="image" bgUrl="/images/banners/metatrader.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl" as="h1">
            Metatrader 4
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Platform Trading yang paling populer dalam bertransaksi di pasar keuangan. Metatrader 4
            dikembangkan oleh Meta Quotes Software Corp yang memungkinkan pengguna untuk
            memperdagangkan Forex, Komoditi, Oil, Index Saham
          </Text>
          <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
            <Button variant="primary" className="py-3 px-16" onClick={onClick}>
              <Text fontWeight={600}>Download Sekarang</Text>
            </Button>
          </div>
        </div>
      </main>
    </div>
  </Banner>
);

const mt4Platforms = {
  desktop: [
    {
      key: 'dekstop',
      title: 'MT4 Desktop',
      subTitle:
        'Platform Metatrader 4 yang dapat anda digunakan pada desktop untuk mempermudah perdagangan transaksi anda. MT4 platform trading yang paling populer, tampilan dengan ramah pengguna dan cocok untuk semua trader. Transaksi seluruh instrumen perdagangan menggunakan platform Metatrader 5',
      btn: {
        text: 'Download Sekarang',
        onClick: () =>
          window.open(
            'https://download.mql5.com/cdn/web/pt.trijaya.pratama/mt4/tpf4setup.exe',
            '_blank'
          )
      }
    },
    {
      key: 'web',
      title: 'MT4 Web',
      subTitle:
        'Trading tetap nyaman menggunakan Metatrader 5 Web untuk Anda yang trading melalui browser, Mac dan Linux. Tampilan Metatrader 5 Web yang ramah pengguna dan cocok untuk semua trader',
      btn: {
        text: 'Trading Sekarang',
        onClick: () => window.open('https://mt4.tpfx.co.id/', '_blank')
      }
    }
  ],
  mobile: [
    {
      key: 'android',
      title: 'Android',
      subTitle:
        'Platform Metatrader 4 pada Android yang mendukung transaksi perdagangan anda kapan pun, dimana pun dan dapat diakses selama 24 jam. Mudah digunakan dan diinstal di perangkat android Anda.',
      img: {
        url: '/images/platform/playstore-download.png',
        onClick: () =>
          window.open(
            'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&gl=US',
            '_blank'
          )
      }
    },
    {
      key: 'ios',
      title: 'IOS',
      subTitle:
        'Download platform Metatrader 4 pada perangkat IOS yang mendukung transaksi perdagangan anda kapan pun, dimana pun dan dapat diakses selama 24 jam. Tampilan plaform ramah dan mudah digunakan.',
      img: {
        url: '/images/platform/appstore-download.png',
        onClick: () =>
          window.open('https://apps.apple.com/us/app/metatrader-4/id496212596', '_blank')
      }
    }
  ]
};

interface NaturalImageProps extends ImageProps {
  ratio?: number;
}
const NaturalImage = (props: NaturalImageProps) => {
  const [ratio, setRatio] = useState(props.ratio || 16 / 9); // default to 16:9

  return (
    <Image
      width={props.width || 200}
      height={200 / ratio}
      layout="fixed" // you can use "responsive", "fill" or the default "intrinsic"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
      alt={props.alt}
      {...props}
    />
  );
};
const Mt4: NextPage = () => {
  const router = useRouter();
  const navigateToRegist = () => router.push('/register');

  const scrollTo = () => {
    document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Mt4Banner onClick={scrollTo} />
      <Section>
        <div className="flex py-11 lg:py-28 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col-reverse">
          <div className="lg:ml-10 mb-6 flex-1 text-primary-black-1 ">
            <Text
              fontWeight={600}
              fontSize={36}
              className="!text-center lg:!text-left pt-7 lg:pt-0"
            >
              Mengapa MT4
            </Text>
            <div className="max-w-md">
              <Text fontWeight={600} fontSize={18} className="!text-center lg:!text-left py-5">
                Jenis Produk
              </Text>
              <Text className="!text-center lg:!text-left " fontWeight={400} fontFamily="Inter">
                Platform MT4 memungkinan anda dapat melakukan aktivitas trading dengan variasi
                produk dengan cara yang efisien.
              </Text>
              <Text fontWeight={600} fontSize={18} className="!text-center lg:!text-left py-5">
                Timeframe
              </Text>
              <Text className="!text-center lg:!text-left" fontWeight={400} fontFamily="Inter">
                Fasilitas Timeframe yang akan membantu dalam menganalisa sebelum melakukan transaksi
                perdagangan. Jenis timeframe yang bervariasi pada Metatrader 4 memaksimalkan analisa
                pada perdagangan.
              </Text>
              <Text fontWeight={600} fontSize={18} className="!text-center lg:!text-left py-5">
                Kalender Ekonomi
              </Text>
              <Text className="!text-center lg:!text-left" fontWeight={400} fontFamily="Inter">
                Dilengkapi dengan fitur kalender ekonomi yang memudahkan para trader untuk
                mendapatkan informasi ekonomi dunia secara real time
              </Text>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/platform/metatrader_1.png"
              width={639}
              height={501}
              alt="metatrader-img-1"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-secondary-gold-5" id="download-section">
        <div className="flex py-11 lg:py-28 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col">
          <div className="flex-1">
            <Image
              src="/images/platform/metatrader_2.png"
              width={639}
              height={501}
              alt="metatrader-img-1"
            />
          </div>
          <div className="lg:ml-10 mb-6 flex-1 mt-6 lg:mt-0">
            <Text fontWeight={700} className="text-primary-gold-1 !text-center lg:!text-left">
              MT4
            </Text>
            {mt4Platforms.desktop.map((data, i) => (
              <>
                <Text
                  fontWeight={600}
                  fontSize={24}
                  className="!text-center lg:!text-left"
                  as="h1"
                  key={i}
                >
                  {data.title}
                </Text>
                <Text
                  className="max-w-md !text-center lg:!text-left mb-4"
                  fontWeight={400}
                  fontFamily="Inter"
                >
                  {data.subTitle}
                </Text>

                <div className="mb-6 flex justify-center lg:justify-start">
                  <Button variant="primary" onClick={data.btn.onClick}>
                    <Text fontWeight={600} fontFamily="Inter">
                      {data.btn.text}
                    </Text>
                  </Button>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex py-11 lg:py-28 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col-reverse">
          <div className="lg:ml-10 mb-6 flex-1 mt-6 lg:mt-0">
            <Text fontWeight={700} className="text-primary-gold-1 !text-center lg:!text-left">
              MT4
            </Text>
            {mt4Platforms.mobile.map((data, i) => (
              <>
                <Text
                  fontWeight={600}
                  fontSize={24}
                  className="!text-center lg:!text-left"
                  as="h1"
                  key={i}
                >
                  {data.title}
                </Text>
                <Text
                  className="max-w-md !text-center lg:!text-left mb-4"
                  fontWeight={400}
                  fontFamily="Inter"
                >
                  {data.subTitle}
                </Text>
                <div className="mb-6 flex justify-center lg:justify-start">
                  <NaturalImage
                    src={data.img.url}
                    width="200"
                    height="58"
                    alt="download-img"
                    className="cursor-pointer"
                    onClick={data.img.onClick}
                  />
                </div>
              </>
            ))}
          </div>
          <div className="flex-1">
            <Image
              src="/images/platform/metatrader_3.jpg"
              width={639}
              height={501}
              alt="metatrader-img-1"
              className="rounded-lg"
            />
          </div>
        </div>
      </Section>
      <Banner bgType="image" bgUrl="/images/banners/get_started.png">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 flex-1 flex justify-center">
          <main className="mt-10 m-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left max-w-[500px] text-white">
              <Text fontSize={36} fontWeight={600} className="mt-4  sm:text-4xl" textAlign="center">
                Sudah siap trading sekarang?
              </Text>
              <Text
                fontSize={18}
                fontWeight={400}
                fontFamily="Inter"
                className="mt-4 "
                textAlign="center"
              >
                Buka akun sekarang untuk ikut mulai dapatkan kesempatan income tambahan dari trading
              </Text>
              <div className="flex flex-row justify-center mt-12">
                <div className="mt-5 mr-2">
                  <Button variant="primary" onClick={navigateToRegist}>
                    <Text fontWeight={600} fontFamily="Inter">
                      Buka Akun
                    </Text>
                  </Button>
                </div>
                <div className="mt-5 mr-2">
                  <Button variant="secondary" onClick={scrollTo}>
                    <Text fontWeight={600} fontFamily="Inter">
                      Download MT4
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Banner>
    </Layout>
  );
};

export default Mt4;
