import Banner from '@components/Banner/Banner';
import { Button } from '@components/Button/Button';
import Section from '@components/Section/Section';
import Text from '@components/Text/Text';
import Layout from '@layouts/index';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ChangeEvent, ReactText, useMemo, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { SpreadValueInterface } from '../../apis/spread';

const Spinner = styled.div`
  ${tw`animate-spin ease-linear rounded-full border-black h-5 w-5`}
  border-top-color: #fff;
  border-width: 6px;
`;
const StyledSelect = styled.select`
  ${tw`ml-8 appearance-none w-full outline-none pr-10`}
  font-family: Nunito Sans;
  font-size: 24px;
  font-weight: 600;
`;
const StyledInput = styled.input`
  ${tw`ml-8 appearance-none w-full outline-none pr-10`}
  font-family: Nunito Sans;
  font-size: 24px;
  font-weight: 600;
`;

interface InputPropsInterface {
  value?: ReactText;
  label?: string;
  className?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  disabled?: boolean;
}
interface SelectPropsInterface extends InputPropsInterface {
  optionList?: Array<{ label: string; value: string }>;
  icon?: string;
}
const SelectInput = (props: SelectPropsInterface) => {
  const { className, label, optionList } = props;
  return (
    <div className={className}>
      {!!label && (
        <Text fontFamily="Inter" fontWeight={500} className="mb-2">
          {label}
        </Text>
      )}
      <div
        className={`p-3 flex relative rounded-md border border-primary-gold-1 ${
          props.disabled ? 'bg-[#EFEFEF4D]' : ''
        }`}
        style={{ minHeight: 78 }}
      >
        <StyledSelect id="select" onClick={(e) => e.preventDefault()} {...props}>
          {optionList?.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <div className="absolute right-3 translate-y-1/2 pointer-events-none -top-1">
          <Image src="/images/icons/ChevronDown.png" width={40} height={40} alt="chevron-down" />
        </div>
      </div>
    </div>
  );
};

const Input = (props: InputPropsInterface) => {
  return (
    <div className={props.className}>
      {!!props.label && (
        <Text fontFamily="Inter" fontWeight={500} className="mb-2">
          {props.label}
        </Text>
      )}
      <div
        className={`border border-primary-gold-1 p-3 flex relative rounded-md ${
          props.disabled ? 'bg-[#7c7a7a4d]' : ''
        }`}
        style={{ minHeight: 78 }}
      >
        <StyledInput
          type="number"
          defaultValue={undefined}
          {...props}
          className={'disabled:bg-transparent'}
          min={0}
        />
      </div>
    </div>
  );
};

type PairType =
  | 'EURUSD'
  | 'AUDUSD'
  | 'GBPUSD'
  | 'NZDUSD'
  | 'XAUUSD'
  | 'XAGUSD'
  | 'USDJPY'
  | 'USDCAD'
  | 'USDCHF'
  | 'EURGBP'
  | 'EURJPY'
  | 'EURCH';

const optionList = {
  pair: [
    { value: 'EURUSD', label: 'EURUSD' },
    { value: 'AUDUSD', label: 'AUDUSD' },
    { value: 'GBPUSD', label: 'GBPUSD' },
    { value: 'NZDUSD', label: 'NZDUSD' },
    { value: 'XAUUSD', label: 'XAUUSD' },
    { value: 'XAGUSD', label: 'XAGUSD' },
    { value: 'USDJPY', label: 'USDJPY' },
    { value: 'USDCAD', label: 'USDCAD' },
    { value: 'USDCHF', label: 'USDCHF' },
    { value: 'EURGBP', label: 'EURGBP' },
    { value: 'EURJPY', label: 'EURJPY' },
    { value: 'EURCH', label: 'EURCH' }
  ],
  position: [
    { value: 'BUY', label: 'Buy/Long' },
    { value: 'SELL', label: 'Sell/Short' }
  ],
  accountType: [
    { value: 'STANDARD', label: 'Standard' },
    { value: 'MINI', label: 'Mini' }
  ]
};

interface ValueDataInterface {
  pair: PairType;
  position: 'BUY' | 'SELL';
  accountType: 'STANDARD' | 'MINI';
  lot?: number;
  open?: number;
  close?: number;
  commission?: number;
  swap?: number;
  days?: number;
}

const mandatoryFields: Array<Partial<keyof ValueDataInterface>> = [
  'pair',
  'position',
  'accountType',
  'lot',
  'open',
  'close'
];

const categories = {
  1: ['EURUSD', 'AUDUSD', 'GBPUSD', 'NZDUSD'],
  2: ['XAUUSD', 'XAGUSD'],
  3: ['USDJPY', 'USDCAD', 'USDCHF'],
  4: ['EURGBP', 'EURJPY', 'EURCH']
};

interface ResponseInterface {
  'EURUSD.tp': SpreadValueInterface;
}
const fetchUSDPrice = async (): Promise<ResponseInterface | null> => {
  try {
    const res = await fetch(
      'https://api.trijayapratama.com/apigetprice.php?server=1&symbols=EURUSD.tp'
    );
    return res.json();
  } catch (error) {
    return null;
  }
};

function Calculator(props: { spreadData: SpreadValueInterface | null }) {
  const [calcData, setCalcData] = useState<ValueDataInterface>({
    pair: 'EURUSD',
    position: 'BUY',
    accountType: 'STANDARD',
    lot: undefined,
    open: undefined,
    close: undefined,
    commission: undefined,
    swap: undefined,
    days: undefined
  });

  const [calculatedValue, setCalculatedValue] = useState<number>();
  const [isCalculating, setIsCalculating] = useState(false);

  const isCalculateDisabled = useMemo(() => {
    let isDisabled = false;
    mandatoryFields.forEach((value) => {
      const dataValue = (calcData[value] as ReactText) || undefined;
      if (dataValue === undefined || dataValue === '') {
        isDisabled = true;
      }
    });
    if (isDisabled) return isDisabled;

    return isDisabled;
  }, [calcData]);

  const handleChangeInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const tempVal = value;
    if (type === 'number' && (parseInt(tempVal || '0') < 0 || isNaN(parseInt(tempVal || '0')))) {
      return;
    }

    // FIXME: decimal value error
    const newValue = tempVal;
    // const newValue =
    //   type === 'number' && typeof tempVal === 'string' && tempVal.length > 1 && tempVal[0] === '0'
    //     ? tempVal.substring(1)
    //     : tempVal;

    setCalcData((oldData) => ({ ...oldData, [name]: newValue }));
  };

  const calculate = async () => {
    setIsCalculating(true);
    let finalValue = 0;
    const {
      pair,
      accountType,
      open = 0,
      close = 0,
      lot = 0,
      commission = 0,
      swap = 0,
      days = 0,
      position
    } = calcData;
    let accountTypeValueMapper = { STANDARD: 100000, MINI: 10000 };
    let formulaType = 1;

    if (categories[1].includes(pair)) formulaType = 1;
    if (categories[2].includes(pair)) {
      formulaType = 2;
      accountTypeValueMapper = { STANDARD: 100, MINI: 10 };
    }
    if (categories[3].includes(pair)) formulaType = 3;
    if (categories[4].includes(pair)) formulaType = 4;

    const price = close - open;
    const accountTypeValue = accountTypeValueMapper[accountType];

    switch (formulaType) {
      case 3:
        // (Close Price - Open Price) * Lot * Account Type
        // [price] * [lot] * [accountTypeValue]
        finalValue = (price / close) * lot * accountTypeValue;
        break;

      case 4:
        // eslint-disable-next-line no-case-declarations
        // const data = await fetchUSDPrice();
        if (props.spreadData) {
          // eslint-disable-next-line no-console
          // console.log(data);

          const EURUSD = position === 'BUY' ? props.spreadData.bid : props.spreadData.ask;
          // (Close Price - Open Price) * (Bid EURUSD / Close Price) * Lot * Account Type
          // [price] * ([EURUSD] / [Close])  * [lot] * [accountTypeValue]
          finalValue = price * (Number(EURUSD) / close) * lot * accountTypeValue;
        }
        break;
      default:
        // (Close Price - Open Price) * Lot * Account Type
        // [price] * [Lot] * [accountTypeValue]
        finalValue = price * lot * accountTypeValue;
        break;
    }
    finalValue = finalValue - commission * lot - swap * days;
    finalValue = finalValue * (position === 'BUY' ? 1 : -1);
    setIsCalculating(false);

    setCalculatedValue(finalValue);
  };

  return (
    <Layout>
      <Banner bgType="image" bgUrl="/images/banners/metatrader.png">
        <main className="mt-10  max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-16 md:pb-20 lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
          <Text fontSize={36} fontWeight={600} className="mt-4 text-white sm:text-4xl">
            Calculator
          </Text>
          <Text fontSize={18} fontWeight={400} fontFamily="Inter" className="mt-4 text-white">
            Akses fitur kalkulator untuk membantu Anda menghitung profit yang didapat dengan selalu
            menerapkan money management.
          </Text>
        </main>
      </Banner>
      <Section className="pt-9 pb-20">
        <Text fontSize={36} fontWeight={600} textAlign="center">
          All-in One Forex Calculator
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 col auto-rows-auto">
          <SelectInput
            value={calcData.pair}
            name="pair"
            onChange={handleChangeInput}
            label="Currency Pair"
            optionList={optionList.pair}
          />
          <SelectInput
            value={calcData.position}
            name="position"
            onChange={handleChangeInput}
            label="Position"
            optionList={optionList.position}
          />
          <Input value={calcData.lot} name="lot" onChange={handleChangeInput} label="Lot" />
          <Input
            value={calcData.open}
            name="open"
            onChange={handleChangeInput}
            label="Open Price"
          />
          <Input
            value={calcData.close}
            name="close"
            onChange={handleChangeInput}
            label="Close Price"
          />
          <SelectInput
            value={calcData.accountType}
            name="accountType"
            onChange={handleChangeInput}
            label="Account Type"
            optionList={optionList.accountType}
          />
          <Input
            value={calcData.commission}
            name="commission"
            onChange={handleChangeInput}
            label="Commission per Lot  ($)"
          />
          <Input value={calcData.swap} name="swap" onChange={handleChangeInput} label="Swap ($)" />
          <Input
            value={calcData.days}
            name="days"
            onChange={handleChangeInput}
            label="Days"
            disabled={!calcData.swap}
          />
        </div>
        <div className="flex items-center mt-11">
          <div className="h-0 border border-black w-full" />
          <Button
            className="!px-16 mx-20 min-w-[200px]"
            disabled={isCalculateDisabled}
            onClick={calculate}
          >
            {isCalculating ? <Spinner /> : 'Calculate'}
          </Button>
          <div className="h-0 border border-black w-full" />
        </div>

        <div className="mt-12 flex justify-center">
          <div className="border min-w-[400px] py-2 px-6 rounded-md border-primary-gold-1">
            <Text fontSize={23} as={'h1'} textAlign="center" fontWeight={'semi-bold'}>
              Result
            </Text>
            <Text
              fontSize={40}
              as={'h1'}
              textAlign="center"
              fontWeight={'bold'}
              className="text-primary-gold-1 "
            >
              {parseFloat(String(calculatedValue || 0)) < 0 ? '-' : ''}${' '}
              {parseFloat(String(Math.abs(Number(calculatedValue)) || 0)).toFixed(2) || 0}
            </Text>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetchUSDPrice();
    if (response?.['EURUSD.tp']) {
      return { props: { spreadData: response['EURUSD.tp'] } };
    } else {
      return { props: { spreadData: null } };
    }
  } catch (error) {
    return { props: { spreadData: null } };
  }
};

export default Calculator;
