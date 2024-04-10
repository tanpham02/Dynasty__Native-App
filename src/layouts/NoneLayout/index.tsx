import { View } from 'native-base';
import React from 'react';
import { NoneLayoutProps } from './type';
import { MyStatusBar } from '@/components';
import { SafeAreaView } from 'react-native';

const NoneLayout = ({ children, containerClassName, backgroundStatusBar, barStyle }: NoneLayoutProps) => {
  return (
    <>
      <MyStatusBar backgroundColor={backgroundStatusBar || ''} barStyle={barStyle || 'dark-content'} />
      <SafeAreaView className='flex-1'>
        <View className={`flex-1 ${containerClassName}`}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default NoneLayout;
