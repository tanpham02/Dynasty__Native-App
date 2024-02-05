import { heightScreen, widthScreen } from "@/utils/systemUtils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    shadowX: {
        shadowColor: "#5e5e5e",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10.00,
        elevation: 24
    },
    heightOnePerFive: {
        height: heightScreen * 0.2
    },
    widthFourPerFiveScreen: {
        width: widthScreen * 0.8
    },
    widthTwoPerFive: {
        width: widthScreen * 0.4
    }
})

export default styles