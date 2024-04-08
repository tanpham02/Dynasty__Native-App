import { Box, Text } from 'native-base';

import { RowCustomerInformationProps } from './type';

const RowCustomerInformation = ({ label, value }: RowCustomerInformationProps) => {
  return (
    <Box className='w-full flex-row justify-between'>
      <Text className='font-nunito-700 pr-2'>{label}</Text>
      <Text className='flex-1 font-nunito-700 text-right text-gray-11'>{value}</Text>
    </Box>
  );
};

export default RowCustomerInformation;
