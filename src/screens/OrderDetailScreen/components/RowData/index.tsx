import { Box, Text } from 'native-base';
import { RowDataProps } from './type';

const RowData = ({ label, value, containerClass }: RowDataProps) => {
  return (
    <Box className={`mt-1.5 flex-row justify-between ${containerClass}`}>
      <Text className='font-nunito-500 text-zinc-600 text-sm'>{label}: </Text>
      <Text className='font-nunito-700 text-zinc-800 text-sm text-right flex-1'>{value}</Text>
    </Box>
  );
};

export default RowData;
