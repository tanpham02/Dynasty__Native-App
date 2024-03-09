import { Svg } from "@/assets";
import { PathName } from "@/constants";
import { NavigationUtils } from "@/utils";

const { navigate } = NavigationUtils
const {
    CATEGORIES_SCREEN,
    VOUCHER_SCREEN,
    ORDER_HISTORY_SCREEN
} = PathName.PATH_SCREEN

export const mainMenu = [
    {
        label: 'Khám phá menu',
        Icon: Svg.Box,
        onPress: () => navigate(CATEGORIES_SCREEN),
    },
    {
        label: 'Voucher của bạn',
        Icon: Svg.Offer,
        onPress: () => navigate(VOUCHER_SCREEN),
    },
    {
        label: 'Lịch sử đơn hàng',
        Icon: Svg.OrderHistory,
        onPress: () => navigate(ORDER_HISTORY_SCREEN),
    },
];
