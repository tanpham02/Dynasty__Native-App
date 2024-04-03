import { Box, HStack } from 'native-base';

import { FormController } from '@/components';
import { OrderModel } from '@/models';

const SelectReceiveTime = () => {
  const { FormSelect } = FormController;

  return (
    <HStack space={2} className='flex-row items-center w-full'>
      <Box className='flex-1'>
        <FormSelect<OrderModel>
          name='shipFee'
          defaultValue='1'
          borderColor='#00b041'
          options={[
            {
              label: '9:00',
              value: '1',
            },
            {
              label: '9:15',
              value: '2',
            },
            {
              label: '9:30',
              value: '3',
            },
            {
              label: '9:45',
              value: '4',
            },
            {
              label: '10:00',
              value: '5',
            },
            {
              label: '10:15',
              value: '6',
            },
            {
              label: '10:30',
              value: '7',
            },
            {
              label: '10:45',
              value: '8',
            },
          ]}
        />
      </Box>
      <Box className='flex-1'>
        <FormSelect<OrderModel>
          name='note'
          defaultValue='3'
          className='flex-1'
          borderColor='#00b041'
          options={[
            {
              label: '01/04/2024',
              value: '3',
            },
            {
              label: '02/04/2024',
              value: '4',
            },
          ]}
        />
      </Box>
    </HStack>
  );
};

export default SelectReceiveTime;
