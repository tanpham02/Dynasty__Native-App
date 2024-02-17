import { Text, TouchableOpacity, View } from 'react-native';
import { Canvas, Circle, Shadow } from '@shopify/react-native-skia';

import { Svg } from '@/assets';
import { BuyActionItemProps } from './type';

const BuyActionItem = ({
  label,
  Icon,
  onPress,
  isActive,
  wrapperClassName,
}: BuyActionItemProps) => {
  return (
    <View className={`items-center w-1/4 relative ${wrapperClassName}`}>
      <Canvas
        style={{
          flex: 1,
          height: 70,
          width: '100%',
        }}
      >
        <Circle r={25} cx={35} cy={35} color="#f0f6fc">
          <Shadow dx={10} dy={10} blur={10} color="#dfe6ee" />
          <Shadow dx={-10} dy={-10} blur={10} color="#ffffff" />
        </Circle>
      </Canvas>
      <View className="absolute top-[10px] left-3">
        <TouchableOpacity
          onPress={onPress}
          className={`border ${isActive ? 'border-secondary' : 'border-transparent'} w-[50px] h-[50px] rounded-full items-center justify-center bg-gray-5`}
        >
          <Icon width={25} height={25} className="text-zinc-800" />
        </TouchableOpacity>
        <View
          className={`flex-row mt-2 items-center justify-center ${isActive ? 'border-b border-secondary -ml-2.5' : '-ml-1'}`}
        >
          {isActive && (
            <Svg.Checked width={11} height={11} className="text-secondary mr-0.5 mb-1" />
          )}
          <Text
            className={`font-nunito-700 text-xs pb-2 ${isActive ? 'text-zinc-700' : ' text-zinc-500'}`}
          >
            {label}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BuyActionItem;
