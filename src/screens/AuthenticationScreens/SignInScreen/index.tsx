import { navigate } from 'App';
import { PathName } from 'src/constants';
import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import FlagViSvg from '@/assets/svg/flag_vi.svg';
import AppleSvg from '@/assets/svg/apple.svg';
import FacebookSvg from '@/assets/svg/facebook.svg';
import GoogleSvg from '@/assets/svg/google.svg';
import LinearGradientButton from '@/components/Button/LinearGradientButton';
import useStatusBarForAndroid from '@/hooks/useStatusBarForAndroid';
import theme from '@/themes';
import DynastyLogoBgWhite from '@/assets/images/logo/logo-bg-white.png';
import PizzaBgLeft from '@/assets/images/logo/pizza-hai-san-cao-cap.png';
import PizzaBgRight from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';
import { Input, Separator, XStack } from 'tamagui';

const SignInScreen = () => {
  useStatusBarForAndroid();

  return (
    <View className="flex flex-1 ">
      <View className="!bg-primary relative flex-1 flex justify-center items-center ">
        <Image
          source={PizzaBgLeft}
          style={{
            width: 180,
            height: 180,
          }}
          className="absolute top-1/4 -left-[20%]"
        />
        <Image
          source={DynastyLogoBgWhite}
          style={{
            width: 120,
            objectFit: 'contain',
          }}
          className="mb-36"
        />
        <View className="absolute top-1/2 flex justify-center items-center">
          <Text className="font-nunito-300 text-white text-xl">Login to Unlock</Text>
          <Text className="font-nunito-700 text-white text-xl">awesome new features</Text>
        </View>
        <Image
          source={PizzaBgRight}
          style={{
            width: 200,
            height: 200,
          }}
          className="absolute top-[10.5%] -right-[22%]"
        />
      </View>

      <View className="bg-gray-2 h-[45%]"></View>
      <View className="absolute top-[43%] left-4 right-4 bottom-12 bg-white rounded-2xl shadow-2xl p-6">
        <View className="space-y-.5">
          <Text className="font-nunito-500 text-[17px]">Enter your Mobile number</Text>
          <Text className="font-nunito-500 text-sm text-gray-1">
            Login wit a valid local mobile number
          </Text>
        </View>

        <View className="flex flex-row rounded-md bg-white shadow-2xl mt-6 py-1 px-2">
          <View className="flex flex-row items-center space-x-1 rounded-md pr-5 bg-primary/5 ">
            <FlagViSvg />
            <Text className="font-nunito-700 !text-[13px]">+84</Text>
          </View>
          <Separator
            alignSelf="stretch"
            vertical
            marginVertical={8}
            marginLeft={22}
            borderColor={'red'}
          />
          <Input
            className="flex-1 text-black bg-white placeholder:!font-nunito-700 placeholder:!text-[15px]"
            placeholder="Mobile number*"
            keyboardType="numeric"
            borderColor={'transparent'}
          />
        </View>
      </View>

      {/* <View style={styles.body
        <View style={styles.inputContainer}>
          <FlagViSvg style={styles.flag} />
          <Text style={styles.inputPhoneNumberCode}>+84</Text>s
          <TextInput
            style={styles.inputPhoneNumber}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputPassword} placeholder="Mật khẩu" secureTextEntry={true} />
        </View>
        <LinearGradientButton
          title="Đăng nhập"
          style={styles.loginButton}
          onPress={() => navigate(PathName.PATH_SCREEN.MAIN)}
        />
      </View> */}
      {/* <View style={styles.loginWithSocialContainerButton}>
        <TouchableOpacity>
          <AppleSvg style={styles.socialLoginButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FacebookSvg style={styles.socialLoginButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <GoogleSvg style={styles.socialLoginButton} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default SignInScreen;
