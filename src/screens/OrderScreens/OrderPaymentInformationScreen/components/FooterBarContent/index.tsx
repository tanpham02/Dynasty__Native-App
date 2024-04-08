import { Box } from 'native-base';

import { ButtonPrimary, FooterBar } from '@/components';
import { FooterBarContentProps } from './type';

const FooterBarContent = ({ submitHandler }: FooterBarContentProps) => {
  return (
    <FooterBar wrapperClassName='justify-center items-center p-0 mt-4'>
      <Box className='bg-bg-white rounded-lg flex flex-row justify-between p-3'>
        <ButtonPrimary
          title='Tiến hành thanh toán'
          onPress={submitHandler}
          containerClass='w-full py-[14px]'
          color='danger'
        />
      </Box>
    </FooterBar>
  );
};

export default FooterBarContent;
