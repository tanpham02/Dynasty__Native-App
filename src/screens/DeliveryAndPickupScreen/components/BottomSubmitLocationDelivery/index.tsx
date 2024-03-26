import { Box, Skeleton, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { PathName } from '@/constants';
import { navigate } from '@/utils';
import { BottomSubmitLocationDeliveryProps } from './type';

const BottomSubmitLocationDelivery = ({ isFetching, useLocation, onSubmit }: BottomSubmitLocationDeliveryProps) => {
  const gotoAddressSavedScreen = () => navigate(PathName.PATH_SCREEN.ADDRESS_SAVED_SCREEN);

  return (
    <Box className='p-4 bg-white'>
      {isFetching ? (
        <Skeleton.Text h={12} className='overflow-hidden' />
      ) : (
        <Text numberOfLines={2} className='font-nunito-500 text-sm'>
          {useLocation || 'Chọn địa chỉ giao hàng của bạn.'}
        </Text>
      )}
      <TouchableOpacity className='flex-row gap-2 items-center' onPress={gotoAddressSavedScreen}>
        <Text className='text-secondary font-nunito-700 text-[13px]'>Sử dụng địa chỉ đã lưu</Text>
        <Svg.ArrowRight width={18} height={18} className='text-secondary' />
      </TouchableOpacity>
      <TouchableOpacity className='bg-primary py-2.5 px-4 rounded-lg mt-3' style={styles.shadowPrimary}>
        <Text className='text-center text-white font-nunito-500 text-sm' onPress={onSubmit}>
          Đồng ý
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default BottomSubmitLocationDelivery;
