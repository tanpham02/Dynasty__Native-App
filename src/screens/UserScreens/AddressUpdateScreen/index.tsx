import { Box, ScrollView } from 'native-base';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { UserModel } from '@/models';
import { RootState } from '@/redux';
import { UserAddressForm } from './components';
import { useUserAddressForm } from './useUserAddressForm';
import { ButtonPrimary, PrimaryLayout } from '@/components';
import { getParams } from '@/utils';

const AddressUpdateScreen = () => {
  const { id: userAddressId } = getParams() || {};

  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const {
    formMethods,
    fillUserData,
    clearSelectedAddress,
    currentUserAddressData,
    handleSubmitUserAddressForm,
    handleFillCreatedAddressData,
  } = useUserAddressForm();

  useEffect(() => clearSelectedAddress(), [currentUserAddressData?.cityId]);

  useEffect(() => fillUserData(user), [JSON.stringify(user)]);

  //   useEffect(() => {
  //     handleFillCreatedAddressData(userAddressId);
  //   }, [userAddressId]);

  return (
    <PrimaryLayout containerClass='bg-white' titleScreen='Thêm địa chỉ gia hàng'>
      <ScrollView className='flex-1 -mt-4' showsVerticalScrollIndicator={false}>
        <Box className='flex-1 p-4 my-4'>
          <UserAddressForm formMethods={formMethods} currentUserAddressData={currentUserAddressData} />
          <ButtonPrimary title='Lưu' color='danger' onPress={handleSubmitUserAddressForm} />
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AddressUpdateScreen;
