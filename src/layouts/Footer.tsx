import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Text from '../components/Text/Text';

const ColFooterContainer = ({
  titleComp,
  childComp
}: {
  titleComp: ReactNode;
  childComp: ReactNode;
}) => (
  <div className="mt-3 mx-6 max-w-xs shrink-0 flex-grow">
    <div className="h-16 flex items-end">{titleComp}</div>
    <div className="mt-8 ">{childComp}</div>
  </div>
);

const Footer = () => {
  const router = useRouter();

  const footerList: Array<{
    label: string;
    subMenu: Array<{
      label: string;
      onClick?: () => void;
    }>;
  }> = [
    {
      label: 'Trading',
      subMenu: [
        { label: 'Product', onClick: () => router.push('/trading/instruments') },
        { label: 'Account Type', onClick: () => router.push('/trading/account-type') },
        { label: 'Spread & Leverage', onClick: () => router.push('/trading/spread-leverage') },
        { label: 'Deposit & Withdraw', onClick: () => router.push('/trading/deposit-withdraw') }
      ]
    },
    {
      label: 'Partnership',
      subMenu: [{ label: 'IB Program', onClick: () => router.push('/partnership/ib-program') }]
    },
    {
      label: 'Download',
      subMenu: [
        { label: 'Demo Account', onClick: () => router.push('/platform/mt4') },
        {
          label: 'Live Account',
          onClick: () => window.open('https://clientarea.tpfx.co.id/', '_blank')
        },
        {
          label: 'MT4 for Windows',
          onClick: () =>
            window.open(
              'https://download.mql5.com/cdn/web/pt.trijaya.pratama/mt4/tpf4setup.exe',
              '_blank'
            )
        },
        {
          label: 'MT4 for Android',
          onClick: () =>
            window.open(
              'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&gl=US',
              '_blank'
            )
        },
        {
          label: 'MT4 for IOS',
          onClick: () =>
            window.open('https://apps.apple.com/us/app/metatrader-4/id496212596', '_blank')
        },
        {
          label: 'MT4 for Browser',
          onClick: () => window.open('https://mt4.tpfx.co.id/', '_blank')
        }
      ]
    }
  ];

  return (
    <div className="flex-col flex bg-brand-color-4 p-3 bg-primary-gray-4 items-center w-full">
      <div className=" border-white flex-1 w-full max-w-7xl">
        <div className="flex flex-wrap pb-8">
          <ColFooterContainer
            titleComp={<Image alt="tpfx-logo" src="/images/Tpfx.png" height={59} width={143} />}
            childComp={
              <>
                <div className="max-h-14">
                  <Text
                    fontSize={13}
                    textTransform="capitalize"
                    className="mb-1 text-secondary-gray-2 ml-3"
                    fontWeight={600}
                  >
                    Alamat
                  </Text>
                </div>
                <Text
                  textTransform="capitalize"
                  fontWeight={600}
                  className="text-secondary-gray-2 ml-3"
                  fontSize={12}
                >
                  Gedung Sahid Soedirman Center, Lt. 20A/E, <br />
                  Jl. Jenderal Sudirman No 86, <br />
                  Kel. Karet Tengsin, Kec. Tanah Abang,
                  <br />
                  Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta,
                  <br />
                  Kode Pos 10220
                </Text>
              </>
            }
          />
          <ColFooterContainer
            titleComp={
              <Text
                fontSize={13}
                textTransform="capitalize"
                className="mb-1 text-white"
                fontWeight={500}
              >
                Hubungi Kami
              </Text>
            }
            childComp={
              <>
                <Text fontWeight={600} className="text-secondary-gray-2" fontSize={12}>
                  Email : <br />
                  support@tpfx.co.id <br />
                  Call Center : (+62)21 252 75 77 <br />
                  Senin - Jum’at (09.00 - 17.00)
                </Text>
              </>
            }
          />
          {footerList.map((menu, i) => (
            <ColFooterContainer
              key={i}
              titleComp={
                <Text
                  fontSize={13}
                  textTransform="capitalize"
                  className="mb-1 text-white"
                  fontWeight={500}
                >
                  {menu.label}
                </Text>
              }
              childComp={
                <>
                  {menu.subMenu?.map((submenu, i) => (
                    <div className="mb-2" key={i}>
                      <Text
                        fontSize={12}
                        textTransform="capitalize"
                        className="mb-1 text-secondary-gray-2 cursor-pointer"
                        fontWeight={600}
                        onClick={submenu.onClick}
                      >
                        {submenu.label}
                      </Text>
                    </div>
                  ))}
                </>
              }
            />
          ))}
        </div>
      </div>
      <div className="pt-6 pb-2 max-w-7xl w-full">
        <Text className="text-secondary-gray-2" textAlign="center" fontSize={11}>
          WASPADA PENIPUAN MENGATASNAMAKAN PT TRIJAYA PRATAMA FUTURES ATAU TPFX MELALUI WEBSITE
          XTB668.COM ATAU SEJENISNYA
        </Text>
        <Text className="text-secondary-gray-2" textAlign="center" fontSize={11}>
          Segala informasi resmi dimuat pada website resmi TPFx{' '}
          <Link href={'/'}>www.tpfx.co.id</Link> dan call center resmi di nomor (+62)21 252 75 77
        </Text>
      </div>
      <div className="pt-6 pb-9 max-w-7xl w-full">
        <Text className="text-secondary-gray-2" textAlign="center" fontSize={11}>
          Trading derivatif yang mengandung sistem margin membawa keuntungan tinggi terhadap dana,
          tetapi juga dapat memberikan kerugian atas seluruh margin yang diperdagangkan. Pastikan
          anda benar-benar memahami resiko Trading derivatif dan mintalah nasihat consultant jika
          diperlukan. PT Trijaya Pratama Futures tidak bertanggung jawab atas segala bentuk
          kerugian.
        </Text>
      </div>
      <div className="pt-6 pb-9 max-w-7xl border-t-[1px] w-full">
        <Text className="text-secondary-gray-2" textAlign="center" fontWeight={600}>
          Copyright © 2021 PT Trijaya Pratama Futures. All rights reserved. -{' '}
          <Link href={'/privacy-policy'}> Kebijakan Privasi</Link>
        </Text>
      </div>
    </div>
  );
};

export default Footer;
