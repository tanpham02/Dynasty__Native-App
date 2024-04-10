import { ReactNode } from 'react';
import { Svg } from '@/assets';

interface Colors {
  success?: string;
  danger?: string;
  default?: string;
}

export const colors: Record<keyof Colors, string> = {
  success: 'bg-primary',
  danger: 'bg-secondary',
  default: 'bg-zinc-400',
};

export interface ButtonIconProps {
  onPress(): void;
  color?: keyof Colors;
  icon: keyof typeof Svg;
}
