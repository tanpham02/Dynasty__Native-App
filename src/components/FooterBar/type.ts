import { HTMLProps, ReactNode } from 'react';

export interface FooterBarProps {
  children: ReactNode;
  wrapperClassName?: HTMLProps<HTMLElement>['className'];
}
