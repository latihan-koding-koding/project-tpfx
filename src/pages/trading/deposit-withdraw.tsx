import Banner from '@components/Banner/Banner';
import Collapsible from '@components/Collapsible/Collapsible';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import React, { useState } from 'react';

const DepositWithdrawBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/deposit_withdraw.png">
    <div className="max-w-7xl px-4  flex items-center py-8 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="sm:text-center lg:text-left">
        <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
          Withdraw & Deposit
        </Text>
        <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
          Rasakan mudah dan cepatnya proses penarikan dana dan deposit di TPFx
        </Text>
      </div>
    </div>
  </Banner>
);

type TabKeyType = 'withdraw' | 'deposit';
const tabData: Record<TabKeyType, Array<{ title: string; content: JSX.Element }>> = {
  withdraw: [
    {
      title: 'Berapa lama proses withdraw sampai dana masuk ke rekening nasabah?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Proses withdraw maksimal dilakukan sampai pukul 11.00 WIB dan dana akan masuk ke rekening
          nasabah sampai maksimal pukul 18.00 WIB
        </Text>
      )
    },
    {
      title: 'Bagaimana ketentuan proses withdraw di TPFx?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Jika permintaan withdraw dilakukan sebelum pukul 11.00 WIB, maka dana akan diproses di
          hari yang sama. Jika permintaan setelah pukul 11.00 WIB, maka proses withdraw akan
          dilakukan pada hari berikutnya.
        </Text>
      )
    },
    {
      title: 'Bank apa saja yang tersedia untuk melakukan proses withdraw?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Proses withdraw dilakukan melalui rekening terpisah BCA TPFx dan dapatkan dicairkan ke
          semua rekening bank lokal.
        </Text>
      )
    },
    {
      title: 'Berapa lama dana masuk ke rekening nasabah?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Dana withdraw yang sudah diproses akan mengikuti proses Kliring dan masuk hari yang sama
        </Text>
      )
    }
  ],
  deposit: [
    {
      title: 'Berapa lama proses deposit sampai dana masuk ke akun trading nasabah?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Proses deposit maksimal 30 menit sampai dana masuk ke akun trading nasabah
        </Text>
      )
    },
    {
      title: 'Bagaimana ketentuan proses deposit di TPFx?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Jika permintaan deposit dilakukan sebelum pukul 22.00 WIB, akan diproses di hari yang
          sama. Jika permintaan setelah jam 22.00 WIB, proses deposit akan dilakukan pada hari
          berikutnya.
        </Text>
      )
    },
    {
      title: 'Bank apa saja yang digunakan TPFx untuk proses deposit?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Bank yang TPFx gunakan untuk proses adalah Bank BCA
        </Text>
      )
    },
    {
      title: 'Berapa lama proses dana masuk ke akun trading ?',
      content: (
        <Text fontWeight={400} fontSize={18} fontFamily="Inter" className="text-primary-gray-5">
          Dana yang sudah di transfer ke rekening Segregated Account TPFx langsung masuk ke akun
          trading nasabah dan maksimal 30 menit setelah deposit
        </Text>
      )
    }
  ]
};

const DepositWithdraw: NextPage = () => {
  const [activeTab, setActiveTab] = useState<TabKeyType>('withdraw');

  return (
    <Layout>
      <DepositWithdrawBanner />
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

export default DepositWithdraw;
