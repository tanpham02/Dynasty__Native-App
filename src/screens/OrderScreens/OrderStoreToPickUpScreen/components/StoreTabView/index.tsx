import { Pressable } from 'react-native';
import { StoreTabViewProps } from './type';
import { Text } from 'native-base';

const StoreTabView = ({ isActive, title, onPress }: StoreTabViewProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 rounded-lg items-center p-2.5 bg-white ${isActive ? 'bg-primary' : 'border border-gray-12'}`}
    >
      <Text className={`text-sm font-nunito-700 ${isActive ? 'text-white' : 'text-primary'}`}>{title}</Text>
    </Pressable>
  );
};

export default StoreTabView;
