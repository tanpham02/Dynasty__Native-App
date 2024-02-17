import { FlatList } from 'react-native';

import { heightScreen, widthScreen } from '@/utils';
import ProductItem from '../ProductItem';
import { productData } from './data';

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
      className="absolute top-[55px] left-0 right-0 bottom-0 flex flex-1"
      data={productData}
      renderItem={({ index, item }) => <ProductItem key={index} {...item} index={index}/>}
    />
  );
};

export default ProductList;
