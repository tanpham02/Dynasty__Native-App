import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { formatMoneyVND, widthScreen } from '@/utils';
import { ProductItemProps } from './type';

const ProductItem = ({ name, price, image }: ProductItemProps) => {
  return (
    <View
      style={{
        width: widthScreen * 0.45 + 45,
      }}
      className='relative h-[280px] w-2/5'
    >
      <Canvas
        style={{
          flex: 1,
        }}
      >
        <RoundedRect x={10} y={10} r={8} height={240} width={widthScreen * 0.45} color='#f0f6fc'>
          <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
          <Shadow dx={-10} dy={-10} blur={10} color='#f7f7f7' />
        </RoundedRect>
      </Canvas>
      <View className='absolute top-1 left-1 right-[22px] bottom-1'>
        <TouchableOpacity className='mr-3 rounded-lg p-2 mb-2 ml-1'>
          <Image
            source={{
              uri: image
                ? `https://dynasty-ws.vtaan.id.vn${image}`
                : 'https://dynasty-ws.vtaan.id.vn/public/uploads/image/products/pizza-hai-san-dao.png',
            }}
            className='object-contain w-full h-full max-h-32 mt-1 rounded-lg'
            resizeMode='contain'
            alt='Pizza hải sản pessto xanh'
          />
          <Text className='font-nunito-700 text-sm text-zinc-700 leading-tight mt-0.5 h-[40px]' numberOfLines={2}>
            {name}
            {name}
            {name}
          </Text>
          <View className='my-3 w-2/5 h-0.5 bg-secondary' />
          <View className='flex-row'>
            <Text className='flex-1 font-nunito-600 text-zinc-700'>{formatMoneyVND(price)}đ</Text>
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
