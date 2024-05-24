import { Box, Image, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { getFullImageUrl } from '@/utils';
import { useUserAuthentication } from './useUserAuthentication';

const UserSignInButton = () => {
  const { isAuthenticated, userLogin, loginOrViewProfile } = useUserAuthentication();
  console.log('🚀 ~ UserSignInButton ~ userLogin:', userLogin);

  return (
    <TouchableOpacity className='flex-row items-center justify-between' onPress={loginOrViewProfile}>
      <Box className='flex-row items-center mb-2'>
        <Box className='bg-secondary w-10 h-10 rounded-full items-center justify-center m-2 overflow-hidden'>
          {isAuthenticated ? (
            <>
              {userLogin?.image ? (
                <Image source={{ uri: getFullImageUrl(userLogin.image) }} className='w-full h-full' alt='Avatar' />
              ) : (
                <Text className='text-white text-base font-nunito-700'>{userLogin?.fullName?.charAt(0)}</Text>
              )}
            </>
          ) : (
            <Svg.UserPlus width={25} height={25} className='text-white' />
          )}
        </Box>
        <View className='ml-1'>
          {isAuthenticated ? (
            <>
              <Text className='text-base font-nunito-700'>{userLogin?.fullName || ''}</Text>
              {(userLogin?.phoneNumber || userLogin?.email) && (
                <Text className='text-sm font-nunito-500'>{userLogin?.phoneNumber || userLogin?.email}</Text>
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
