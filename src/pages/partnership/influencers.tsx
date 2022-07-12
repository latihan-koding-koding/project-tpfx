import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import type { NextPage } from 'next';
import React from 'react';

const InfluencersBanner = () => (
  <Banner bgType="image" bgUrl="">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Title Page
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam magnam, iure, vero
            similique consequuntur repellendus nam expedita vel odio ducimus velit illo. Numquam
            accusantium minus fuga labore tempore. Animi, porro.
          </Text>
          <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
            <Button variant="primary" className="py-3 !px-16">
              <Text fontWeight={600}>Get Started</Text>
            </Button>
          </div>
        </div>
      </main>
    </div>
  </Banner>
);

const Influencers: NextPage = () => {
  return (
    <Layout>
      <InfluencersBanner />
      <Section>
        <div className="flex py-11 lg:py-28 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col text-primary-gray-4">
          <div className="lg:mr-10 mb-6 flex-1">
            <Text fontWeight={700} className="text-primary-gold-1">
              Heading Section
            </Text>
            <Text fontWeight={600} fontSize={36}>
              Title Section
            </Text>
            <Text className="max-w-md " fontFamily="Inter" fontSize={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
              aliquet turpis convallis, eget gravida sapien molestie. Proin at metus dolor. Ut
              iaculis quis ex et bibendum.
            </Text>
          </div>
          <div
            className="flex-1 lg:ml-10 w-full"
            style={{
              maxWidth: 576,
              minHeight: 328,
              background: 'gray'
            }}
          />
        </div>
      </Section>
      <Section className="bg-secondary-gray ">
        <div className="flex py-11 lg:py-28 items-center lg:items-start lg:justify-between flex-1 px-4 lg:flex-row flex-col text-white ">
          <div className="lg:mr-10 mb-6 flex-1">
            <Text fontWeight={700} className="text-primary-gold-1">
              Heading Section
            </Text>
            <Text fontWeight={600} fontSize={36}>
              Title Section
            </Text>
            <Text className="max-w-md " fontWeight={400} fontFamily="Inter" fontSize={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
              aliquet turpis convallis, eget gravida sapien molestie. Proin at metus dolor. Ut
              iaculis quis ex et bibendum.
            </Text>
          </div>
          <div
            className="flex-1 lg:ml-10 w-full"
            style={{
              maxWidth: 576,
              minHeight: 328,
              background: 'gray'
            }}
          />
        </div>
      </Section>
      <Section>
        <div className="flex-col items-center flex mb-12">
          <Text fontWeight={600} fontSize={36} className="text-primary-gray-4">
            Benefit IB
          </Text>
        </div>
        <div className="flex justify-center xl:justify-between flex-wrap mb-24">
          <Card className="max-w-xs p-8 text-white lg:pt-16 lg:pb-12 m-3">
            <Text fontSize={24} fontWeight={600} className="mb-3">
              Value 1
            </Text>
            <Text fontFamily="Inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
          </Card>
          <Card className="max-w-xs p-8 text-white lg:pt-16 lg:pb-12 lg:mx-6  m-3">
            <Text fontSize={24} fontWeight={600} className="mb-3">
              Value 1
            </Text>
            <Text fontFamily="Inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
          </Card>
          <Card className="max-w-xs p-8 text-white lg:pt-16 lg:pb-12  m-3">
            <Text fontSize={24} fontWeight={600} className="mb-3">
              Value 1
            </Text>
            <Text fontFamily="Inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
          </Card>
        </div>
        <div className="px-24">
          <div className="w-full p-8 bg-secondary-gray-4 mx-auto rounded-md flex justify-between items-center flex-col md:flex-row">
            <div className="max-w-[567px] ">
              <Text fontWeight={400} fontSize={24} fontFamily="Inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
            <div className="w-fit flex-shrink-0 mt-3 lg:mt-0">
              <Button variant="primary" className="py-3 !px-16 ">
                <Text fontWeight={700} fontFamily="Inter">
                  Get Started
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Influencers;
