import { Box } from 'native-base';
import React from 'react';

import { Svg } from '@/assets';
import { CartItemHiddenRightProps } from './type';

const CartItemHiddenRight = ({}: CartItemHiddenRightProps) => {
  return (
    <Box className='ml-auto w-[70px] mt-5 mb-4 -mr-[3px] flex justify-between'>
      <Box className='bg-warning w-4/5 h-[45%] rounded-md flex justify-center items-center mt-1'>
        <Svg.Edit width={18} height={18} className='text-white' />
      </Box>
      <Box className='bg-secondary w-4/5 h-[45%] rounded-md flex justify-center items-center'>
        <Svg.TrashBinLight width={22} height={22} className='text-white' />
      </Box>
    </Box>
  );
};

export default CartItemHiddenRight;
