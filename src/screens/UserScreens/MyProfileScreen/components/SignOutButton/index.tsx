import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';

import { navigate } from '@/utils';
import { tokenManager } from 'App';
import { AppDispatch } from '@/redux';
import { PATH_SCREEN } from '@/constants';

const SignOutButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = async () => {
    dispatch({ type: 'RESET_STATE' });
    await tokenManager.setAccessToken('');
    navigate(PATH_SCREEN.SIGN_IN_SCREEN);
    showMessage({
      message: 'Đăng xuất thành công!',
      type: 'success',
    });
  };

  return (
    <TouchableOpacity className='py-2 mx-auto w-[150px]' onPress={handleSignOut}>
      <Text className='text-sm text-center text-secondary font-nunito-700'>Đăng xuất</Text>
    </TouchableOpacity>
  );
};

export default SignOutButton;
