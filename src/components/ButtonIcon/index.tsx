import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { ButtonIconProps, colors } from './type';

const ButtonIcon = ({ color = 'default', onPress, icon }: ButtonIconProps) => {
  const Icon = Svg?.[icon];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${colors?.[color]} w-10 h-10 items-center justify-center rounded-lg`}
    >
      <Icon className='text-white' width={20} height={20} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
