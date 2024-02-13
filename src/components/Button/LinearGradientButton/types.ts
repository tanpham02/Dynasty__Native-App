import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type IconType = React.ReactNode | ImageSourcePropType | string;

export interface LinearGradientButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  icon?: any;
  iconStyle?: StyleProp<ImageStyle>;
  title?: string;
}
