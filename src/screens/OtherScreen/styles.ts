import { StyleSheet } from "react-native";
import theme from "src/themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16
    },
    scrollView: {
        overflow: "scroll"
    },
    version: {
        color: "#9095A1",
        fontSize: 12,
        fontFamily: theme.fontFamily.regular,
        lineHeight: 20,
        marginTop: 6
    }
})

export default styles