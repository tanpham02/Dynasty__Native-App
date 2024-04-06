import { Image, Text } from 'native-base';

import NoSavedAddressImage from '@/assets/images/address-saved.png';

const AddressEmptyList = () => {
  return (
    <>
      <Image source={NoSavedAddressImage} className='w-48 h-48' alt='No Saved Address Image' />
      <Text className='font-nunito-700 text-black text-lg mt-4'>Chưa có địa chỉ nào được lưu</Text>
      <Text className='font-nunito-700 text-zinc-400 mt-2'>Thêm địa chỉ để chọn khi đặt hàng</Text>
    </>
  );
};

export default AddressEmptyList;
