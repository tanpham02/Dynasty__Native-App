import { Box, Flex, Image, Pressable } from 'native-base';
import React, { useState } from 'react';
import { ProductItemProps } from './type';
import { ProductType } from '@/models/productModel';
import styles from '@/styles';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { Svg } from '@/assets';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import { ProductTypeIconList } from '../ProductList/data';

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
      toValue: 1,
      useNativeDriver: true,
      speed: 0.5,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      speed: 0.5,
    }).start();
  };

  return (
    <Box className="m-4 min-h-[200px] bg-third rounded-lg" style={styles.shadowX}>
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
      <Flex className="flex-row justify-between px-3 pb-4">
        {props.types.length > 0 && !props.types.includes(ProductType.NORMAL) && (
          <Flex className="flex-row gap-2 ">
            {props.types.map((type, index) => {
              const { Icon, color } = ProductTypeIconList[type];
              return <Icon key={index} width={21} height={21} color={color} />;
            })}
          </Flex>
        )}
        <Animated.View style={[{ transform: [{ scale }] }]}>
          <Pressable
            onPress={() => handleToggleProductFavorite(props.index)}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            opacity={1}
            className="flex-1 items-end"
          >
            {haveProductFavored.includes(props.index) ? (
              <Svg.HeartSolid width={21} height={21} color="#e8002a" />
            ) : (
              <Svg.HeartOutline width={21} height={21} />
            )}
          </Pressable>
        </Animated.View>
      </Flex>
      <Box className="relative pt-[40%]">
        <Image
          source={{
            uri: props.image,
          }}
          alt={props.name}
          width="full"
          //   height={1850}
          resizeMode="contain"
          className="absolute top-0 left-0 bottom-0 right-0 bg-zinc-100"
        />
      </Box>
      <Box className="mt-3 p-3 flex-row items-center justify-between">
        <Text className="font-nunito-800 text-lg text-secondary">
          {formatCurrencyByLocale(props.price)}
        </Text>
        <TouchableOpacity className="bg-secondary rounded-lg p-2 flex-row items-center">
          <Svg.Plus width={14} height={14} color="white" className="mr-.5" />
          <Text className="font-nunito-700 text-sm text-white">Thêm giỏ hàng</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default ProductItem;
