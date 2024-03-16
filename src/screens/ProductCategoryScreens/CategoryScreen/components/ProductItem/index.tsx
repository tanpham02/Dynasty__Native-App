import { Box, Image } from 'native-base';
import React, { useState } from 'react';
import { Animated, Easing, GestureResponderEvent, Pressable, Text, TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { ProductType } from '@/models/productModel';
import styles from '@/styles';
import { NavigationUtils } from '@/utils';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import { ProductTypeIconList } from '../ProductList/data';
import { ProductItemProps } from './type';

const ProductItem = (props: ProductItemProps) => {
  const { index, name, description, types, image, price } = props;

  const [haveProductFavored, setHaveProductFavorite] = useState<number[]>([]);

  const animation = new Animated.Value(0);

  const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] });

  const handlePressProductFavorite = (evt: GestureResponderEvent) => {
    evt.stopPropagation();
    const existed = haveProductFavored.includes(index);

    setHaveProductFavorite((prev) => {
      if (existed) {
        return haveProductFavored.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  const pressInHandler = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const pressOutHandler = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const handleNavigateProductDetail = () => NavigationUtils.navigate(PathName.PATH_SCREEN.PRODUCT_DETAIL_SCREEN);

  return (
    <Box className='bg-third rounded-lg m-4' style={styles.shadowX}>
      <Box className='p-3 gap-1'>
        <Text className='text-base text-black font-nunito-700'>{name || ''}</Text>
        {description && (
          <Text className='text-xs text-gray-9 font-nunito-500' style={{ lineHeight: 17 }} numberOfLines={2}>
            {description}
          </Text>
        )}
      </Box>

      <Box className={`flex-row mx-3 mb-4 flex justify-between items-center`}>
        {types.length > 0 && !types.includes(ProductType.NORMAL) && (
          <Box className='flex-row gap-1'>
            {types.map((type, index) => {
              const { Icon, color } = ProductTypeIconList[type];
              return (
                <Box className='rounded-full p-.5 border-2 border-white'>
                  <Icon key={index} width={21} height={21} color={color} />
                </Box>
              );
            })}
          </Box>
        )}
        <Animated.View style={[{ transform: [{ scale: scale }] }]} className='w-fit ml-auto'>
          <Pressable
            onPress={handlePressProductFavorite}
            onTouchStart={pressInHandler}
            onPressOut={pressOutHandler}
            className='item-center'
          >
            {haveProductFavored.includes(index) ? (
              <Svg.HeartSolid width={21} height={21} color='#e8002a' />
            ) : (
              <Svg.HeartOutline width={21} height={21} color='#000000' />
            )}
          </Pressable>
        </Animated.View>
      </Box>

      <Box className='relative pt-[40%]'>
        <Image
          source={{
            uri: image,
          }}
          alt={name}
          width='full'
          resizeMode='contain'
          className='absolute top-0 left-0 bottom-0 right-0 bg-zinc-200'
        />
      </Box>

      <Box className='mt-3 p-3 flex-row items-center justify-between'>
        <Box>
          <Text className='font-nunito-700 text-sm text-gray-10'>Giá chỉ từ</Text>
          <Text className='font-nunito-800 text-lg text-secondary'>{formatCurrencyByLocale(price)}</Text>
        </Box>
        <TouchableOpacity
          className='bg-secondary rounded-lg p-2 flex-row items-center'
          onPress={handleNavigateProductDetail}
        >
          <Text className='font-nunito-700 text-sm text-white px-2'>Mua ngay</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default ProductItem;
