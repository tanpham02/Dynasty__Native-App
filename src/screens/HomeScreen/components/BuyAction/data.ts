import { Svg } from "@/assets";
import { BuyActionItemProps } from "../BuyActionItem/type";
import { navigate } from "@/utils/navigationUtil";
import { PATH_SCREEN } from "@/constants/pathName";

export const buyActions: BuyActionItemProps[] = [
    {
        Icon: Svg.Delivery,
        label: "Giao hàng",
        onPress: () => navigate(PATH_SCREEN.DELIVERY_SCREEN)
    },
    {
        Icon: Svg.Store,
        label: "Nhận hàng",
        onPress: () => { }
    }
]