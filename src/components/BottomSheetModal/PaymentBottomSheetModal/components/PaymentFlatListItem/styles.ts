import { StyleSheet } from "react-native";
import theme from "src/themes";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8
    },
    bannerImage: {
        height: 26,
        width: 33,
        marginHorizontal: 8
    },
    titleText: {
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.textRegular
    }
});

export default styles;