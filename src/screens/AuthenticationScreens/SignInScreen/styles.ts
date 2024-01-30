import { StyleSheet } from "react-native";
import theme from "src/themes";
import { widthScreen } from "src/utils/systemUtils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerLogo: {
    width: 176,
    height: 176,
  },
  headerText: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.darkBlue100,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: widthScreen,
    paddingHorizontal: 34,
    marginTop: 26,
    marginBottom: 46,
  },
  inputContainer: {
    height: 45,
    width: "100%",
    backgroundColor: theme.colors.background,
    position: "relative",
    borderRadius: 22.5,
    marginVertical: 3.5,
  },
  inputPhoneNumber: {
    height: "100%",
    paddingLeft: 96,
    fontFamily: theme.fontFamily.regular,
  },
  inputPassword: {
    height: "100%",
    paddingHorizontal: 25,
    fontFamily: theme.fontFamily.regular,
  },
  flag: {
    width: 31,
    height: 31,
    position: "absolute",
    top: 7,
    left: 19,
  },
  inputPhoneNumberCode: {
    position: "absolute",
    left: 55,
    top: 12,
    lineHeight: 20,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.textNormal,
  },
  textPlaceholder: {},
  loginButton: {
    width: "100%",
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
    marginTop: 3.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginWithSocialContainerButton: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  socialLoginButton: {
    width: 45,
    height: 45,
  },
});

export default styles;
