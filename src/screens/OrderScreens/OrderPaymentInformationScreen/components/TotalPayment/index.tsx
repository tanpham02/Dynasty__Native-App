import { Box, Divider, VStack } from 'native-base';

import { TotalPaymentRow } from '..';

const TotalPayment = () => {
  return (
    <VStack space={3} className='mb-6'>
      <VStack space={2}>
        <TotalPaymentRow label='Tạm tính' value={50000} />
        <TotalPaymentRow label='Phí giao hàng' value='--' />
      </VStack>
      <Divider className='mt-2' />
      <Box className=''>
        <TotalPaymentRow
          label='Tổng cộng'
          labelClassName='font-nunito-700 text-base text-gray-10'
          valueClassName='font-nunito-700 text-[16.5px] text-secondary'
          value={500000}
        />
      </Box>
    </VStack>
  );
};

export default TotalPayment;
