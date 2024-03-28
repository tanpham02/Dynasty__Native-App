import { Box, ScrollView } from 'native-base';
import { useEffect, useMemo } from 'react';
import { getDistricts, getProvinces, getWards } from 'vietnam-provinces';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux';
import { PathName } from '@/constants';
import { UserService } from '@/services';
import { PATTERN, navigate } from '@/utils';
import { UserAddressModel, UserAddressRequest, UserModel } from '@/models';
import { ButtonPrimary, FormInput, FormSelect, GlobalLoading, PrimaryLayout } from '@/components';

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
        customerId: user?._id,
        addressItem: data,
      };
      console.log('🚀 ~ onCreateOrUpdateDeliveryAddress ~ dataSubmit:', dataSubmit);

      formData.append('customerAddressInfo', JSON.stringify(dataSubmit));

      await UserService.createNewAddress(formData);
      showMessage({
        message: 'Thêm địa chỉ giao hàng thành công!',
        type: 'success',
      });
      navigate(PathName.PATH_SCREEN.ADDRESS_SAVED_SCREEN);
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
    <PrimaryLayout containerClass='bg-third' titleScreen='Thêm địa chỉ gia hàng'>
      <ScrollView className='flex-1 -mt-4'>
        <Box className='flex-1 p-4 my-4'>
          <FormProvider {...forms}>
            <FormInput<UserAddressModel>
              isRequired
              name='fullName'
              label='Họ và tên'
              className='mb-2'
              rules={{
                required: 'Vui lòng nhập tên người nhận hàng!',
              }}
            />
            <FormInput<UserAddressModel>
              isRequired
              name='phoneNumber'
              label='Số điện thoại'
              className='mb-2'
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
              wrapperClassName='mb-2'
              label='Tỉnh / Thành phố'
              options={cities?.map((city) => ({ label: city.name, value: city.code }))}
              rules={{
                required: 'Vui lòng chọn tỉnh, thành phố!',
              }}
            />
            <FormSelect<UserAddressModel>
              isRequired
              name='districtId'
              wrapperClassName='mb-2'
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
              wrapperClassName='mb-2'
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
          </FormProvider>
          <ButtonPrimary
            title='Lưu'
            color='danger'
            containerClass='mt-4'
            onPress={handleSubmit(onCreateOrUpdateDeliveryAddress)}
          />
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AddressUpdateScreen;
