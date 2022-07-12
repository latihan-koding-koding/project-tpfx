import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Text from '@components/Text/Text';
import { useRouter } from 'next/router';
import React from 'react';

import Section from './Section';

const CardPricing = ({
  title,
  dataList,
  onClick
}: {
  icon: string;
  title: string;
  dataList: Array<{ key: string; value: string }>;
  onClick: () => void;
}) => {
  return (
    <Card className=" !bg-white pb-8 pt-16 flex-col flex border border-primary-gold-1 max-w-lg w-full mx-auto">
      <>
        <Text fontWeight={600} fontSize={24} textAlign="center">
          {title}
        </Text>
        <div className="mt-14 max-w-xs mx-auto">
          <ul style={{ listStyle: 'inside' }}>
            {dataList.map((value, i) => (
              <li key={i}>
                <Text fontFamily="Inter" fontSize={18} className="inline">
                  {value.key}
                </Text>
                <Text fontFamily="Inter" fontSize={18} className="text-primary-gold-1 inline">
                  {value.value}
                </Text>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="w-full mt-16" onClick={onClick}>
            <Text fontWeight={700} fontFamily="Inter" textAlign="center">
              Get Started
            </Text>
          </Button>
        </div>
      </>
    </Card>
  );
};

const pricingCardData = [
  {
    title: 'STANDARD (VARIABLE)',
    dataList: [
      { key: 'Floating Spread ', value: '1.2' },
      { key: 'Komisi ', value: '$1' },
      { key: 'Leverage ', value: '1:400' },
      { key: 'Min. Deposit ', value: '$200' },
      { key: 'Swap Free Min. Deposit ', value: '$300' },
      { key: 'Stop Out Level ', value: '20%' }
    ]
  },
  {
    title: 'PROFESSIONAL (VARIABLE)',
    dataList: [
      { key: 'Floating Spread ', value: '0.4' },
      { key: 'Komisi ', value: '$2' },
      { key: 'Leverage ', value: '1:400' },
      { key: 'Min. Deposit ', value: '$2,500' },
      { key: 'Swap Free Min. Deposit ', value: '$5,000' },
      { key: 'Stop Out Level ', value: '20%' }
    ]
  },
  {
    title: 'ZERO ECN (VARIABLE)',
    dataList: [
      { key: 'Floating Spread ', value: '0' },
      { key: 'Komisi ', value: '$5' },
      { key: 'Leverage ', value: '1:400' },
      { key: 'Min. Deposit ', value: '$10,000' },
      { key: 'Swap Free Min. Deposit ', value: '$20,000' },
      { key: 'Stop Out Level ', value: '20%' }
    ]
  },
  {
    title: 'STANDARD (FIX)',
    dataList: [
      { key: 'Floating Spread ', value: '1.5' },
      { key: 'Komisi ', value: '$2' },
      { key: 'Leverage ', value: '1:100' },
      { key: 'Min. Deposit ', value: '$200' },
      { key: 'Swap Free Min. Deposit ', value: '$300' },
      { key: 'Stop Out Level ', value: '20%' }
    ]
  }
];

const PricingSection = () => {
  const router = useRouter();
  return (
    <Section className="pt-9 pb-24">
      <div className="flex-col items-center flex mb-4">
        <Text fontWeight={600} fontSize={36} className="text-primary-gray-4 mb-12">
          Pricing
        </Text>
      </div>
      <div className="xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {pricingCardData.map((data, i) => (
          <CardPricing
            key={i}
            icon="Icon"
            onClick={() => router.push('/register')}
            title={data.title}
            dataList={data.dataList}
          />
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
