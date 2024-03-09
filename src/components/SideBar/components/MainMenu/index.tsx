import { Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { mainMenu } from './data';

const MainMenu = () => {
  return (
    <View className='pl-3'>
      {mainMenu.map((sidebarMenu, index) => (
        <TouchableOpacity key={index} onPress={sidebarMenu?.onPress} className='flex-row items-center py-3'>
          <sidebarMenu.Icon width={30} height={30} className='text-zinc-600' />
          <Text className='font-nunito-700 ml-4'>{sidebarMenu.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MainMenu;
