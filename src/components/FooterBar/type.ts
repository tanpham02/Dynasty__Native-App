import { HTMLProps, ReactNode } from 'react';

export interface FooterBarProps {
  children: ReactNode;
  wrapperClassName?: HTMLProps<HTMLElement>['className'];
  bodyClassName?: HTMLProps<HTMLElement>['className'];
}
