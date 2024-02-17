import { Flex, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Canvas, Circle, RoundedRect, Shadow } from '@shopify/react-native-skia';

import styles from '@/styles';
import { Svg } from '@/assets';
import { NavigationUtils } from '@/utils';
import { HeaderBarProps } from './type';

const HeaderBar = (props: HeaderBarProps) => {
  const { title, headerClass, renderTitle } = props;

  return (
    <Flex className={`flex-row items-center gap-1 my-1 ${headerClass}`}>
      <View className="relative">
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
          className="w-[43px] h-[43px] rounded-lg items-center justify-center absolute top-2.5 left-3.5"
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
