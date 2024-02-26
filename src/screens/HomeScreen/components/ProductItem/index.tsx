import { Canvas, RoundedRect, Shadow, useImage, Text as Text2D, useFont } from '@shopify/react-native-skia';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';

import styles from '@/styles';
import { NumberUtils, widthScreen } from '@/utils';

import ProductTestImage from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';

const ProductItem = () => {
  const image = useImage(require('@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png'));
  const fontSize = 16;
  const font = useFont(require('@/assets/fonts/Nunito-Regular.ttf'), fontSize);

  return (
    <View style={styles.widthTwoPerFive} className='relative h-[260px]'>
      <Canvas
        style={{
          flex: 1,
          height: 260,
        }}
      >
        <RoundedRect x={10} y={10} r={8} height={230} width={widthScreen * 0.5 - 45} color='#f0f6fc'>
          <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
          <Shadow dx={-10} dy={-10} blur={10} color='#f7f7f7' />
        </RoundedRect>
      </Canvas>
      <View className='absolute top-1 left-1 right-0 bottom-1'>
        <TouchableOpacity className='mr-3 rounded-lg p-2 mb-2 ml-1'>
          <Image
            source={ProductTestImage}
            className='object-contain w-full max-h-32'
            resizeMode='contain'
            alt='Pizza hải sản pessto xanh'
          />
          <Text className='font-nunito-700 text-sm text-zinc-700' numberOfLines={2}>
            Pizza hải sản pessto xanh
          </Text>
          <View className='my-3 w-1/3 h-0.5 bg-secondary' />
          <View className='flex-row'>
            <Text className='flex-1 font-nunito-600 text-zinc-700'>{NumberUtils.formatMoneyVND(199000)}đ</Text>
            <View className='border-2 border-secondary rounded p-0.5'>
              <Text className='text-xs font-nunito-500 text-zinc-700'>Mua ngay</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
