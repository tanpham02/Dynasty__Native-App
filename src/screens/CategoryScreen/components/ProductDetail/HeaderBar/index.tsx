import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Box, Flex } from 'native-base';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationUtils } from '@/utils';
import { Svg } from '@/assets';
import { useNavigation } from '@react-navigation/native';

interface HeaderBarProps {
  headerBarClass?: string;
  title?: string;
  renderTitle?: () => void;
}

const HeaderBar = (props: HeaderBarProps) => {
  const { headerBarClass, renderTitle, title } = props;
  const navigation = useNavigation();
  return (
    <Flex className={`relative flex-row items-start ${headerBarClass}`}>
      <View className='absolute top-0 left-0 z-999999'>
        <Canvas
          style={{
            height: 75,
            width: 75,
          }}
        >
          <RoundedRect x={15} y={10} width={43} height={43} r={8} color='#f5faff'>
            <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
            <Shadow dx={-10} dy={-10} blur={10} color='#ffffff' />
          </RoundedRect>
        </Canvas>
        <View className='absolute top-2.5 left-3.5'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='w-[43px] h-[43px] rounded-lg items-center justify-center'
          >
            <Svg.ArrowLeft width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
      {(title && <Text className='font-nunito-700 text-lg'>{title}</Text>) || renderTitle?.() || <></>}
    </Flex>
  );
};

export default HeaderBar;
