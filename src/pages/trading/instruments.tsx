import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Card from '@components/Card/Card';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { getSpreadData, SpreadDataInterface, SpreadKeyType } from '../../apis/spread';

const InstrumentsBanner = ({ onClickBtn }: { onClickBtn: () => void }) => {
  return (
    <Banner bgType="image" bgUrl="/images/banners/crude_oil.png">
      <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl" as="h1">
              Produk
            </Text>
            <Text
              fontSize={18}
              fontWeight={400}
              fontFamily="Inter"
              className="mt-4 text-white"
              as="h2"
            >
              Akses variasi produk trading di mulai dari Forex, Komoditas, Oil dan Index Saham dan
              penuhi kebutuhan trading Anda.
            </Text>
            <div className="mt-5 sm:mt-8 sm:flex xs:justify-center lg:justify-start w-fit">
              <Button variant="primary" className="py-3 !px-16" onClick={onClickBtn}>
                <Text fontWeight={700} fontFamily="Inter">
                  Mulai Trading
                </Text>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </Banner>
  );
};

const forexBenefits = [
  {
    title: 'Transaksi 24 Jam',
    desc: 'Jam trading sangat fleksibel karena forex market buka selama 24 jam dalam sehari'
  },
  {
    title: 'Volume Transaksi Tinggi',
    desc: 'Volume transaksi/perdagangan yang dilakukan pada pasar mata uang sangat tinggi, hampir £3 triliun mata uang diperdagangkan setiap harinya.'
  },
  {
    title: 'Fluktuasi Harga Tinggi',
    desc: 'Ambil keuntungan dari pergerakan harga  yang sangat berfluktuasi, mengingat volume mata uang yang diperdagangkan sangat tinggi dan terdapat 4 sesi perdagangan'
  },
  {
    title: 'Modal Minim',
    desc: 'Anda bisa mulai trading hanya dengan modal mulai dari $200 dan minimal 0.1 lot.'
  }
];
const forexBenefits2 = [
  {
    // icon: '/images/instrument/call.png',
    title: 'Tanpa Biaya Swap',
    desc: 'Penawaran trading bebas biaya inap hanya dimulai dari deposit $300 saja'
  },
  {
    // icon: '/images/instrument/graph.png',
    title: 'Leverage Besar',
    desc: 'Gunakan modal trading yang minim untuk menghasilkan profit maksimal dengan leverage sampai 1 : 400'
  },
  {
    // icon: '/images/instrument/call.png',
    title: 'Pilihan Mata Uang Beragam',
    desc: 'Trading dengan pilihan mata uang yang beragam dan paling banyak ditransaksikan'
  },
  {
    // icon: '/images/instrument/graph.png',
    title: 'Tanpa requote dengan Spread rendah',
    desc: 'Trading nyaman tanpa requote dengan spread yang rendah'
  }
];

const komoditiBenefits = [
  {
    title: 'Broker Legal dan Teregulasi',
    desc: 'Trading komoditas di broker legal dan teregulasi oleh BAPPEBTI'
  },
  {
    title: 'Trading Komoditas Tanpa Biaya Swap',
    desc: 'Trading komoditas seharian tanpa dikenakan biaya inap'
  },
  {
    title: 'Fluktuasi Harga Tinggi',
    desc: 'Trading nyaman tanpa requote dengan spread yang rendah'
  },
  {
    title: 'Leverage Besar',
    desc: 'Trading komoditas menggunakan modal minim dengan leverage sampai 1 : 400'
  },
  {
    title: 'Komoditas Terlengkap',
    desc: 'Tranding dengan variasi komoditas terlengkap dan paling banyak ditransaksikan'
  }
];
const sahamBenefits = [
  {
    title: 'Broker Legal dan Teregulasi',
    desc: 'Trading Index di Broker Legal dan Teregulasi oleh BAPPEBTI'
  },
  {
    title: 'Tanpa Biaya Swap',
    desc: 'Trading harian tanpa dikenakan biaya swap'
  },
  {
    title: 'Tanpa requote dengan spread rendah',
    desc: 'Trading nyaman tanpa reqote dengan spread kompetitif'
  },
  {
    title: 'Leverage Besar',
    desc: 'Trading dengan modal minim menggunakan leverage sampai 1 : 400'
  },
  {
    title: 'Index Terlengkap',
    desc: 'Trading Index Terlengkap di TPFx'
  }
];

const tableHeader = {
  FOREX: ['currency', 'bid', 'ask', 'spread'],
  KOMODITI: ['komoditi', 'bid', 'ask', 'spread'],
  SAHAM: ['index', 'bid', 'ask', 'spread']
};

