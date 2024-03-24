import { Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';

const UserSignInButton = () => {
  const goToSignInScreen = () => NavigationUtils.navigate(PathName.PATH_SCREEN.SIGN_IN_SCREEN);

  const goToMyProfileScreen = () => NavigationUtils.navigate(PathName.PATH_SCREEN.MY_PROFILE_SCREEN);

  return (
    <TouchableOpacity className='flex-row items-center mb-2' onPress={goToMyProfileScreen}>
      <View
        style={styles.shadowSecondary}
        className='bg-secondary w-10 h-10 rounded-lg items-center justify-center m-2'
      >
        <Svg.UserPlus width={25} height={25} className='text-white' />
      </View>
      <View className='ml-1'>
        <Text className='text-[13px] font-nunito-500'>Đăng nhập ngay để nhận</Text>
        <Text className='text-[13px] font-nunito-500'>Ưu đãi và mã giảm giá</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserSignInButton;
