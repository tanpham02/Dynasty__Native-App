import { Text } from 'native-base';
import { TouchableOpacity, View } from 'react-native';

import { subMenu } from './data';

const SubMenu = () => {
  return (
    <View className='pl-3'>
      {subMenu.map((subSidebarMenu, index) => (
        <TouchableOpacity key={index} className='py-3' onPress={subSidebarMenu?.onPress}>
          <Text className='font-nunito-700'>{subSidebarMenu.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SubMenu;
