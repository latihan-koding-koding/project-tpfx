import { ReactNode } from 'react';

export type FontWeightType =
  | 'normal'
  | 'semi-bold'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 'initial'
  | 'inherit'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
export interface TextPropsInterface {
  fontWeight?: FontWeightType;
  color?: string;
  fontSize?: number;
  bold?: boolean;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  numberOfLines?: number;
  isError?: boolean;
  isEllipsis?: boolean;
  maxNumberOfLines?: number;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  fontFamily?: 'Nunito Sans' | 'Inter';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  onClick?: () => void;
}

export type TextAlign = 'left' | 'center' | 'right';
export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
export type TextDecoration =
  | 'overline'
  | 'underline'
  | 'line-through'
  | 'overline underline'
  | 'none';
