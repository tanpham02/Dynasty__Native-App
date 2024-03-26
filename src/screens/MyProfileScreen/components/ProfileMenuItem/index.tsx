import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { ProfileMenuItemProps } from './type';
import { Svg } from '@/assets';

const ProfileMenuItem = ({ Icon, label, onPress }: ProfileMenuItemProps) => {
  return (
    <TouchableOpacity className='p-4 flex-row items-center bg-white mb-3 rounded-lg' onPress={onPress}>
      <Icon width={25} height={25} className='text-zinc-600' />
      <Text className='font-nunito-700 text-sm ml-4 text-zinc-600 flex-1'>{label}</Text>
      <Svg.AnglesRight width={18} height={18} className='text-zinc-400' />
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
