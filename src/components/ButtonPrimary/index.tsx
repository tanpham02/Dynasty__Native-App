import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { buttonColors, buttonShadows } from './data';
import { ButtonPrimaryProps } from './type';

const ButtonPrimary = ({
  title,
  onPress,
  containerClass,
  isDisable,
  color = 'primary',
  textClassName,
}: ButtonPrimaryProps) => {
  return (
    <TouchableOpacity
      disabled={isDisable}
      className={`rounded-lg py-2.5 items-center ${buttonColors?.[color]} ${isDisable && 'opacity-50'} ${containerClass}`}
      style={buttonShadows?.[color]}
      onPress={onPress}
    >
      <Text className={`font-nunito-700 text-white ${textClassName}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
