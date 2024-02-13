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
    },
    {
        label: 'Điều khoản & điều kiện',
        onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN),
    },
    {
        label: 'Chính sách quyền riêng tư',
    },
    {
        label: 'Thông tin dinh dưỡng',
    },
];

export const sidebarMenus = [
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