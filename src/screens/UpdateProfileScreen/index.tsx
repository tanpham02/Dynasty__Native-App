import { useEffect } from 'react';
import { Box } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { UserModel } from '@/models';
import { MyAvatar, UpdateForm } from './components';
import { ButtonPrimary, GlobalLoading, PrimaryLayout } from '@/components';
import { AppDispatch, RootState, getUserInfo, updateUserInfo } from '@/redux';

const UpdateProfileScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const forms = useForm<UserModel>();

  const { handleSubmit, reset } = forms;

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      reset({ ...user });
    }
  }, [JSON.stringify(user)]);

  const onUpdateUserInfo = async (data: UserModel) => {
    console.log('🚀 ~ onUpdateUserInfo ~ data:', data);
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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
      </KeyboardAwareScrollView>
    </PrimaryLayout>
  );
};

export default UpdateProfileScreen;
