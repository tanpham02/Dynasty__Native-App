import { NavigationUtils } from "@/utils"
import { PathName } from "@/constants"
import { Svg } from "@/assets";

export const subSidebarMenus = [
    {
        label: 'Đánh giá',
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.FEEDBACK_SCREEN),
    },
    {
        label: 'Câu hỏi thường gặp',
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.FAQS_SCREEN)
    },
    {
        label: 'Điều khoản & điều kiện',
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN),
    },
    {
        label: 'Chính sách quyền riêng tư',
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.PRIVACY_POLICY_SCREEN),
    },
    {
        label: 'Thông tin dinh dưỡng',
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.NUTRITION_INFORMATION_SCREEN)
    },
];

export const sidebarMenus = [
    {
        label: 'Khám phá menu',
        Icon: Svg.Box,
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.CATEGORIES)
    },
    {
        label: 'Mã giảm giá',
        Icon: Svg.Offer,
    },
    {
        label: 'Lịch sử đơn hàng',
        Icon: Svg.OrderHistory,
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.ORDER_HISTORY_SCREEN)
    },
];