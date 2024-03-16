import { HTMLAttributes, HTMLProps, ReactNode } from 'react';

export interface ButtonPrimaryAnimatedProps {
  className?: HTMLProps<HTMLElement>['className'];
  children: ReactNode;
  onPress?: () => void;
}
