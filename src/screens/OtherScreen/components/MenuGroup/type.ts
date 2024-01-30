import { FC } from "react"

import { SvgProps } from "react-native-svg"

export interface MenuGroupProps {
    label: string
    items: MenuGroupItem[]
}

export interface MenuGroupItem {
    Icon: FC<SvgProps>,
    label: string,
    pathName?: string
    hideArrow?: boolean,
}