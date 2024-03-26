import { memo, useMemo } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Box, Skeleton } from 'native-base';

import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { useFetchProducts } from '@/hooks';
import { navigate } from '@/utils';
import ProductItem from '../ProductItem';
import ProductItemSkeleton from '../ProductItemSkeleton';
import { ProductListProps } from './type';

const ProductList = ({ isLoading, name, _id, childrenCategory, isRefetching }: ProductListProps) => {
  const categoryId = useMemo(() => {
    if (childrenCategory?.category?.length > 0) {
      return childrenCategory.category?.[0]?._id;
    }
    return _id;
  }, [childrenCategory, _id]);

  const {
    data: productsData,
    isFetching: isFetchingProducts,
    refetch: refetchProducts,
  } = useFetchProducts({ pageSize: 4, categoryId, options: { enabled: Boolean(!isLoading && categoryId) } });

  const gotoCategoryDetail = () => navigate(PathName.PATH_SCREEN.CATEGORIES_SCREEN);

  return (
    <Box className='-mt-2'>
      {isFetchingProducts ? (
        <Box className='flex-row justify-between items-center mx-4'>
          <Skeleton className='h-4 rounded-lg w-2/5' />
          <Skeleton className='h-3 rounded-lg w-[80px]' />
        </Box>
      ) : (
        <Box className='flex-row items-center mx-3'>
          <Box className='flex-row items-center flex-1 mr-3'>
            <Svg.Box width={16} height={16} className='text-zinc-700' />
            <Text className='text-sm font-nunito-700 text-zinc-700 ml-2' numberOfLines={1}>
              {name}
            </Text>
          </Box>
          <TouchableOpacity className='flex-row items-center gap-1' onPress={gotoCategoryDetail}>
            <Text className='font-nunito-600 text-[13px] text-zinc-600'>Xem thêm</Text>
            <Svg.ArrowRight width={16} height={16} className='text-zinc-600' />
          </TouchableOpacity>
        </Box>
      )}
      {isFetchingProducts ? (
        <FlatList
          className='mt-2 ml-2'
          data={Array.from({ length: 4 }).fill({})}
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          renderItem={() => <ProductItemSkeleton />}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <FlatList
          className='mt-2 ml-2'
          data={productsData?.pages?.[0]?.data}
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductItem {...item} />}
          ItemSeparatorComponent={() => <Box className='-mx-3' />}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </Box>
  );
};

export default memo(ProductList);
