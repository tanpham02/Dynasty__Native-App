import { Box, Divider, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import styles from '@/styles';
import { ButtonPrimary } from '@/components';
import { VoucherItemProps } from './type';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants';

const VoucherItem = ({ onView }: VoucherItemProps) => {
  const handleApplyVoucher = () => {
    navigate(PATH_SCREEN.CATEGORIES_SCREEN);
    showMessage({
      message: 'Áp dụng voucher thành công!',
      type: 'success',
    });
  };

  return (
    <Box className='bg-white py-4 px-6 mx-4 rounded-lg min-h-[160px] my-1.5' style={styles.shadowX}>
      <Box className='flex-1'>
        <Box className='flex-row items-center'>
          <Text className='font-nunito-700 text-sm text-zinc-800 uppercase flex-1 mr-1' numberOfLines={1}>
            Dynasty Pizza Comeback offer Dynasty Pizza Comeback offer Dynasty Pizza Comeback offer Dynasty Pizza
            Comeback offer
          </Text>
          <Box className='border-2 border-dashed rounded-lg border-primary py-0.5 px-2'>
            <Text className='uppercase font-nunito-700 text-primary text-[10px]'>comback25</Text>
          </Box>
        </Box>
        <Text className='font-nunito-600 text-zinc-700 mt-1.5' numberOfLines={2}>
          Dynasty Pizza Comeback offer Dynasty Pizza Comeback offer Dynasty Pizza Comeback offer Dynasty Pizza Comeback
          offer
        </Text>
      </Box>
      <Divider className='bg-zinc-200 my-3' />
      <Box className='flex-row justify-between items-center'>
        <TouchableOpacity className='px-4 py-1 -ml-4' onPress={onView}>
          <Text className='font-nunito-700 text-primary'>Điều kiện áp dụng</Text>
        </TouchableOpacity>
        <ButtonPrimary
          title='Áp dụng'
          color='danger'
          onPress={handleApplyVoucher}
          containerClass='min-w-[100px] py-1.5'
        />
      </Box>
    </Box>
  );
};

export default VoucherItem;
