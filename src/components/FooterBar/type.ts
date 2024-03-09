import { HTMLProps, ReactNode } from 'react';

export interface FooterBarProps {
  renderLeft?: () => ReactNode;
  renderRight?: () => ReactNode;
  children?: ReactNode;
  wrapperClassName?: HTMLProps<HTMLElement>['className'];
  bodyClassName?: HTMLProps<HTMLElement>['className'];
}
