import { Box, Image, Text } from 'native-base';

import { ButtonPrimaryAnimated, FooterBar } from '@/components';
import { formatCurrencyByLocale } from '@/utils/numberUtils';

import { FooterBarContentProps } from './type';

const FooterBarContent = ({ onOpenModalShippingMethod }: FooterBarContentProps) => {
  return (
    <FooterBar bodyClassName='flex items-center'>
      <Box className='flex flex-row items-center justify-center gap-3'>
        <Box className='w-12 h-12 bg-white rounded-lg border-2 border-white'>
          <Image
            source={{
              uri: 'https://thepizzacompany.vn/images/thumbs/000/0002223_ck-trio_300.png',
            }}
            width='100%'
            height='100%'
            resizeMode='cover'
            className='rounded-lg'
            alt='image'
          />
        </Box>
        <Box className='flex items-start justify-center'>
          <Text className='text-white text-sm font-nunito-700'>Tổng tiền</Text>
          <Text className='text-white text-lg font-nunito-800 '>{formatCurrencyByLocale(89000)}</Text>
        </Box>
      </Box>
      <ButtonPrimaryAnimated onPress={onOpenModalShippingMethod}>
        <Text className='text-secondary text-[11.5px] uppercase font-nunito-800 px-4'>Thanh toán</Text>
      </ButtonPrimaryAnimated>
    </FooterBar>
  );
};

export default FooterBarContent;
