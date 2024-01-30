import { View } from 'react-native';
import { Text } from 'src/components';
import styles from './styles';
import { OrderSectionHeaderProps } from './types';

const OrderSectionHeader = (props: OrderSectionHeaderProps) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props?.title || ''}</Text>
    </View>
  );
};

export default OrderSectionHeader;
