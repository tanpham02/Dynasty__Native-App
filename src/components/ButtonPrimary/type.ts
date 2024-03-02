import { ReactNode } from "react"

export interface ButtonPrimaryProps {
    onPress?(): void
    title: ReactNode
    containerClass?: string
    isDisable?: boolean
}