import { heightScreen, widthScreen } from '@/utils';
import { Box, Image } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';

const ProductList = () => {
  return (
    <FlatList
      scrollEventThrottle={16}
      pagingEnabled
      keyExtractor={(_, index) => `${index}`}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      style={{
        height: heightScreen,
        flexGrow: 0,
        backgroundColor: 'white',
        width: widthScreen,
      }}
      className="absolute top-[55px] left-0 right-0 bottom-0"
      data={[
        ...new Array(10).fill({
          url: 'https://thepizzacompany.vn/images/thumbs/000/0002258_spaghetti-bolognese_300.png',
        }),
      ]}
      renderItem={({ index, item }) => (
        <Box key={index} className="flex-1 p-4">
          <Image src={item?.url} width="full" height={200} />
        </Box>
      )}
    />
  );
};

export default ProductList;
