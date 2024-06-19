import { Box, Image } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, GestureResponderEvent, Pressable, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Svg } from '@/assets';
import { PATH_SCREEN } from '@/constants';
import { ProductType } from '@/models/productModel';
import styles from '@/styles';
import { getFullImageUrl, navigate } from '@/utils';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import { ProductTypeIconList } from '../ProductList/data';
import { ProductItemProps } from './type';
import DefaultImage from '@/assets/images/default-image.png';

const ProductItem = (props: Partial<ProductItemProps>) => {
  const { index, name, description, types, image, price, categoryId, length } = props;

  const animation = useRef(new Animated.Value(0)).current;

  const [haveProductFavored, setHaveProductFavorite] = useState<number[]>([]);
  const [isResetAnimated, setIsResetAnimated] = useState<boolean>(true);
  const [isErrorImage, setIsErrorImage] = useState<boolean>(false);

  const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 1.3] });

  const handlePressProductFavorite = (evt: GestureResponderEvent) => {
    evt.stopPropagation();
    const existed = haveProductFavored.includes(index);

    setHaveProductFavorite((prev) => {
      if (existed) {
        return haveProductFavored.filter((item) => item !== index);
      }
      return [...prev, index];
    });
    onScaleFavoriteIcon();
  };

  const onScaleFavoriteIcon = () => {
    setIsResetAnimated(false);
    Animated.timing(animation, {
      toValue: isResetAnimated ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleNavigateProductDetail = () => navigate(PATH_SCREEN.PRODUCT_DETAIL_SCREEN);

  useEffect(() => {
    let timerId = null;
    if (!isResetAnimated) {
      timerId = setTimeout(() => {
        onScaleFavoriteIcon();
        setIsResetAnimated(true);
      }, 400);
    }
    return () => clearTimeout(timerId);
  }, [isResetAnimated]);

  return (
    <Box
      className='bg-third rounded-lg mx-4 mt-4'
      style={[
        styles.shadowX,
        {
          marginBottom: index === length - 1 ? 16 : 0,
        },
      ]}
    >
      <Box className='p-3 gap-1'>
        <Text className='text-base text-black font-nunito-700'>{name || ''}</Text>
        {description && (
          <Text className='text-xs text-gray-9 font-nunito-500' style={{ lineHeight: 17 }} numberOfLines={2}>
            {description}
          </Text>
        )}
      </Box>

      <Box className={`flex-row mx-3 mb-4 flex justify-between items-center`}>
        {types?.length > 0 && !types.includes(ProductType.NORMAL) && (
          <Box className='flex-row gap-1'>
            {types.map((type, index) => {
              const { Icon, color } = ProductTypeIconList[type];
              return <Icon key={index} width={19} height={19} color={color} />;
            })}
          </Box>
        )}
        <Animated.View style={[{ transform: [{ scale }] }]} className='w-fit ml-auto'>
          <Pressable onPress={handlePressProductFavorite} className='item-center'>
            {haveProductFavored.some((value) => value === index) ? (
              <Svg.HeartSolid width={21} height={21} color='#e8002a' />
            ) : (
              <Svg.HeartOutline width={21} height={21} color='#000000' />
            )}
          </Pressable>
        </Animated.View>
      </Box>

      <Box className='relative pt-[30%]'>
        <FastImage
          source={
            isErrorImage
              ? DefaultImage
              : {
                  uri: getFullImageUrl(image),
                }
          }
          onError={() => setIsErrorImage(true)}
          resizeMode={FastImage.resizeMode.contain}
          className='absolute w-full top-0 left-0 bottom-0 right-0 bg-zinc-200'
        />
      </Box>

      <Box className='mt-3 p-3 flex-row items-center justify-between'>
        <Box>
          <Text className='font-nunito-700 text-[13px] text-gray-10'>Giá chỉ từ</Text>
          <Text className='font-nunito-800 text-base text-secondary'>{formatCurrencyByLocale(price || 0)}</Text>
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
