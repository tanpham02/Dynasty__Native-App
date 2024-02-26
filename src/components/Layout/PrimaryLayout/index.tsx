/* eslint-disable react-native/no-inline-styles */

import { SafeAreaView, View } from 'react-native';

import { MyStatusBar, HeaderBar } from '@/components';
import { useStatusBarForAndroid } from '@/hooks';
import { PrimaryLayoutProps } from './type';

const PrimaryLayout = (props: PrimaryLayoutProps) => {
  useStatusBarForAndroid(props.statusBarBackgroundColor);

  return (
    <>
      <MyStatusBar
        backgroundColor={props.statusBarBackgroundColor || 'transparent'}
        barStyle={props.barStyle || 'dark-content'}
      />
      <SafeAreaView className='flex-1'>
        <View className={`flex-1 ${props.containerClass}`}>
          <HeaderBar title={props?.titleScreen} renderTitle={props.renderTitle} headerClass={props.headerBarClass} />
          {props.children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PrimaryLayout;
