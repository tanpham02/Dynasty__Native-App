import { StyleSheet } from "react-native";

import theme from "src/themes";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contactInfoContainer: {
        borderWidth: 1,
        borderColor: theme.colors.gray200,
        borderRadius: 10,
        paddingHorizontal: 13,
        paddingVertical: 16
    },
    contactInfoLabel: {
        color: theme.colors.darkBlue200,
        fontFamily: theme.fontFamily.bold,
        lineHeight: 20,
        fontSize: 12
    },
    contactInfoValue: {
        color: theme.colors.textNormal,
        fontFamily: theme.fontFamily.medium,
        lineHeight: 20,
        fontSize: 12
    }
})

export default styles