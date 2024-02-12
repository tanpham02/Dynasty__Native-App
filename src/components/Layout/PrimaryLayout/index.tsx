/* eslint-disable react-native/no-inline-styles */
import { Flex } from 'native-base';
import { ReactNode } from 'react';

import { Svg } from '@/assets';
import styles from '@/styles';
import { MyStatusBar } from '@/components';
import {
  ColorValue,
  SafeAreaView,
  StatusBarStyle,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface Props {
  statusBarBackgroundColor?: ColorValue;
  barStyle?: null | StatusBarStyle | undefined;
  headerBarClass?: string;
  style?: StyleProp<ViewStyle>;
  goBack?(): void;
  title?: string;
  children?: ReactNode;
  containerClass?: string;
}

interface HeaderBarProps {
  title?: string;
  className?: string;
}

const HeaderBar = (props: HeaderBarProps) => {
  const { title, className } = props;

  return (
    <Flex className={`flex-row p-2 items-center gap-3 ${className}`}>
      <TouchableOpacity className="bg-gray-5 p-2 rounded-lg" style={styles.shadowX}>
        <Svg.ArrowLeft width={20} height={20} />
      </TouchableOpacity>
      <Text className="font-nunito-700 text-lg">{title || ''}</Text>
    </Flex>
  );
};

const PrimaryLayout = (props: Props) => {
  return (
    <>
      <MyStatusBar
        backgroundColor={props.statusBarBackgroundColor || 'transparent'}
        barStyle={props.barStyle || 'dark-content'}
      />
      <SafeAreaView className="flex-1">
        <View className={`flex-1 ${props.containerClass}`}>
          <HeaderBar title={props.title} className={props.headerBarClass} />
          {props.children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PrimaryLayout;
