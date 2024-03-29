import { Box } from 'native-base';
import React from 'react';

import { Svg } from '@/assets';
import { CartItemHiddenRightProps } from './type';

const CartItemHiddenRight = ({}: CartItemHiddenRightProps) => {
  return (
    <Box className='ml-auto h-full flex flex-col items-center justify-evenly mr-8 mt-2 py-2'>
      <Box className='bg-warning rounded-md flex justify-center p-2.5 items-center '>
        <Svg.Edit width={20} height={20} className='text-white' />
      </Box>
      <Box className='bg-secondary rounded-md flex justify-center items-center p-2.5'>
        <Svg.TrashBinLight width={21} height={21} className='text-white' />
      </Box>
    </Box>
  );
};

export default CartItemHiddenRight;
