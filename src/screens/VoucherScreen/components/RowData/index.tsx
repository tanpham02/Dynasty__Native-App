import { Box, Text } from 'native-base';
import { RowDataProps } from './type';

const RowData = ({ label, value }: RowDataProps) => {
  return (
    <Box className='flex-row justify-between border-y border-zinc-200 py-2 px-4 mt-4'>
      <Text className='font-nunito-500 text-sm text-zinc-700'>{label}</Text>
      <Text className='font-nunito-500 text-sm text-zinc-700'>{value}</Text>
    </Box>
  );
};

export default RowData;
