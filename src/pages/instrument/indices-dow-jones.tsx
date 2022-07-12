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

const IndicesDowJonesBanner = ({ onClickBtn }: { onClickBtn: () => void }) => (
  <Banner bgType="image" bgUrl="/images/banners/indices_dowjones.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Indices & Dow Jones
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo aliquet
            turpis convallis.
          </Text>
          <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
            <Button variant="primary" className="py-3 !px-16" onClick={onClickBtn}>
              <Text fontWeight={700} fontFamily="Inter">
                Buka Akun
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

const benefits = [
  {
    icon: '/images/instrument/call.png',
    title: 'Value ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: '/images/instrument/graph.png',
    title: 'Value ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: '/images/instrument/call.png',
    title: 'Value ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: '/images/instrument/graph.png',
    title: 'Value ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const tableData = {
  header: ['Contract', 'Account Type', 'Account Type', 'Account Type'],
  body: [
    ['Contract', 'Content', 'Content', 'Content'],
    ['Contract', 'Content', 'Content', 'Content'],
    ['Contract', 'Content', 'Content', 'Content'],
    ['Contract', 'Content', 'Content', 'Content']
  ]
};

function IndicesDowJones() {
  const router = useRouter();
  const navigateToRegist = () => router.push('/register');

  return (
    <div>
      <Layout>
        <div className="hidden">
          <Collapsible title="asd" />
        </div>
        <IndicesDowJonesBanner onClickBtn={navigateToRegist} />
        <Section className="!pb-[89px] px-12">
          <Text
            fontWeight={600}
            fontSize={36}
            className="text-primary-gray-4 mb-12 pt-2"
            textAlign="center"
          >
            Title Section
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   gap-16">
            {benefits.map((data, i) => (
              <Card key={i} className="relative px-6 pb-8 pt-16 !bg-secondary-gray-7">
                <div className="absolute -top-8 -left-7">
                  <Image src={data.icon} width={80} height={80} alt="logo-benefit" />
                </div>
                <Text fontWeight={600} fontSize={24} className="mb-3">
                  {data.title + (i + 1)}
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
              Tittle Section
            </Text>
            <Text fontWeight={400} fontFamily="Inter" fontSize={18} textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
              aliquet turpis convallis.
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
            *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
            aliquet turpis convallis.
          </Text>
          <Button variant="secondary" className="!px-16 w-fit mt-11 self-center">
            <Text fontWeight={700} fontSize={14}>
              See All Contract
            </Text>
          </Button>
        </Section>

        <Section className="bg-secondary-gold-5 py-24">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:order-first order-last max-w-2xl mx-auto lg:m-0 ">
              <Text fontWeight={700} fontSize={36} className="!text-center lg:!text-left">
                Tittle Section
              </Text>
              <div className="max-w-lg mx-auto lg:m-0">
                <div className="my-9">
                  <Text fontWeight={600} fontSize={18} className="mb-4 !text-center lg:!text-left">
                    Content Section 1
                  </Text>
                  <Text fontWeight={400} fontFamily="Inter" className="!text-center lg:!text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
                    aliquet turpis convallis, eget gravida sapien molestie. Proin at metus dolor. Ut
                    iaculis quis ex et bibendum.
                  </Text>
                </div>
                <div className="mb-9">
                  <Text fontWeight={600} fontSize={18} className="mb-4 !text-center lg:!text-left">
                    Content Section 2
                  </Text>
                  <Text fontWeight={400} fontFamily="Inter" className="!text-center lg:!text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
                    aliquet turpis convallis, eget gravida sapien molestie. Proin at metus dolor. Ut
                    iaculis quis ex et bibendum.
                  </Text>
                </div>
                <div className="mb-14">
                  <Text fontWeight={600} fontSize={18} className="mb-4 !text-center lg:!text-left">
                    Content Section 3
                  </Text>
                  <Text fontWeight={400} fontFamily="Inter" className="!text-center lg:!text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus leo
                    aliquet turpis convallis, eget gravida sapien molestie. Proin at metus dolor. Ut
                    iaculis quis ex et bibendum.
                  </Text>
                </div>
                <div className="w-fit mx-auto lg:m-0">
                  <Button className="!px-9">
                    <Text fontWeight={700} fontSize={14} fontFamily="Inter">
                      Learn More
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src="/images/instrument/indices_1.png"
                width={639}
                height={501}
                alt="IndicesDowJones-img-1"
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
          <div className="grid grid-cols-2 gap-20">
            <div className="mx-auto">
              <Image
                src="/images/instrument/indices_2.png"
                width={576}
                height={328}
                alt="IndicesDowJones-img-2"
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
        <Section className="pt-6 pb-32">
          <Text fontWeight={600} fontSize={36} textAlign="center">
            Title Section
          </Text>
          <div className="mt-11 flex justify-center flex-wrap lg:justify-between md:flex-row flex-col items-center">
            {[1, 1, 1].map((_, i) => (
              <Card
                key={i}
                className="flex-1 min-w-[323px] p-9   lg:m-0 md:m-3 mt-3 !bg-secondary-gray-7"
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

export default IndicesDowJones;
