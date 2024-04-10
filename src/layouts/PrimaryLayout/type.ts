import { ReactNode } from 'react';

import { ColorValue, StatusBarStyle, StyleProp, ViewStyle } from 'react-native';

export interface PrimaryLayoutProps {
  statusBarBackgroundColor?: ColorValue;
  barStyle?: null | StatusBarStyle | undefined;
  headerBarClass?: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  containerClass?: string;
  titleScreen?: string;
  goBack?(): void;
  renderTitle?: () => ReactNode;
}
