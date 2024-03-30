import { FormSelect } from '@/components';
import FormRadio from '@/components/Form/Radio';
import { UserModel } from '@/models';
import { widthScreen } from '@/utils';
import { Box, Flex, HStack, Radio, Text, VStack } from 'native-base';
import React from 'react';

const OrderReceiveTime = () => {
  return (
    <>
      <Box>
        <Text className='text-gray-10 font-nunito-700 text-base'>Chọn thời gian nhận hàng</Text>
        <Box className='mt-2'>
          <FormRadio<UserModel>
            fieldName='updatedAt'
            name='avatar'
            defaultValue='1'
            wrapperClassName='mb-3'
            rules={{
              required: 'Tỉnh/Thành bắt buộc chọn',
            }}
          >
            <VStack space={3} className='pr-4'>
              <Radio colorScheme='success' value='1' size='sm'>
                <Text className='font-nunito-600'>Ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)</Text>
              </Radio>
              <Radio colorScheme='success' value='2' size='sm'>
                <Text className='font-nunito-600'>Chọn thời gian</Text>
              </Radio>
            </VStack>
          </FormRadio>
        </Box>
      </Box>

      <HStack space={2} className='flex-row items-center w-full'>
        <Box className='flex-1'>
          <FormSelect<UserModel>
            name='_id'
            defaultValue='1'
            borderColor='#00b041'
            options={[
              {
                label: 'hello 1',
                value: '1',
              },
              {
                label: 'hello 2',
                value: '2',
              },
            ]}
          />
        </Box>
        <Box className='flex-1'>
          <FormSelect<UserModel>
            name='createdAt'
            defaultValue='3'
            className='flex-1'
            borderColor='#00b041'
            options={[
              {
                label: 'hello 3',
                value: '3',
              },
              {
                label: 'hello 4',
                value: '4',
              },
            ]}
          />
        </Box>
      </HStack>
    </>
  );
};

export default OrderReceiveTime;
