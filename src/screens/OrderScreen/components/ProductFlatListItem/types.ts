import { GestureResponderEvent, ImageSourcePropType } from "react-native";

export interface ProductFlatListItemType {
    productName?: string;
    price?: number;
    image?: ImageSourcePropType;
    onPress?: (event: GestureResponderEvent) => void
}