import { Svg } from "@/assets";
import { BuyActionItemProps } from "../BuyActionItem/type";

export const buyActions: BuyActionItemProps[] = [
    {
        Icon: Svg.Delivery,
        label: "Giao hàng",
        onPress: () => { }
    },
    {
        Icon: Svg.Store,
        label: "Nhận hàng",
        onPress: () => { }
    }
]