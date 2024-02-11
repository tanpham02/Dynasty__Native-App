import { Svg } from '@/assets';
import { PATH_SCREEN } from '@/constants/pathName';
import styles from '@/styles';
import { navigate } from '@/utils/navigationUtil';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScrollView from '../customs/ScrollView';

const sidebarMenus = [
  {
    label: 'Khám phá menu',
    Icon: Svg.Box,
  },
  {
    label: 'Mã giảm giá',
    Icon: Svg.Offer,
  },
  {
    label: 'Lịch sử đơn hàng',
    Icon: Svg.OrderHistory,
  },
];

const subSidebarMenus = [
  {
    label: 'Đánh giá',
    onPress: () => navigate(PATH_SCREEN.FEEDBACK_SCREEN),
  },
  {
    label: 'Câu hỏi thường gặp',
  },
  {
    label: 'Điều khoản & điều kiện',
  },
  {
    label: 'Chính sách quyền riêng tư',
  },
  {
    label: 'Thông tin dinh dưỡng',
  },
];

const SideBar = () => {
  const goToSignInScreen = () => navigate(PATH_SCREEN.SIGN_IN_SCREEN);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="px-4 py-2">
          <TouchableOpacity className="flex-row items-center mb-2" onPress={goToSignInScreen}>
            <View
              style={styles.shadowSecondary}
              className="bg-secondary w-10 h-10 rounded-lg items-center justify-center m-2"
            >
              <Svg.UserPlus width={25} height={25} className="text-white" />
            </View>
            <View className="ml-1">
              <Text className="text-[13px] font-nunito-500">Đăng nhập ngay để nhận</Text>
              <Text className="text-[13px] font-nunito-500">Ưu đãi và mã giảm giá</Text>
            </View>
          </TouchableOpacity>
          <View className="h-[1px] bg-zinc-200 w-full my-3" />
          <View className="pl-3">
            {sidebarMenus.map((sidebarMenu) => (
              <TouchableOpacity className="flex-row items-center py-3">
                <sidebarMenu.Icon width={30} height={30} className="text-zinc-600" />
                <Text className="font-nunito-700 ml-4">{sidebarMenu.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="h-[1px] bg-zinc-200 w-full my-3" />
          <View className="pl-3">
            {subSidebarMenus.map((subSidebarMenu) => (
              <TouchableOpacity className="py-3" onPress={subSidebarMenu?.onPress}>
                <Text className="font-nunito-700">{subSidebarMenu.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="h-[1px] bg-zinc-200 w-full my-3" />
          <TouchableOpacity className="flex-row items-center">
            <View className="w-8 h-8 bg-secondary rounded-lg items-center justify-center">
              <Svg.Call width={20} height={20} className="text-white" />
            </View>
            <Text className="font-nunito-700 uppercase ml-2 text-sm">Liên hệ hỗ trợ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideBar;
