import { Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { NotificationTabItemProps } from './type';

const NotificationTabItem = ({ isActive, onPress, title }: NotificationTabItemProps) => {
  return (
    <TouchableOpacity
      className={`py-2 px-4 flex-1 rounded-2xl mr-2 ${isActive ? 'bg-secondary' : 'bg-secondary/10'}`}
      onPress={onPress}
    >
      <Text className={`font-nunito-700 text-sm text-center ${isActive ? 'text-white' : 'text-black'}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NotificationTabItem;
