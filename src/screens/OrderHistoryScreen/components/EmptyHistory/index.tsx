import { Box, Image, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { PATH_SCREEN } from '@/constants';
import { navigate } from '@/utils';
import NoOrderBeforeImage from '@/assets/images/order-history.png';

const EmptyHistory = () => {
  const gotoCategoryScreen = () => navigate(PATH_SCREEN.CATEGORIES_SCREEN);

  return (
    <Box className='flex-1 items-center p-10'>
      <Image source={NoOrderBeforeImage} className='w-48 h-48' alt='No Order Before Image' />
      <Text className='font-nunito-700 text-xl text-center'>Bạn chưa có đơn hàng nào</Text>
      <Text className='font-nunito-500 text-zinc-500 mt-2 text-sm text-center'>
        Hãy khám phá thử những món ăn yêu thích của bạn
      </Text>
      <TouchableOpacity
        onPress={gotoCategoryScreen}
        className='bg-secondary w-full items-center max-w-[300px] rounded-lg py-2 px-4 mt-6'
        style={styles.shadowSecondary}
      >
        <Text className='text-white text-base font-nunito-700'>Khám phá menu</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default EmptyHistory;
