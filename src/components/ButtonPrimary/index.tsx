import styles from '@/styles';
import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { ButtonPrimaryProps } from './type';

const ButtonPrimary = ({ title, onPress, containerClass }: ButtonPrimaryProps) => {
  return (
    <TouchableOpacity
      className={`bg-primary rounded-lg py-2.5 items-center ${containerClass}`}
      style={styles.shadowPrimary}
      onPress={onPress}
    >
      <Text className='font-nunito-700 text-white'>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
