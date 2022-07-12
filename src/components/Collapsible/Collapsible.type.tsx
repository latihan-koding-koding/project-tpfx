import { ReactNode } from 'react';

export interface CollapsibleProps {
  title: string;
  content?: ReactNode;
  defaultOpen?: boolean;
}
