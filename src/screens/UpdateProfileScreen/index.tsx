import { Box } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';

import { UserModel } from '@/models';
import { MyAvatar, UpdateForm } from './components';
import { AppDispatch, getUserInfo, updateUserInfo } from '@/redux';
import { ButtonPrimary, GlobalLoading, PrimaryLayout } from '@/components';

const UpdateProfileScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const forms = useForm<UserModel>();

  const { handleSubmit } = forms;

  const onUpdateUserInfo = async (data: UserModel) => {
    try {
      GlobalLoading.show();

      const formData = new FormData();

      formData.append('customerInfo', JSON.stringify(data));

      await dispatch(updateUserInfo(formData));
      await dispatch(getUserInfo());

      showMessage({
        message: 'Cập nhật thông tin thành công!',
        type: 'success',
      });
    } catch (err) {
      console.log('🚀 ~ updateUserInfo ~ err:', err);
      showMessage({
        message: 'Có lỗi xảy ra vui lòng thử lại sau!',
        type: 'danger',
      });
    } finally {
      GlobalLoading.hide();
    }
  };

  return (
    <PrimaryLayout titleScreen='Cập nhật tài khoản'>
      <Box className='px-3 space-y-4'>
        <MyAvatar />
        <Box className='bg-white rounded-lg p-4'>
          <FormProvider {...forms}>
            <UpdateForm />
          </FormProvider>
          <ButtonPrimary
            title='Lưu thay đổi'
            color='danger'
            containerClass='mt-4'
            onPress={handleSubmit(onUpdateUserInfo)}
          />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default UpdateProfileScreen;
