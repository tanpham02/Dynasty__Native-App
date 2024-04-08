import { Box, Image, Text, VStack } from 'native-base';
import { OrderProductProps } from './type';
import { formatCurrencyByLocale } from '@/utils';

const OrderProduct = ({ extendVariantName, image, name, price, quantity }: OrderProductProps) => {
  return (
    <Box className='flex-row items-center justify-start '>
      <Image source={image} className='w-12 h-12 rounded-lg mr-2.5' />
      <Box className='flex-1'>
        <Text className='font-nunito-600 text-sm pr-4' numberOfLines={2}>
          {name}
        </Text>
        <Text className='font-nunito-600 text-[12.5px] text-gray-9'>{extendVariantName}</Text>
      </Box>
      <VStack space={2} className='flex-col items-end justify-center'>
        <Text className='font-nunito-600 text-xs text-gray-9'>x {quantity}</Text>
        <Text className='font-nunito-600 text-sm text-gray-10'>{formatCurrencyByLocale(price)}</Text>
      </VStack>
    </Box>
  );
};

export default OrderProduct;
