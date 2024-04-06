import { Box, ScrollView, VStack } from 'native-base';
import { useEffect, useMemo } from 'react';
import { getDistricts, getProvinces, getWards } from 'vietnam-provinces';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux';
import { PATH_SCREEN } from '@/constants';
import { UserService } from '@/services';
import { PATTERN, navigate } from '@/utils';
import { UserAddressModel, UserAddressRequest, UserModel } from '@/models';
import { ButtonPrimary, GlobalLoading, PrimaryLayout, FormController } from '@/components';

const { FormInput, FormSelect } = FormController;

const AddressUpdateScreen = () => {
  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const forms = useForm<UserAddressModel>();

  const { handleSubmit, setValue, watch, reset } = forms;

  const currentDeliveryData = watch();

  useEffect(() => {
    setValue('wardId', undefined);
    setValue('districtId', undefined);
  }, [currentDeliveryData?.cityId]);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      reset({
        phoneNumber: user?.phoneNumber,
        fullName: user?.fullName,
      });
    }
  }, [JSON.stringify(user)]);

  const cities = useMemo(() => getProvinces(), []);

  const districts = useMemo(() => {
    if (currentDeliveryData?.cityId) return getDistricts(currentDeliveryData.cityId);

    return [];
  }, [currentDeliveryData?.cityId]);

  const wards = useMemo(() => {
    if (currentDeliveryData?.districtId) {
      return getWards(currentDeliveryData.districtId);
    }
    return [];
  }, [currentDeliveryData.districtId]);

  const onCreateOrUpdateDeliveryAddress = async (data: UserAddressModel) => {
    try {
      GlobalLoading.show();
      const formData = new FormData();

      const dataSubmit: UserAddressRequest = {
        customerId: '6610186d6861b729f3d2ffc5',
        addressItem: {
          ...data,
          cityId: Number(data.cityId),
          districtId: Number(data.districtId),
          wardId: Number(data.wardId),
        },
      };
      console.log('🚀 ~ onCreateOrUpdateDeliveryAddress ~ dataSubmit:', dataSubmit);

      formData.append('customerAddressInfo', JSON.stringify(dataSubmit));

      await UserService.createNewAddress(formData);
      showMessage({
        message: 'Thêm địa chỉ giao hàng thành công!',
        type: 'success',
      });
      navigate(PATH_SCREEN.ADDRESS_SAVED_SCREEN);
    } catch (err) {
      showMessage({
        message: 'Có lỗi xảy ra vui lòng thử lại sau!',
        type: 'danger',
      });
      console.log('🚀 ~ onCreateOrUpdateDeliveryAddress ~ err:', err);
    } finally {
      GlobalLoading.hide();
    }
  };

  return (
    <PrimaryLayout containerClass='bg-white' titleScreen='Thêm địa chỉ gia hàng'>
      <ScrollView className='flex-1 -mt-4'>
        <Box className='flex-1 p-4 my-4'>
          <FormProvider {...forms}>
            <VStack space={3}>
              <FormInput<UserAddressModel>
                isRequired
                name='fullName'
                label='Họ và tên'
                rules={{
                  required: 'Vui lòng nhập tên người nhận hàng!',
                }}
              />
              <FormInput<UserAddressModel>
                isRequired
                name='phoneNumber'
                label='Số điện thoại'
                rules={{
                  required: 'Vui lòng nhập số điện thoại người nhận hàng!',
                  pattern: {
                    value: PATTERN.PHONE_NUMBER,
                    message: 'Số điện thoại không hợp lệ!',
                  },
                }}
              />
              <FormSelect<UserAddressModel>
                isRequired
                name='cityId'
                label='Tỉnh / Thành phố'
                options={cities?.map((city) => ({ label: city.name, value: city.code }))}
                rules={{
                  required: 'Vui lòng chọn tỉnh, thành phố!',
                }}
              />
              <FormSelect<UserAddressModel>
                isRequired
                name='districtId'
                label='Quận / Huyện'
                isDisabled={!currentDeliveryData?.cityId}
                options={districts?.map((district) => ({ label: district.name, value: district.code }))}
                rules={{
                  required: 'Vui lòng chọn quận, huyện!',
                }}
              />
              <FormSelect<UserAddressModel>
                isRequired
                name='wardId'
                label='Phường / Xã / Thị Trấn'
                isDisabled={!currentDeliveryData?.districtId}
                options={wards?.map((ward) => ({ label: ward.name, value: ward.code }))}
                rules={{
                  required: 'Vui lòng chọn phường, xã, thị trấn!',
                }}
              />
              <FormInput<UserAddressModel>
                isRequired
                name='location'
                label='Số nhà, tên đường'
                rules={{
                  required: 'Vui lòng nhập số nhà tên đường!',
                }}
              />
              <ButtonPrimary title='Lưu' color='danger' onPress={handleSubmit(onCreateOrUpdateDeliveryAddress)} />
            </VStack>
          </FormProvider>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AddressUpdateScreen;
