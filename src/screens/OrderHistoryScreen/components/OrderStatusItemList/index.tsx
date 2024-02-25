import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { OrderStatusTagProps } from './type';
import styles from '@/styles';

const OrderStatusTag = ({ label, onPress, isActive }: OrderStatusTagProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`mx-1 my-2 py-1.5 px-4 rounded-2xl min-w-[70px] items-center ${isActive ? 'bg-primary' : 'bg-white'}`}
      style={isActive ? styles.shadowPrimary : styles.shadowX}
    >
      <Text className={`font-nunito-600 ${isActive ? 'text-white' : 'text-zinc-700'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OrderStatusTag;
