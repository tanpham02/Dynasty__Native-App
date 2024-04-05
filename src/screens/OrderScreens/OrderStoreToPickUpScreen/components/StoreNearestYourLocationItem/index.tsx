import React from 'react';
import { StoreNearestYourLocationItemProps } from './type';
import { Box, Flex, HStack, Radio, Text } from 'native-base';

import { FormController } from '@/components';
import { OrderModel } from '@/models';
import { Svg } from '@/assets';

const { FormRadio } = FormController;

const StoreNearestYourLocationItem = ({ address, hotline, name }: StoreNearestYourLocationItemProps) => {
  return (
    <Box className='mt-4 min-h-[70px]'>
      <FormRadio<OrderModel> name='orderAtStore' fieldName='orderAtStore'>
        <HStack space={2} className='flex-row items-start'>
          <Radio value={name} colorScheme='success' size='sm'></Radio>
          <Box className='border border-gray-12 bg-gray-13 p-3.5 rounded-lg flex-1 gap-y-1.5'>
            <Text className='text-primary font-nunito-800 text-sm uppercase'>{name}</Text>
            <Box className='flex-row items-start gap-x-2'>
              <Svg.LocationSolid width={16} height={16} className='color-gray-14 mt-[3px]' />
              <Text className='text-gray-9 font-nunito-700 text-[13px] flex-1'>{address}</Text>
            </Box>
            <Box className='flex-row items-start gap-x-2'>
              <Svg.PhoneCall width={16} height={16} className='color-gray-14 mt-[3px]' />
              <Text className='text-gray-9 font-nunito-700 text-[13px] flex-1'>
                Hotline:
                <Text className='text-[13px]'> {hotline}</Text>
              </Text>
            </Box>
          </Box>
        </HStack>
      </FormRadio>
    </Box>
  );
};

export default StoreNearestYourLocationItem;
