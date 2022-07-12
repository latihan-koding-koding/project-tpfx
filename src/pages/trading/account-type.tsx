import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import PricingSection from '@components/Section/PricingSection';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const AccountTypeBanner = () => {
  const router = useRouter();
  const navigateToRegist = () => router.push('/register');

  return (
    <Banner bgType="image" bgUrl="/images/banners/account_type.png" className="rounded-b-xl">
      <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
              Account Type
            </Text>
            <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
              Maksimalkan peluang profit trading dengan tipe akun yang sesuai strategi trading Anda
            </Text>
            <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
              <Button variant="primary" className="py-3 px-16" onClick={navigateToRegist}>
                <Text fontWeight={600}>Buka Akun</Text>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </Banner>
  );
};

const AccountType: NextPage = () => {
  return (
    <Layout>
      <AccountTypeBanner />
      <PricingSection />
    </Layout>
  );
};

export default AccountType;
