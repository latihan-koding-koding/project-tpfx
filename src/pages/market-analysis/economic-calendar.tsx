import Banner from '@components/Banner/Banner';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const EconomicCalendarBanner = () => (
  <Banner bgType="image" bgUrl="/images/banners/economic_calendar.png">
    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left text-white">
          <Text fontSize={36} fontWeight={600} className="mt-4 sm:text-4xl">
            Kalender Ekonomi
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4">
            Fitur kalender ekonomi untuk melengkapi perencanaan dan strategi trading Anda
          </Text>
        </div>
      </main>
    </div>
  </Banner>
);

const StyledCalendarContainer = styled.div`
  iframe {
    width: 100% !important;
    .logoWrap-39Xi8p6T {
      display: hidden !important;
    }
  }

  .tradingview-widget-container__widget {
    height: 100%;
    width: 100%;
    div {
      height: 100% !important;
      width: 100% !important;
    }
  }
`;

const EconomicCalendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;

    const container = document.getElementById('calendar-widget-container');
    if (container) {
      container?.appendChild(script);
    }
  }, []);
  return (
    <Layout>
      <EconomicCalendarBanner />
      <Section className="pt-28 pb-11 ">
        <div className="grid md:grid-cols-2 gap-16 my-8">
          <div className="text-primary-black-1">
            <Text fontSize={36} fontWeight={600} as="h1">
              Tentang Kalender Ekonomi
            </Text>
            <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4" as="h2">
              Kalender ekonomi merupakan media utama yang digunakan dalam melakukan analisa
              fundamental. Informasi-informasi yang berisi tentang publikasi berita penting, laporan
              maupun pidato dari pejabat penting yang akan mempengaruhi pergerakan dari pasar mata
              uang, komoditi maupun index saham terdaftar dalam acara kalender ekonomi yang akan
              datang dan dikelompokkan berdasarkan negara, tingkat kepentingan dan lain-lain
            </Text>
          </div>
          <div
            className="bg-secondary-gray order-first md:order-last "
            style={{
              height: 328,
              backgroundImage: "url('/images/market-analysis/calendar_1.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </Section>
      <Section className="pt-11 pb-36 text-primary-black-1">
        <Text fontSize={36} fontWeight={600} textAlign="center">
          Kalender Forex
        </Text>
        <StyledCalendarContainer className="border mt-14" style={{ height: 527 }}>
          <div className="tradingview-widget-container">
            <div
              className="tradingview-widget-container__widget"
              id="calendar-widget-container"
            ></div>
            {/* <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/markets/currencies/economic-calendar/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="blue-text">Economic Calendar </span>
              </a>
              by TradingView
            </div> */}
          </div>
        </StyledCalendarContainer>
      </Section>
    </Layout>
  );
};

export default EconomicCalendar;
