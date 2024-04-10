/* eslint-disable react-native/no-inline-styles */

import { SafeAreaView, View } from 'react-native';

import { useStatusBarForAndroid } from '@/hooks';
import { PrimaryLayoutProps } from './type';
import HeaderBar from '../../components/HeaderBar';
import MyStatusBar from '../../components/MyStatusBar';

const PrimaryLayout = ({
  barStyle,
  children,
  containerClass,
  headerBarClass,
  statusBarBackgroundColor,
  titleScreen,
  renderTitle,
}: PrimaryLayoutProps) => {
  useStatusBarForAndroid(statusBarBackgroundColor);

  return (
    <>
      <MyStatusBar backgroundColor={statusBarBackgroundColor || 'transparent'} barStyle={barStyle || 'dark-content'} />
      <SafeAreaView className='flex-1'>
        <View className={`flex-1 ${containerClass}`}>
          <HeaderBar title={titleScreen} renderTitle={renderTitle} headerClass={headerBarClass} />
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PrimaryLayout;
