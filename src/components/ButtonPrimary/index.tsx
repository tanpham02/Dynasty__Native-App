import styles from '@/styles';
import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { ButtonPrimaryProps } from './type';

const ButtonPrimary = ({ title, onPress, containerClass, isDisable }: ButtonPrimaryProps) => {
  return (
    <TouchableOpacity
      disabled={isDisable}
      className={`bg-primary rounded-lg py-2.5 items-center ${isDisable && 'opacity-50'} ${containerClass}`}
      style={styles.shadowPrimary}
      onPress={onPress}
    >
      <Text className='font-nunito-700 text-white'>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
