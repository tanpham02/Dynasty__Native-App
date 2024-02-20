import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { OrderStatusTagProps } from './type';
import styles from '@/styles';

const OrderStatusTag = ({ label }: OrderStatusTagProps) => {
  return (
    <TouchableOpacity
      className="bg-white mx-1 py-1.5 px-2 rounded-2xl my-2 min-w-[60px] items-center"
      style={styles.shadowX}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default OrderStatusTag;
