import { FC, ReactNode } from "react";
import { SvgProps } from "react-native-svg";

export interface DataRowProps {
    Icon: FC<SvgProps>,
    label: string
    value: string
}