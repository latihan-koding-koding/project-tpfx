import { ReactNode } from 'react';

export interface BannerPropsInterface {
  children: ReactNode;
  bgType?: 'image' | 'video';
  bgUrl?: string;
  className?: string;
  opacity?: number;
  id?: string;
}
