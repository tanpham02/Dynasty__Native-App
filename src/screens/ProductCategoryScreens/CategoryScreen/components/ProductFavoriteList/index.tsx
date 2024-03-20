import { Box, FlatList, Image, Text } from 'native-base';

import EmptyProductFavorite from '@/assets/images/favourite-pizza.png';
import { ButtonPrimary } from '@/components';

const ProductList = () => {
  return (
    <Box className='absolute top-[55px] left-0 right-0 bottom-0 bg-white'>
      {/* <FlatList
        scrollEventThrottle={16}
        //   pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={productData}
        renderItem={({ index, item }) => <ProductItem {...item} index={index} />}
      /> */}
      <Box className='items-center justify-center'>
        <Image source={EmptyProductFavorite} className='w-48 h-48 mt-12 mb-6' resizeMode='contain' />
        <Text className='text-center mx-10 text-zinc-800 text-xl font-nunito-700'>
          Chúng tôi biết bạn yêu Pizza. Tại sao bạn không thử thêm nó vào danh sách yêu thích ❤️ dành riêng cho bạn
        </Text>
        <ButtonPrimary title='Khám phá menu' color='danger' containerClass='w-3/5 py-3 mt-4' />
      </Box>
    </Box>
  );
};

export default ProductList;
