import { PathName } from '@/constants';
import { navigate } from '@/utils';
import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const SignOutButton = () => {
  const handleSignOut = () => {
    navigate(PathName.PATH_SCREEN.SIGN_IN_SCREEN);
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
