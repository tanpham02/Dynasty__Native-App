import { FC } from "react";
import { SvgProps } from "react-native-svg";

export interface BuyActionItemProps {
    Icon: FC<SvgProps>
    label: string
    onPress(): void,
    isActive?: boolean
}