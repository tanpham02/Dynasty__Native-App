import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Box, Flex } from 'native-base';
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationUtils } from '@/utils';
import { Svg } from '@/assets';

interface HeaderBarProps {
  headerBarClass?: string;
  title?: string;
  renderTitle?: () => void;
}

const HeaderBar = (props: HeaderBarProps) => {
  const { headerBarClass, renderTitle, title } = props;
  return (
    <Flex className={`flex-row items-center gap-1 my-1 ${headerBarClass}`}>
      <View className="relative bg-secondary">
        <Canvas
          style={{
            height: 75,
            width: 75,
          }}
        >
          <RoundedRect x={15} y={10} width={43} height={43} r={8} color="#f5faff">
            <Shadow dx={10} dy={10} blur={10} color="#dfe6ee" />
            <Shadow dx={-10} dy={-10} blur={10} color="#ffffff" />
          </RoundedRect>
        </Canvas>
        <TouchableOpacity
          onPress={NavigationUtils.goBack}
          className="w-[43px] h-[43px] rounded-lg items-center justify-center absolute top-0 left-0"
        >
          <Svg.ArrowLeft width={24} height={24} />
        </TouchableOpacity>
      </View>
      {(title && <Text className="font-nunito-700 text-lg">{title}</Text>) || renderTitle?.() || (
        <></>
      )}
    </Flex>
  );
};

export default HeaderBar;
