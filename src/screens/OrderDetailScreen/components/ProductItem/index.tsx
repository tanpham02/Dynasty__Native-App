import { Box, Image, Text } from 'native-base';
import ProductImage from '@/assets/images/home-screen-images/product-test.png';
import { NumberUtils } from '@/utils';

const ProductItem = () => {
  return (
    <Box className="flex-row mt-1.5">
      <Image source={ProductImage} className="w-[65px] h-[65px] rounded-lg" />
      <Box className="flex-1 ml-2">
        <Text className="font-nunito-700 text-sm text-zinc-800" numberOfLines={2}>
          Pizza hải sản đào
        </Text>
        <Text className="font-nunito-500 text-[13px]">Nhỏ 6 inch - dày</Text>
        <Box className="flex-row items-center justify-between">
          <Text className="font-nunito-500 text-[13px] text-zinc-600">Số lượng: 2</Text>
          <Text className="font-nunito-400 text-[13px] text-zinc-600">x</Text>
          <Text className="font-nunito-700 text-[13px] text-zinc-800">
            {NumberUtils.formatCurrencyByLocale(194988)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
