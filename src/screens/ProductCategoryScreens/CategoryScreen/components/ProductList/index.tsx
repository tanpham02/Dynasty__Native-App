import { Box, FlatList, ScrollView } from 'native-base';

import { RefreshControl } from '@/components';
import { useFetchProducts } from '@/hooks';
import { ProductListSkeleton } from '@/screens/ProductCategoryScreens/CategoryScreen/components';
import LottieView from 'lottie-react-native';
import { useMemo } from 'react';
import ProductItem from '../ProductItem';
import { heightScreen } from '@/utils';

const ProductList = ({ categoryId }: { categoryId: string }) => {
  const { data: products, isFetching: isFetchingProducts, refetch: refetchProduct } = useFetchProducts({ categoryId });

  const productList = useMemo(() => products?.pages.flatMap((item) => item.data), [products]);

  return (
    <Box className='relative top-[55px] left-0 right-0 bottom-0 bg-white flex-1'>
      {isFetchingProducts ? (
        <ProductListSkeleton />
      ) : productList && productList.length > 0 ? (
        <FlatList
          scrollEventThrottle={16}
          keyExtractor={(_, index) => index.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={productList}
          renderItem={({ index, item }) => <ProductItem {...item} index={index} length={productList.length} />}
          refreshControl={<RefreshControl refreshing={isFetchingProducts} onRefresh={refetchProduct} />}
        />
      ) : (
        <Box className='flex-1 justify-center items-center'>
          <LottieView
            autoPlay
            loop
            style={{
              width: 200,
              height: 200,
            }}
            source={require('@/assets/lottie/Animation - 1718814045291.json')}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
