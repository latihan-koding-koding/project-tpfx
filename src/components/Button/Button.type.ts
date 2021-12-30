import { ButtonHTMLAttributes } from 'react';

export type VariantButton = 'primary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: VariantButton;
}
