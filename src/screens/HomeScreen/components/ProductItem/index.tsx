import { Image, Text, View } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { formatMoneyVND, getFullImageUrl, widthScreen } from '@/utils';
import { ProductItemProps } from './type';

const ProductItem = ({ name, price, image }: ProductItemProps) => {
  return (
    <View
      style={[
        styles.shadowX,
        {
          width: widthScreen * 0.45 + 45,
        },
      ]}
      className='relative min-h-[280px] w-2/5 '
    >
      {/* <Canvas
        style={{
          flex: 1,
        }}
      >
        <RoundedRect x={10} y={10} r={8} height={240} width={widthScreen * 0.45} color='#ebebeb'>
          <Shadow dx={10} dy={10} blur={10} color='##ebebeb' />
          <Shadow dx={-10} dy={-10} blur={10} color='#ebebeb' />
        </RoundedRect>
      </Canvas> */}
      <View className='absolute top-1 left-1 right-[22px] bottom-1 bg-zinc-100 mr-2 rounded-lg'>
        <View className='mr-3 rounded-lg p-2 mb-2 ml-1'>
          <View className='w-7 h-7 rounded-full bg-primary/20 items-center justify-center ml-auto mt-1 -mr-1.5'>
            <Svg.Plus width={19} height={19} className='color-white' />
          </View>
          <Image
            source={{
              uri: getFullImageUrl(image),
            }}
            className='w-full h-full max-h-[140px] mt-1 rounded-lg'
            resizeMode='cover'
            alt={name}
          />

          <View className='flex-1'>
            <Text
              className='font-nunito-700 text-[14.5px] text-zinc-700 leading-tight mt-0.5 min-h-[40px]'
              numberOfLines={2}
            >
              {name}
            </Text>
            <Text className='font-nunito-700 mt-2 text-[13.5px] text-secondary'>{formatMoneyVND(price)}đ</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
