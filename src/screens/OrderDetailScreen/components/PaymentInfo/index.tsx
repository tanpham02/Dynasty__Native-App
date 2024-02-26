import { Box, Text } from 'native-base';
import RowData from '../RowData';
import { NumberUtils } from '@/utils';

const PaymentInfo = () => {
  return (
    <Box>
      <Text className='font-nunito-700 text-sm text-zinc-800'>Thông tin thanh toán</Text>
      <RowData label='Hình thức thanh toán' value='Tiền mặt' />
      <RowData label='Sản phẩm' value={NumberUtils.formatCurrencyByLocale(123542)} />
      <RowData label='Phí giao hàng' value={NumberUtils.formatCurrencyByLocale(30000)} />
      <RowData label='Giảm giá' value={NumberUtils.formatCurrencyByLocale(45400)} />
      <RowData
        label='Tổng thanh toán'
        value={<Text className='text-base text-primary'>{NumberUtils.formatCurrencyByLocale(524395)}</Text>}
      />
    </Box>
  );
};

export default PaymentInfo;
