import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface ProfileMenuItemProps {
  Icon: FC<SvgProps>;
  label: string;
  onPress?(): void;
}
