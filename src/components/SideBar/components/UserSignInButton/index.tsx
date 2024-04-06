import { Box, Image, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { Svg } from '@/assets';
import { PATH_SCREEN } from '@/constants';
import { UserModel } from '@/models';
import { RootState } from '@/redux';
import styles from '@/styles';
import { getFullImageUrl, navigate } from '@/utils';
import { tokenManager } from 'App';

const UserSignInButton = () => {
  const isAuthenticated = tokenManager.getAccessToken();

  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const goToSignInScreen = () => navigate(PATH_SCREEN.SIGN_IN_SCREEN);

  const goToMyProfileScreen = () => navigate(PATH_SCREEN.MY_PROFILE_SCREEN);

  const handlePressButton = () => {
    if (isAuthenticated) {
      goToMyProfileScreen();
    } else {
      goToSignInScreen();
    }
  };

  return (
    <TouchableOpacity className='flex-row items-center justify-between' onPress={handlePressButton}>
      <Box className='flex-row items-center mb-2'>
        <Box
          style={styles.shadowSecondary}
          className='bg-secondary w-10 h-10 rounded-full items-center justify-center m-2 overflow-hidden'
        >
          {isAuthenticated ? (
            <>
              {user?.avatar ? (
                <Image source={{ uri: getFullImageUrl(user?.avatar) }} className='w-full h-full' alt='Avatar' />
              ) : (
                <Text className='text-white text-base font-nunito-700'>{user?.fullName?.charAt(0)}</Text>
              )}
            </>
          ) : (
            <Svg.UserPlus width={25} height={25} className='text-white' />
          )}
        </Box>
        <View className='ml-1'>
          {isAuthenticated ? (
            <>
              <Text className='text-base font-nunito-700'>{user?.fullName || ''}</Text>
              {(user?.phoneNumber || user?.email) && (
                <Text className='text-sm font-nunito-500'>{user?.phoneNumber || user?.email}</Text>
              )}
            </>
          ) : (
            <>
              <Text className='text-[13px] font-nunito-500'>Đăng nhập ngay để nhận</Text>
              <Text className='text-[13px] font-nunito-500'>Ưu đãi và mã giảm giá</Text>
            </>
          )}
        </View>
      </Box>
      {isAuthenticated ? (
        <Box className='flex-row gap-x-4'>
          <Svg.Setting width={22} height={22} className='text-zinc-700' />
          <Svg.Notification width={22} height={22} className='text-zinc-700' />
        </Box>
      ) : (
        <Box className='bg-secondary py-1.5 px-3 rounded-xl'>
          <Text className='text-white font-nunito-500 text-[10px] uppercase'>Đăng nhập</Text>
        </Box>
      )}
    </TouchableOpacity>
  );
};

export default UserSignInButton;
