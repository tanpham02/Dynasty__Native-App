import { HTMLProps, ReactNode } from 'react';
import { StatusBarStyle } from 'react-native';

export interface NoneLayoutProps {
  children: ReactNode;
  barStyle?: null | StatusBarStyle | undefined;
  backgroundStatusBar?: string;
  containerClassName?: HTMLProps<HTMLElement>['className'];
}