type SpreadType = 'FOREX' | 'KOMODITI' | 'SAHAM';

const spreadKey: Record<SpreadType, Array<string>> = {
  FOREX: [
    'EURUSD',
    'USDJPY',
    'AUDUSD',
    'GBPUSD',
    'NZDUSD',
    'USDCAD',
    'USDCHF',
    'EURGBP',
    'EURJPY',
    'EURCHF'
  ],
  KOMODITI: ['XAUUSD', 'XAGUSD', 'CLSK'],
  SAHAM: ['DAK', 'JPK', 'UNK', 'UPK', 'HKK']
};

const SpreadSection = (props: { spreadType: SpreadType; data: SpreadDataInterface | null }) => {
  let title = 'Spread Sesuai Strategi Trading Anda';
  if (props.spreadType === 'KOMODITI') title = 'Spread Komoditi Sesuai Strategi Trading Anda';
  if (props.spreadType === 'SAHAM') title = 'Spread Index Strategi Trading Anda';

  const [spreadData, setSpreadData] = useState<Array<Record<string, string>>>([]);

  useEffect(() => {
    if (props.data) {
      const reformedSpreadData: typeof spreadData = [];
      spreadKey[props.spreadType].map((key) => {
        if (props.data) {
          const spreadKey = (key + '.tp') as SpreadKeyType;

          const data = props.data[spreadKey];
          const spreadVal = Number(props.data[spreadKey].ask) - Number(props.data[spreadKey].bid);
          const spread = Math.round(Math.pow(10, Number(props.data[spreadKey].digits)) * spreadVal);

          reformedSpreadData.push({ name: key, ...data, spread: String(spread) });
        }
      });
      setSpreadData(reformedSpreadData);
    }
  }, [props.spreadType, props.data]);

  return (
    <Section>
      <div className="px-12 py-8">
        <Text
          fontWeight={600}
          fontSize={34}
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
          as="h1"
        >
          {title}
        </Text>
        <div className="grid grid-cols-1 mt-16 mb-6 ">
          <div
            className={
              'rounded-xl bg-primary-gold-1 py-5 px-2 md:px-16 mb-1 grid grid-cols-4 text-white'
            }
          >
            {tableHeader[props.spreadType].map((value, i) => (
              <Text
                fontSize={18}
                fontWeight={400}
                key={i}
                textAlign={!i ? 'left' : 'center'}
                textTransform="capitalize"
              >
                {value}
              </Text>
            ))}
          </div>
          {!spreadData.length ? (
            <div className="flex justify-center">
              <Image src="/images/spinner.gif" width={100} height={100} alt="loader" />
            </div>
          ) : (
            <>
              {spreadData.map((rowData, i) => (
                <div
                  key={i}
                  className={
                    'rounded-xl bg-secondary-gray-5 py-5 px-2 md:px-16 mb-1 grid grid-cols-4  text-primary-gray-4{'
                  }
                >
                  {tableHeader[props.spreadType].map((key, i) => {
                    let value = ['currency', 'komoditi', 'index'].includes(key)
                      ? rowData.name
                      : '-';
                    if (rowData[key]) value = rowData[key];
                    return (
                      <Text
                        fontSize={18}
                        fontWeight={400}
                        key={i}
                        textAlign={!i ? 'left' : 'center'}
                      >
                        {value}
                      </Text>
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

interface ContentProps {
  handleRegist: () => void;
  data: SpreadDataInterface | null;
}

const ForexContent = ({ handleRegist, data }: ContentProps) => (
  <div className="flex items-center flex-col">
    <Section className="bg-secondary-gold-5 items-center justify-center flex">
      <Text fontWeight={600} fontSize={36} textAlign="center" as="h1">
        FOREX
      </Text>
      <Text
        fontWeight={600}
        fontSize={24}
        fontFamily="Nunito Sans"
        textAlign="center"
        as="h1"
        className="my-6"
      >
        Apa itu FOREX?
      </Text>
      <Text fontWeight={400} fontFamily="Inter" textAlign="center" className="max-w-3xl">
        Merupakan transaksi jual beli mata uang asing dan merupakan pasar keuangan terbesar di dunia
        dengan transaksi harian mencapai USD 6,6 Triliun. Selain itu, pasar Forex juga buka selama
        24 jam dari Senin hingga Sabtu pagi dalam semingggu.
        <br />
        <br />
        Pasar Forex juga merupakan pasar dengan tingkat likuiditas yang paling tinggi dibandingkan
        dengan bisnis lainnya. Fluktuasi harga yang tinggi dan transaksi dua arah pada pasar Forex
        menjadikan Trader Forex dapat menghasilkan peluang keuntungan baik trend pasar sedang naik
        maupun pada saat trend pasar turun.
      </Text>

      <div className="my-7 flex flex-col">
        <Text
          fontWeight={600}
          fontSize={24}
          className="text-primary-gray-4 mb-5 pt-2"
          textAlign="center"
          as="h1"
        >
          Jam Perdagangan Forex
        </Text>
        <Image
          src={'https://www.cashbackforex.com/Content/dist/articles/images/xwtlunhr305.jpg'}
          width="600px"
          height="224px"
          alt="forex-clock"
        />
      </div>
    </Section>
    <Section>
      <div className="px-12">
        <Text
          fontWeight={600}
          fontSize={34}
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
          as="h1"
        >
          Keuntungan Trading di Forex
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {forexBenefits.map((data, i) => (
            <Card key={i} className="relative p-6 !bg-secondary-gray-5">
              <Text fontWeight={600} fontSize={24} className="mb-3">
                {data.title}
              </Text>
              <Text fontWeight={400} fontFamily="Inter">
                {data.desc}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>
    <Section className="bg-secondary-gold-5">
      <div className="px-12">
        <Text
          fontWeight={600}
          fontSize={32}
          className="text-primary-gray-4 pt-2"
          textAlign="center"
          as="h1"
        >
          Trading lebih profit dengan penawaran menarik dari TPFx
        </Text>
        <Text
          fontWeight={400}
          fontSize={24}
          fontFamily="Inter"
          className="text-primary-gray-4 mb-8 pt-2"
          textAlign="center"
          as="h2"
        >
          Broker Legal dan Teregulasi
        </Text>
        <Text
          fontWeight={400}
          fontFamily="Inter"
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
        >
          Broker legal dan teregulasi oleh BAPPEBTI
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {forexBenefits2.map((data, i) => (
            <Card key={i} className="relative pt-6 px-6 !bg-secondary-gold-5">
              <Text fontWeight={600} fontSize={24} className="mb-3">
                {data.title}
              </Text>
              <Text fontWeight={400} fontFamily="Inter">
                {data.desc}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>

    <SpreadSection spreadType="FOREX" data={data} />
    <Section className="bg-secondary-gold-5">
      <div className="px-12 flex-col flex items-center">
        <Text
          fontWeight={600}
          fontSize={32}
          className="text-primary-gray-4 mb-12"
          textAlign="center"
          as="h1"
        >
          Trading lebih profit dengan penawaran menarik dari TPFx
        </Text>
        <Button variant="primary" className="py-3 !px-16" onClick={handleRegist}>
          <Text fontWeight={700} fontFamily="Inter">
            Buka Akun
          </Text>
        </Button>
      </div>
    </Section>
  </div>
);

const KomoditiContent = ({ handleRegist, data }: ContentProps) => (
  <div className="flex items-center flex-col">
    <Section className="bg-secondary-gold-5 items-center justify-center flex">
      <Text fontWeight={600} fontSize={36} textAlign="center" as="h1">
        Komoditi
      </Text>
      <Text
        fontWeight={600}
        fontSize={24}
        fontFamily="Nunito Sans"
        textAlign="center"
        as="h1"
        className="my-6"
      >
        Apa itu Komoditi
      </Text>
      <Text fontWeight={400} fontFamily="Inter" textAlign="center" className="max-w-3xl">
        Komoditi merupukan tempat melakukan perdagangan jual dan beli pada sektor ekonomi primer
        dalam bentuk fisik maupun kontrak turunan atau derivatif. Beberapa produk komoditi yang
        dapat Anda diperdagangan di TPFx seperti emas, perak dan oil.
        <br />
        <br />
        Emas dan perak merupakan salah satu komoditas berharga dengan peminat paling tinggi
        diseluruh dunia. Nilai dari emas dan perak yang cenderung stabil menjadikan emas dan perak
        sebagai aset lindung nilai dari perubahan kebijakan ekonomi maupun tekanan pergerakan mata
        uang.
        <br />
        <br />
        Komoditi oil merupakan salah satu komoditi dengan tingkat permintaan yang tinggi karena
        kebutuhan dan harga yang fluktuatif menjadikan instrumen ini banyak diperdagangkan. Harga
        minyak yang cenderung fluktuatif dipengaruhi oleh permintaan minyak yang tinggi akibat isu
        politik maupun hambatan produksi menjadikan komoditi memiliki peluang untuk ditransaksikan
      </Text>
    </Section>
    <Section>
      <div className="px-12">
        <Text
          fontWeight={600}
          fontSize={34}
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
          as="h1"
        >
          Trading Komoditas Lebih Profit dengan TPFx
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {komoditiBenefits.map((data, i) => (
            <Card key={i} className="relative p-6 !bg-secondary-gray-5">
              <Text fontWeight={600} fontSize={24} className="mb-3">
                {data.title}
              </Text>
              <Text fontWeight={400} fontFamily="Inter">
                {data.desc}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>
    <SpreadSection spreadType="KOMODITI" data={data} />
    <Section className="bg-secondary-gold-5">
      <div className="px-12 flex-col flex items-center">
        <Text
          fontWeight={600}
          fontSize={32}
          className="text-primary-gray-4 mb-12"
          textAlign="center"
          as="h1"
        >
          Trading dengan Pilihan Komoditi Terlengkap Dan Spread Yang Kompetitif
        </Text>
        <Button variant="primary" className="py-3 !px-16" onClick={handleRegist}>
          <Text fontWeight={700} fontFamily="Inter">
            Buka Akun
          </Text>
        </Button>
      </div>
    </Section>
  </div>
);

const SahamContent = ({ handleRegist, data }: ContentProps) => (
  <div className="flex items-center flex-col">
    <Section className="bg-secondary-gold-5 items-center justify-center flex">
      <Text fontWeight={600} fontSize={36} textAlign="center" as="h1">
        Index Saham
      </Text>
      <Text
        fontWeight={600}
        fontSize={24}
        fontFamily="Nunito Sans"
        textAlign="center"
        as="h1"
        className="my-6"
      >
        Apa itu Index Saham
      </Text>
      <Text fontWeight={400} fontFamily="Inter" textAlign="center" className="max-w-3xl">
        Index Saham merupakan turunan dari efek utama seperti perusahaan teknologi dan perusahaan
        lainnya. TPFx menawarkan index saham utama seperti NASDAQ, Dow Jones, S&P 500, Hang Seng dan
        Nikkei 225. Index Saham Berjangka menunjukkan pergerakan umum harga saham. Dengan
        perdagangan dua arah pada index maka Anda memiliki peluang keuntungan yanglebih maksimal.
      </Text>
    </Section>
    <Section>
      <div className="px-12">
        <Text
          fontWeight={600}
          fontSize={34}
          className="text-primary-gray-4 mb-12 pt-2"
          textAlign="center"
          as="h1"
        >
          Trading Index Lebih Profit dengan TPFx
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {sahamBenefits.map((data, i) => (
            <Card key={i} className="relative p-6 !bg-secondary-gray-5">
              <Text fontWeight={600} fontSize={24} className="mb-3">
                {data.title}
              </Text>
              <Text fontWeight={400} fontFamily="Inter">
                {data.desc}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>
    <SpreadSection spreadType="SAHAM" data={data} />
    <Section className="bg-secondary-gold-5">
      <div className="px-12 flex-col flex items-center">
        <Text
          fontWeight={600}
          fontSize={32}
          className="text-primary-gray-4 mb-12"
          textAlign="center"
          as="h1"
        >
          Trading dengan Variasi Index Terlengkap Dan Spread Yang Kompetitif
        </Text>
        <Button variant="primary" className="py-3 !px-16" onClick={handleRegist}>
          <Text fontWeight={700} fontFamily="Inter">
            Buka Akun
          </Text>
        </Button>
      </div>
    </Section>
  </div>
);

type TabKeyType = 'FOREX' | 'KOMODITI' | 'SAHAM';

function Instruments(props: { spreadData: SpreadDataInterface | null }) {
  const router = useRouter();
  const navigateToRegist = () => router.push('/register');
  const [activeTab, setActiveTab] = useState<TabKeyType>('FOREX');

  const tabContents: Record<TabKeyType, JSX.Element> = {
    FOREX: <ForexContent handleRegist={navigateToRegist} data={props.spreadData} />,
    KOMODITI: <KomoditiContent handleRegist={navigateToRegist} data={props.spreadData} />,
    SAHAM: <SahamContent handleRegist={navigateToRegist} data={props.spreadData} />
  };

  return (
    <div>
      <Layout>
        <InstrumentsBanner onClickBtn={navigateToRegist} />
        <div className="flex w-full p-12">
          {Object.keys(tabContents).map((tab, i) => {
            let className =
              'cursor-pointer border-primary-gold-1 ' + (activeTab === tab ? ' border-b-2' : '');
            if (i) className += ' ml-6';
            return (
              <div key={i} className={className} onClick={() => setActiveTab(tab as TabKeyType)}>
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
        <div>{tabContents[activeTab]}</div>
      </Layout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getSpreadData();
    if (response) {
      return { props: { spreadData: response } };
    } else {
      return { props: { spreadData: null } };
    }
  } catch (error) {
    return { props: { spreadData: null } };
  }
};

export default Instruments;
