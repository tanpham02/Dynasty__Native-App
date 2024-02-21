import { FlatList } from 'react-native';

import { heightScreen, widthScreen } from '@/utils';
import ProductItem from '../ProductItem';
import { productData } from './data';
import { Box } from 'native-base';

const ProductList = () => {
  return (
    <FlatList
      scrollEventThrottle={16}
      //   pagingEnabled
      keyExtractor={(_, index) => `${index}`}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: 'white',
        width: widthScreen,
      }}
      className="absolute top-[55px] left-0 right-0 bottom-0"
      data={productData}
      renderItem={({ index, item }) => (
        <Box className="p-4 flex-1">
          <ProductItem key={index} {...item} index={index} />
        </Box>
      )}
    />
  );
};

export default ProductList;
