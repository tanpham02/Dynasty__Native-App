import moment from 'moment';
import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { DateUtils } from '@/utils';

const OrderHistoryItem = () => {
  return (
    <TouchableOpacity
      className="bg-white border border-zinc-100 mx-3 my-2 p-4 rounded-lg"
      style={styles.shadowX}
    >
      <Box className="flex-row justify-between items-start">
        <Box>
          <Text className="font-nunito-700 text-xs">#121445</Text>
          <Text className="font-nunito-500 text-zinc-500 text-xs mt-1">
            {moment().format(DateUtils.DATE_FORMAT_HHMMDDMMYYYY)}
          </Text>
        </Box>
        <Box className="border border-primary rounded-lg py-1 px-3">
          <Text className="text-primary font-nunito-500 text-xs">Mới</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default OrderHistoryItem;
