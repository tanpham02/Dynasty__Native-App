import { ReactNode } from "react"

export interface ButtonColors {
    primary: string
    danger: string
}
export interface ButtonPrimaryProps {
    onPress?(): void
    title: ReactNode
    containerClass?: string
    isDisable?: boolean
    color?: keyof ButtonColors
}
