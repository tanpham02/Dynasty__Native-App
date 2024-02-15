import { Text, TouchableOpacity, View } from 'react-native';

import styles from '@/styles';
import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';

const Header = ({ navigation }) => {
  const goToNotificationScreen = () =>
    NavigationUtils.navigate(PathName.PATH_SCREEN.NOTIFICATION_SCREEN);

  const openSidebar = () => navigation.openDrawer();

  return (
    <View className="flex-row justify-between items-center gap-3 px-3">
      <View
        className="flex-row flex-1 items-center border border-zinc-200 rounded-lg bg-gray-5 my-2 py-1 px-4"
        style={styles.shadowX}
      >
        <TouchableOpacity onPress={openSidebar}>
          <Svg.Menu width={30} height={30} className="text-zinc-500 py-2 px-4" />
        </TouchableOpacity>
        <View className="mr-2 ml-4 flex-1 py-1">
          <Text className="text-zinc-800 font-nunito-700 uppercase text-xs">Chọn vị trí</Text>
          <Text className="text-zinc-500 font-nunito-500 text-xs">Nhận chính xác giá...</Text>
        </View>
        <View className="w-4 h-4 bg-secondary rounded item-center justify-center flex-row">
          <Svg.ArrowDown width={14} height={14} className="text-white" />
        </View>
      </View>
      <TouchableOpacity
        onPress={goToNotificationScreen}
        style={styles.shadowX}
        className="w-12 h-12 bg-gray-5 rounded-lg justify-center items-center m-1 border border-zinc-200"
      >
        <Svg.Notification width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
