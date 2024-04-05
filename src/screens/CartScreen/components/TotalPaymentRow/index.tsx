import { Box, Text } from 'native-base';
import { formatCurrencyByLocale } from '@/utils';

const TotalPaymentRow = ({ label, price }: { price: number; label: string }) => {
  return (
    <Box className='flex flex-row justify-between items-center'>
      <Text className='text-gray-11 font-nunito-600'>{label}</Text>
      <Text className='text-gray-10 text-sm font-nunito-600'>{formatCurrencyByLocale(price)}</Text>
    </Box>
  );
};

export default TotalPaymentRow;
