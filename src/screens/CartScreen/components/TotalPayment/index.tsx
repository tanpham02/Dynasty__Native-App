import { Box, Text } from 'native-base';
import React from 'react';

import styles from '@/styles';
// NOTE: REMEMBER TO IMPORT ANYTHING AT HIGHEST LEVEL OF EACH FOLDER
import { formatCurrencyByLocale } from '@/utils/numberUtils';

const TotalPayment = () => {
  return (
    <Box style={styles.shadowX} className='bg-third p-3 rounded-lg'>
      {/* FIXME: YOUR BELOW CODE ARE REPEATED */}
      <Box className='flex flex-row justify-between items-center'>
        <Text className='text-gray-11 font-nunito-600'>Tạm tính</Text>
        <Text className='text-gray-10 text-sm font-nunito-600'>{formatCurrencyByLocale(50000000)}</Text>
      </Box>
      <Box className='flex flex-row justify-between items-center my-3'>
        <Text className='text-gray-11 font-nunito-600'>Phí giao hàng</Text>
        <Text className='text-gray-10 text-sm font-nunito-600'>{formatCurrencyByLocale(25000)}</Text>
      </Box>
      <Box className='flex flex-row justify-between items-center'>
        <Text className='text-gray-11 font-nunito-600'>Tổng tiền</Text>
        <Text className='text-secondary text-base font-nunito-700'>{formatCurrencyByLocale(7905000)}</Text>
      </Box>
    </Box>
  );
};

export default TotalPayment;
