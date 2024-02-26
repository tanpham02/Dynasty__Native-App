import { Box, Text } from 'native-base';
import ProductItem from '../ProductItem';

const ProductOrdered = () => {
  return (
    <Box>
      <Text className='font-nunito-700 text-sm text-zinc-800'>Sản phẩm đã đặt</Text>
      <Box className='mt-2'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Box>
    </Box>
  );
};

export default ProductOrdered;
