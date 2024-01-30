import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import RadioButtonSvg from 'src/components/svg/RadioButtonSvg';
import Text from 'src/components/customs/Text';
import { PaymentFlatListItemProps } from './types';

const PaymentFlatListItem = ({ title, image, checked }: PaymentFlatListItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <RadioButtonSvg checked={checked} width={'15'} height={'15'} />
      <Image source={image} style={styles.bannerImage} />
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentFlatListItem;
