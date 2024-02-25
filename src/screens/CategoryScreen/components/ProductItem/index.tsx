import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { ProductType } from '@/models/productModel';
import styles from '@/styles';
import { NavigationUtils } from '@/utils';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import { Box, Flex, Image, Pressable } from 'native-base';
import React, { useState } from 'react';
import { Animated, GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { ProductTypeIconList } from '../ProductList/data';
import { ProductItemProps } from './type';

const ProductItem = (props: ProductItemProps) => {
  const [haveProductFavored, setHaveProductFavorite] = useState<number[]>([]);

  const animation = new Animated.Value(0, { useNativeDriver: true });
  const inputRange = [0, 1];
  const outputRange = [1, 2];
  const scale = animation.interpolate({ inputRange, outputRange });

  const handleToggleProductFavorite = (index: number) => {
    const existed = haveProductFavored.includes(index);

    setHaveProductFavorite((prev) => {
      if (existed) {
        return haveProductFavored.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 2,
      bounciness: 0,
      speed: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      className="bg-third rounded-lg m-4"
      style={styles.shadowX}
      //   onPress={() => NavigationUtils.navigate(PathName.PATH_SCREEN.PRODUCT_DETAIL)}
    >
      <Box className="p-3 gap-1">
        <Text className="text-base text-black font-nunito-700">{props.name}</Text>
        {props?.description && (
          <Text
            className="text-xs text-gray-9 font-nunito-500"
            style={{ lineHeight: 17 }}
            numberOfLines={2}
          >
            {props.description}
          </Text>
        )}
      </Box>
      <Box
        className={`flex-row mx-3 mb-4 ${props.types.length > 0 && !props.types.includes(ProductType.NORMAL) ? 'justify-between' : 'justify-end'}`}
      >
        {props.types.length > 0 && !props.types.includes(ProductType.NORMAL) && (
          <Box className="flex-row gap-2">
            {props.types.map((type, index) => {
              const { Icon, color } = ProductTypeIconList[type];
              return <Icon key={index} width={21} height={21} color={color} />;
            })}
          </Box>
        )}
        <Animated.View style={[{ transform: [{ scale }] }]}>
          <Pressable
            onPress={(ev: GestureResponderEvent) => {
              ev.stopPropagation();
              handleToggleProductFavorite(props.index);
            }}
            onPressIn={onPressIn}
            opacity={1}
            className="items-center"
          >
            {haveProductFavored.includes(props.index) ? (
              <Svg.HeartSolid width={21} height={21} color="#e8002a" />
            ) : (
              <Svg.HeartOutline width={21} height={21} color="#000000" />
            )}
          </Pressable>
        </Animated.View>
      </Box>
      <Box className="relative pt-[40%]">
        <Image
          source={{
            uri: props.image,
          }}
          alt={props.name}
          width="full"
          resizeMode="contain"
          className="absolute top-0 left-0 bottom-0 right-0 bg-zinc-200"
        />
      </Box>
      <Box className="mt-3 p-3 flex-row items-center justify-between">
        <Text className="font-nunito-800 text-lg text-secondary">
          {formatCurrencyByLocale(props.price)}
        </Text>
        <TouchableOpacity
          className="bg-secondary rounded-lg p-2 flex-row items-center"
          onPress={() => NavigationUtils.navigate(PathName.PATH_SCREEN.PRODUCT_DETAIL)}
        >
          <Svg.Plus width={16} height={16} color="white" className="mr-1" />
          <Text className="font-nunito-700 text-sm text-white">Thêm giỏ hàng</Text>
        </TouchableOpacity>
      </Box>
    </Pressable>
  );
};

export default ProductItem;
