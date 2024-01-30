import { navigate } from "App";
import { PathName } from "src/constants";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import FlagViSvg from "src/assets/svg/flag_vi.svg";
import AppleSvg from "src/assets/svg/apple.svg";
import FacebookSvg from "src/assets/svg/facebook.svg";
import GoogleSvg from "src/assets/svg/google.svg";
import LinearGradientButton from "src/components/Button/LinearGradientButton";
import useStatusBarForAndroid from "src/hooks/useStatusBarForAndroid";
import theme from "src/themes";
import DynastyLogoNoBg from "src/assets/images/dynasty-logo-no-bg.png";

const SignInScreen = () => {
  useStatusBarForAndroid();

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Image source={DynastyLogoNoBg} style={styles.headerLogo} />
        <Text style={{ fontSize: 30, fontFamily: theme.fontFamily.bold }}>
          Phạm Văn Tân
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <FlagViSvg style={styles.flag} />
          <Text style={styles.inputPhoneNumberCode}>+84</Text>
          <TextInput
            style={styles.inputPhoneNumber}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          />
        </View>
        <LinearGradientButton
          title="Đăng nhập"
          style={styles.loginButton}
          onPress={() => navigate(PathName.PATH_SCREEN.MAIN)}
        />
      </View>
      <View style={styles.loginWithSocialContainerButton}>
        <TouchableOpacity>
          <AppleSvg style={styles.socialLoginButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FacebookSvg style={styles.socialLoginButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <GoogleSvg style={styles.socialLoginButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
