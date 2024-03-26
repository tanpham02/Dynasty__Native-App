import { Box, Text, View } from 'native-base';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from '@/styles';
import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { navigate } from '@/utils';
import { tokenManager } from 'App';
import { RootState } from '@/redux';
import { UserModel } from '@/models';

const UserSignInButton = () => {
  const isAuthenticated = tokenManager.getAccessToken();

  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const goToSignInScreen = () => navigate(PathName.PATH_SCREEN.SIGN_IN_SCREEN);

  const goToMyProfileScreen = () => navigate(PathName.PATH_SCREEN.MY_PROFILE_SCREEN);

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
          className='bg-secondary w-10 h-10 rounded-lg items-center justify-center m-2'
        >
          <Svg.UserPlus width={25} height={25} className='text-white' />
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
      {!isAuthenticated && (
        <Box className='bg-secondary py-1.5 px-3 rounded-xl'>
          <Text className='text-white font-nunito-500 text-[10px] uppercase'>Đăng nhập</Text>
        </Box>
      )}
    </TouchableOpacity>
  );
};

export default UserSignInButton;
