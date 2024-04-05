import { Box } from 'native-base';

import { TotalPaymentRow } from '@/screens/CartScreen/components';
import styles from '@/styles';

const TotalPayment = () => {
  return (
    <Box style={styles.shadowX} className='bg-third p-3 rounded-lg'>
      <TotalPaymentRow label='Tạm tính' price={50000000} />
      <TotalPaymentRow label='Phí giao hàng' price={50000000} />
      <TotalPaymentRow label='Tổng tiền' price={50000000} />
    </Box>
  );
};

export default TotalPayment;
