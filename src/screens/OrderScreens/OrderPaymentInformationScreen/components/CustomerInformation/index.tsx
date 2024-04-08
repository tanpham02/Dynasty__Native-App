import { Text, VStack } from 'native-base';

import { RowCustomerInformation } from '..';

const CustomerInformation = () => {
  return (
    <>
      <Text className='text-gray-10 font-nunito-700 text-base'>Thông tin khách hàng</Text>
      <VStack space={1.5} className='mt-2.5 bg-primary/10 p-3 rounded-lg  '>
        <RowCustomerInformation label='Họ và tên:' value='Phạm Văn Tân' />
        <RowCustomerInformation label='Số điện thoại:' value='0372800762' />
        <RowCustomerInformation label='Địa chỉ:' value='123 Âu Cơ, Phường 14 Quận Tân Bình Thành phố Hồ Chí Minh' />
      </VStack>
    </>
  );
};

export default CustomerInformation;
