export interface SpreadValueInterface {
  time: string;
  bid: string;
  ask: string;
  low: string;
  high: string;
  direction: string;
  digits: string;
}

export type SpreadKeyType =
  | 'AUDUSD.tp'
  | 'CLSK.tp'
  | 'DAK.tp'
  | 'EURCHF.tp'
  | 'EURGBP.tp'
  | 'EURJPY.tp'
  | 'EURUSD.tp'
  | 'GBPUSD.tp'
  | 'HKK.tp'
  | 'JPK.tp'
  | 'NZDUSD.tp'
  | 'UNK.tp'
  | 'UPK.tp'
  | 'USDCAD.tp'
  | 'USDCHF.tp'
  | 'USDJPY.tp'
  | 'XAGUSD.tp'
  | 'XAUUSD.tp';

export type SpreadInterface = Record<SpreadKeyType, SpreadValueInterface>;
export interface SpreadDataInterface extends SpreadInterface {
  code: number;
  codeStat: string;
}

export const getSpreadData = async (): Promise<SpreadDataInterface> => {
  return fetch(
    'http://api.trijayapratama.com/apigetprice.php?server=1&symbols=EURUSD.tp,USDJPY.tp,AUDUSD.tp,GBPUSD.tp,NZDUSD.tp,USDCAD.tp,USDCHF.tp,EURGBP.tp,EURJPY.tp,EURCHF.tp,XAUUSD.tp,XAGUSD.tp,CLSK.tp,DAK.tp,JPK.tp,UNK.tp,UPK.tp,HKK.tp'
  ).then((res) => res.json());
};
