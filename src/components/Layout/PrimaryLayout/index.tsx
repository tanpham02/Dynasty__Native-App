/* eslint-disable react-native/no-inline-styles */
import { ReactNode } from 'react';

import { MyStatusBar } from '@/components';
import HeaderBar from '@/components/HeaderBar';
import { ColorValue, SafeAreaView, StatusBarStyle, StyleProp, View, ViewStyle } from 'react-native';

interface PrimaryLayoutProps {
  statusBarBackgroundColor?: ColorValue;
  barStyle?: null | StatusBarStyle | undefined;
  headerBarClass?: string;
  style?: StyleProp<ViewStyle>;
  goBack?(): void;
  renderTitle?: () => ReactNode;
  children?: ReactNode;
  containerClass?: string;
  titleScreen?: string;
}

const PrimaryLayout = (props: PrimaryLayoutProps) => {
  return (
    <>
      <MyStatusBar
        backgroundColor={props.statusBarBackgroundColor || 'transparent'}
        barStyle={props.barStyle || 'dark-content'}
      />
      <SafeAreaView className="flex-1">
        <View className={`flex-1 ${props.containerClass}`}>
          <HeaderBar
            title={props?.titleScreen}
            renderTitle={props.renderTitle}
            className={props.headerBarClass}
          />
          {props.children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PrimaryLayout;
