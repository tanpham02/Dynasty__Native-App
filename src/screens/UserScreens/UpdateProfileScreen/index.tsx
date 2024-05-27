import { Box } from 'native-base';
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useUserForm } from './useUserForm';
import { MyAvatar, UpdateForm } from './components';
import { ButtonPrimary } from '@/components';
import { PrimaryLayout } from '@/layouts';

const UpdateProfileScreen = () => {
  const { user, fillUserData, formMethods, handleSubmitUserForm, updateUserAvatar } = useUserForm();

  useEffect(() => fillUserData(), [JSON.stringify(user)]);

  return (
    <PrimaryLayout titleScreen='Cập nhật tài khoản'>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Box className='px-3 space-y-4'>
          <MyAvatar user={user} onChangeAvatar={updateUserAvatar} />
          <Box className='bg-white rounded-lg p-4'>
            <FormProvider {...formMethods}>
              <UpdateForm />
            </FormProvider>
            <ButtonPrimary title='Lưu thay đổi' color='danger' containerClass='mt-4' onPress={handleSubmitUserForm} />
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </PrimaryLayout>
  );
};

export default UpdateProfileScreen;
