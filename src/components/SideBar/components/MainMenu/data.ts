import { Svg } from "@/assets";
import { PATH_SCREEN } from "@/constants";
import { navigate } from "@/utils";

const {
    CATEGORIES_SCREEN,
    VOUCHER_SCREEN,
    ORDER_HISTORY_SCREEN
} = PATH_SCREEN

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
