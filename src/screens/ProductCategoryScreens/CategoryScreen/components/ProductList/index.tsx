import { Box, FlatList } from 'native-base';

import ProductItem from '../ProductItem';
import { productData } from './data';
import { heightScreen } from '@/utils';

const ProductList = () => {
  return (
    <Box className='absolute top-[55px] left-0 right-0 bottom-0 bg-white '>
      <FlatList
        scrollEventThrottle={16}
        //   pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={productData}
        renderItem={({ index, item }) => <ProductItem {...item} index={index} />}
      />
    </Box>
  );
};

export default ProductList;
