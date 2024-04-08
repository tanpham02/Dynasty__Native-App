import { Box, Flex, Radio, Text } from 'native-base';
import React from 'react';
import { StoreNearestYourLocationItemProps } from './type';

import { Svg } from '@/assets';
import { OrderModel } from '@/models';
import { useFormContext } from 'react-hook-form';
import { Pressable } from 'react-native';

const StoreNearestYourLocationItem = ({ address, hotline, name, id }: StoreNearestYourLocationItemProps) => {
  const { setValue } = useFormContext<OrderModel>();

  const handleChangeOrderAtStore = () => setValue('orderAtStore', id);

  return (
    <Flex className='flex-row items-start mb-6 w-full justify-start'>
      <Radio value={id} colorScheme='success' size='sm' />
      <Pressable
        className='border border-gray-12 bg-gray-13 p-3.5 rounded-lg gap-y-1.5 flex-1 ml-2'
        onPress={handleChangeOrderAtStore}
      >
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
      </Pressable>
    </Flex>
  );
};

export default StoreNearestYourLocationItem;
