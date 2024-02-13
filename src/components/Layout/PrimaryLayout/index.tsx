/* eslint-disable react-native/no-inline-styles */

import { MyStatusBar } from '@/components';
import HeaderBar from '@/components/HeaderBar';
import { SafeAreaView, View } from 'react-native';
import { PrimaryLayoutProps } from './type';

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
