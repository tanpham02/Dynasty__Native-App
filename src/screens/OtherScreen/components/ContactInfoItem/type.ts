import { FC } from "react";
import { SvgProps } from "react-native-svg";

export interface ContactInfoItemProps {
    Icon: FC<SvgProps>,
    label: string
    value: string
    onPress(): void
}