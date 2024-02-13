import { ReactNode } from 'react';

export interface HeaderBarProps {
  title?: string;
  className?: string;
  renderTitle?: () => ReactNode;
}
