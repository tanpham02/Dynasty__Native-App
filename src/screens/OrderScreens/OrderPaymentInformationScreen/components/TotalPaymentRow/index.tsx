import { Box, Text } from 'native-base';
import { formatCurrencyByLocale } from '@/utils';

const TotalPaymentRow = ({
  label,
  value,
  valueClassName,
  labelClassName,
}: {
  value: number | string;
  label: string;
  labelClassName?: string;
  valueClassName?: string;
}) => {
  const isNumber = typeof value === 'number';

  return (
    <Box className='flex flex-row justify-between items-center'>
      <Text className={`text-gray-11 text-[15px] font-nunito-600 ${labelClassName}`}>{label}</Text>
      <Text className={`text-gray-10 text-[15px] font-nunito-600 ${valueClassName}`}>
        {isNumber ? formatCurrencyByLocale(value) : '-'}
      </Text>
    </Box>
  );
};

export default TotalPaymentRow;
