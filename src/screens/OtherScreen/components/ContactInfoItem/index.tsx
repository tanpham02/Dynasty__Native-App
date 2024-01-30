import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ContactInfoItemProps } from './type';

const ContactInfoItem = ({ Icon, label, value, onPress }: ContactInfoItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon />
        <Text>{label}</Text>
      </View>
      <View>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactInfoItem;
