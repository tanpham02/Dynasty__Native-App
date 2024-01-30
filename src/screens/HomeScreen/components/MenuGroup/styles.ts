import { StyleSheet } from "react-native";
import theme from "src/themes";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: theme.spacing.marginVerticalContent * 2,
        justifyContent: "space-between",
    },
    menuGroupView: {
        marginHorizontal: 10,
        alignItems: "center"
    },
    menuBtnText: {
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.textBold,
        fontSize: 12,
        marginTop: 10
    }
});

export default styles;