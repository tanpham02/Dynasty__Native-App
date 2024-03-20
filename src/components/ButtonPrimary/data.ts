import styles from "@/styles";
import { ButtonColors } from "./type";

export const buttonColors: ButtonColors = {
    primary: "bg-primary",
    danger: "bg-secondary"
}

export const buttonShadows: { [key: string]: Object } = {
    primary: styles.shadowPrimary,
    danger: styles.shadowSecondary
}