import { Box, Divider, Flex, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import styles from '@/styles';
import { RootState } from '@/redux';
import { UserModel } from '@/models';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';

const MyProfileCard = () => {
  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  const gotoUpdateProfileScreen = () => NavigationUtils.navigate(PathName.PATH_SCREEN.UPDATE_PROFILE_SCREEN);

  return (
    <Box className='rounded-lg p-4 bg-white my-4' style={styles.shadowX}>
      <Flex className='flex-row'>
        <Box className='w-10 h-10 bg-secondary items-center justify-center rounded-lg'>
          <Text className='font-nunito-700 text-white uppercase'>V</Text>
        </Box>
        <Box className='flex-1 ml-4'>
          <Text className='font-nunito-700 text-sm'>{user?.fullName}</Text>
          <Text className='font-nunito-500 text-[13px]'>{user?.email}</Text>
        </Box>
      </Flex>
      <Divider className='mt-3' />
      <TouchableOpacity className='items-center py-3 -mb-3' onPress={gotoUpdateProfileScreen}>
        <Text className='text-orange-400 uppercase font-nunito-700 text-xs'>Cập nhật tài khoản</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default MyProfileCard;
