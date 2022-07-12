import Banner from '@components/Banner/Banner';
import Collapsible from '@components/Collapsible/Collapsible';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import React, { useState } from 'react';

const SpreadLeverageBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/spread_leverage.png">
    <div className="max-w-7xl px-4  flex items-center py-8 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="sm:text-center lg:text-left">
        <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
          Spread & Leverage
        </Text>
        <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
          Pelajari informasi tentang spread & leverage dari TPFx untuk memenuhi kebutuhan trading
          Anda
        </Text>
      </div>
    </div>
  </Banner>
);

type TabKeyType = 'spread' | 'leverage';
const tabData: Record<TabKeyType, Array<{ title: string; content: JSX.Element }>> = {
  spread: [
    {
      title: 'Apa itu spread?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Selisih antara harga jual (bid) dan nilai beli (ask) atau quotes sell dan quotes buy.
          Spread merupakan penghasilan yang didapatkan oleh broker saat melakukan sell, umumnya
          spread akan dikenakan 2 hingga puluhan point, tergantung dari pair yang digunakan. <br />
          <br />
          Besar dari spread berbeda tiap pair, bahkan spread yang diberikan bisa berbeda antara satu
          broker forex dan broker lainnya.
        </Text>
      )
    },
    {
      title: 'Berapa spread di TPFx?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Spread di TPFx tergantung dari jenis akun yang Anda pilih. Spread paling rendah mulai dari
          0 (Akun Zero ECN)
        </Text>
      )
    }
  ],
  leverage: [
    {
      title: 'Apa itu leverage?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Leverage merupakan perbandingan margin trader dengan besaran dana pinjaman dari broker
          untuk meningkatkan return. Artinya, trader bisa menggunakan margin yang lebih kecil dari
          nominal kontrak forex yang ditransaksikannya.
        </Text>
      )
    },
    {
      title: 'Berapa leverage yang disediakan TPFx?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Leverage yang tersedia di TPFx terdapat 2 jenis yaitu, 1:400 dan 1:100
        </Text>
      )
    }
  ]
};

const SpreadLeverage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<TabKeyType>('spread');

  return (
    <Layout>
      <SpreadLeverageBanner />
      <Section className="pt-9 pb-96">
        <Text
          fontWeight={600}
          fontSize={36}
          className="text-primary-gray-4 mb-12"
          textAlign="center"
          textTransform="capitalize"
        >
          {activeTab}
        </Text>
        <div>
          <div className="w-full">
            <div className="flex mb-9">
              {Object.keys(tabData).map((tab, i) => {
                let className =
                  'cursor-pointer border-primary-gold-1 ' +
                  (activeTab === tab ? ' border-b-2' : '');
                if (i === Object.keys(tabData).length - 1) className += ' ml-6';
                return (
                  <div
                    key={i}
                    className={className}
                    onClick={() => setActiveTab(tab as TabKeyType)}
                  >
                    <Text
                      fontWeight={700}
                      fontSize={24}
                      textTransform="capitalize"
                      className="text-primary-gold-1"
                    >
                      {tab}
                    </Text>
                  </div>
                );
              })}
            </div>
            <div>
              {tabData[activeTab].map(({ title, content }, i) => (
                <Collapsible key={i} title={title} content={content} defaultOpen={!i} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default SpreadLeverage;
