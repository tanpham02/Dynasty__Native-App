import { ButtonPrimary, PrimaryLayout } from '@/components';
import styles from '@/styles';
import { Box, Divider, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

const Voucher = () => {
  return (
    <PrimaryLayout titleScreen='Voucher của bạn'>
      <Box className='bg-white p-4 mx-4 rounded-lg min-h-[150px]' style={styles.shadowX}>
        <Box className='flex-1'>
          <Text className='font-nunito-700 text-sm text-zinc-800 uppercase' numberOfLines={1}>
            Dynasty Pizza Comeback offer
          </Text>
          <Text className='font-nunito-500 text-zinc-600 mt-1' numberOfLines={2}>
            Dynasty Pizza Comeback offer
          </Text>
          <Box className='border-2 border-dashed rounded-lg border-primary py-1 px-2 absolute top-1 right-1'>
            <Text className='uppercase font-nunito-700 text-primary'>comback25</Text>
          </Box>
        </Box>
        <Divider className='bg-zinc-100 my-2' />
        <Box className='flex-row justify-between items-center'>
          <TouchableOpacity>
            <Text>Điều kiện áp dụng</Text>
          </TouchableOpacity>
          <ButtonPrimary title='Áp dụng' color='danger' containerClass='min-w-[100px] py-1.5' />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default Voucher;
