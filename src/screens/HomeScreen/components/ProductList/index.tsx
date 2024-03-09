import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { memo, useMemo } from 'react';

import { Svg } from '@/assets';
import ProductItem from '../ProductItem';
import { ProductListProps } from './type';
import { NavigationUtils } from '@/utils';
import { PathName } from '@/constants';
import { useFetchProducts } from '@/hooks';

const ProductList = ({ isLoading, name, _id, childrenCategory }: ProductListProps) => {
  const gotoCategoryDetail = () => NavigationUtils.navigate(PathName.PATH_SCREEN.CATEGORIES_SCREEN);

  const categoryId = useMemo(() => {
    if (childrenCategory?.category?.length > 0) {
      return childrenCategory.category?.[0]?._id;
    }
    return _id;
  }, [childrenCategory, _id]);

  const {
    data: productsData,
    isFetching: isFetchingProducts,
    isRefetching: isRefetchingProducts,
  } = useFetchProducts({ pageSize: 4, categoryId });

  return (
    <View className='mt-4'>
      <View className='flex-row items-center justify-between mx-3'>
        <Text className='text-sm font-nunito-700 text-zinc-700'>{name}</Text>
        <TouchableOpacity className='flex-row items-center gap-1' onPress={gotoCategoryDetail}>
          <Text className='font-nunito-600 text-[13px] text-zinc-600'>Xem thêm</Text>
          <Svg.ArrowRight width={16} height={16} className='text-zinc-600' />
        </TouchableOpacity>
      </View>
      <FlatList
        className='mt-4 ml-2'
        data={productsData?.pages?.[0]?.data}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductItem {...item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default memo(ProductList);
