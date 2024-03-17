import { Box, Image, Text } from 'native-base';

import { ButtonPrimaryAnimated, FooterBar } from '@/components';
import { formatCurrencyByLocale } from '@/utils/numberUtils';

const FooterBarContent = () => {
  return (
    <FooterBar wrapperClassName='h-[90px] flex justify-center' bodyClassName='flex items-center'>
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
          />
        </Box>
        <Box className='flex items-start justify-center'>
          <Text className='text-white text-[17px] font-nunito-800 mt-1.5'>{formatCurrencyByLocale(89000)}</Text>
          <Text className='text-[10px] font-medium text-gray-3 opacity-80 -mt-1.5'>Giá đã bao gồm thuế</Text>
        </Box>
      </Box>
      <ButtonPrimaryAnimated>
        <Text className='text-secondary text-[11px] uppercase font-nunito-800'>Thanh toán</Text>
      </ButtonPrimaryAnimated>
    </FooterBar>
  );
};

export default FooterBarContent;
