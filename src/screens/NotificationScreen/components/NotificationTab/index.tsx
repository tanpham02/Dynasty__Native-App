import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { NotificationTabProps } from './type';

const NotificationTab = ({ activeTab, onChangeTab }: NotificationTabProps) => {
  return (
    <Box className='flex-row mx-4 mb-2'>
      <TouchableOpacity className='bg-secondary py-2 px-4 flex-1 rounded-2xl mr-2'>
        <Text className='text-white font-nunito-700 text-sm text-center'>Tin khuyến mãi</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-secondary/10 py-2 px-4 flex-1 rounded-2xl ml-2'>
        <Text className='text-black font-nunito-700 text-sm text-center'>Tin của bạn</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationTab;
