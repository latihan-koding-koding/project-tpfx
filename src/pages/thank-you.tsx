import { ebooks } from '@prisma/client';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getAllEbooks } from '../apis/ebooks';
import Card from '../components/Card/Card';
import Section from '../components/Section/Section';
import Text from '../components/Text/Text';

const useCountdown = ({ defaultTime = 0 }: { defaultTime: number }) => {
  const [timeLeft, setTimeLeft] = useState(defaultTime);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return { timeLeft, setTimeLeft };
};

const ThankYou = (props: { ebooks?: Array<ebooks> }) => {
  const { timeLeft } = useCountdown({ defaultTime: !props.ebooks ? 10 : 0 });
  const router = useRouter();

  useEffect(() => {
    if (!props.ebooks && !timeLeft) {
      router.push('/');
    }
  }, [props.ebooks, router, timeLeft]);

  return (
    <div className="bg-gray-600 flex flex-row  min-h-screen">
      <div className="font-sans antialiased text-gray-600 min-h-full flex flex-col relative w-full">
        <main className="relative z-10 flex-auto flex flex-col items-center justify-center text-center text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-24">
              <Image alt="tpfx-logo" src="/images/Tpfx.png" height={84.67} width={160} />

              <h1 className="text-3xl sm:text-4.5xl text-white font-extrabold mb-4">
                You are successfully registered
              </h1>
              <h2 className="text-2xl sm:text-4.5xl text-white font-extrabold mb-4">Thank you!</h2>
            </div>
            {!props.ebooks && (
              <div className="mb-8 max-w-lg mx-auto">
                <p className="mb-2">You will be redirected back to home automatically in</p>
                <strong className="font-semibold text-white">{timeLeft}</strong>
              </div>
            )}
            <Link href="/" passHref>
              <Text
                fontWeight={'bold'}
                className="cursor-pointer inline-flex justify-center w-full max-w-[8rem] bg-gray-700 text-gray-200 rounded-md text-sm font-semibold py-3 px-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:text-primary-gold-1"
              >
                Back to home
              </Text>
            </Link>
          </div>

          {props.ebooks && (
            <Section className="!pb-[89px] px-12 mt-24">
              <Text
                fontWeight={600}
                fontSize={36}
                className="text-white mb-12 pt-2"
                textAlign="center"
              >
                Daftar E-Book
              </Text>
              <div className="flex items-center justify-center flex-wrap">
                {props.ebooks?.map((data, i) => (
                  <Card
                    key={i}
                    className="relative px-6 pb-8 pt-16 !bg-secondary-gray-7 m-11 cursor-pointer min-h-[320px]"
                    style={{ maxWidth: 263 }}
                    onClick={() =>
                      window.open('https://cms.tpfx.co.id/public' + data.file_path, '_blank')
                    }
                  >
                    <Image
                      src={'https://cms.tpfx.co.id/public' + data.image}
                      width={360}
                      height={220}
                      alt="logo-benefit"
                    />

                    <Text fontWeight={600} fontSize={24} className="mt-3" textAlign="center">
                      {data.name}
                    </Text>
                  </Card>
                ))}
              </div>
            </Section>
          )}
        </main>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { content } = context.query;
    if (content === 'ebook') {
      const response = await getAllEbooks();
      if (response.success) {
        return { props: { ebooks: response.data } };
      } else {
        return { props: { ebooks: [] } };
      }
    } else {
      return { props: {} };
    }
  } catch (error) {
    return { props: {} };
  }
};
export default ThankYou;
