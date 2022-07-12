import { ButtonHTMLAttributes } from 'react';

export type VariantButton = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantButton;
  paddingVertical?: number;
  paddingHorizontal?: number;
}
