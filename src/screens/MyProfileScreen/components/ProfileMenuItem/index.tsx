import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { ProfileMenuItemProps } from './type';

const ProfileMenuItem = ({ Icon, label, onPress }: ProfileMenuItemProps) => {
  return (
    <TouchableOpacity className='p-4 flex-row gap-4 items-center' onPress={onPress}>
      <Icon width={25} height={25} className='text-zinc-600' />
      <Text className='font-nunito-700 text-sm'>{label}</Text>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
