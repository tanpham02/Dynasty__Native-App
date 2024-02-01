import { PathName } from 'src/constants';
import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import FlagViSvg from '@/assets/svg/flag_vi.svg';
import AppleSvg from '@/assets/svg/pizza.svg';
import FacebookSvg from '@/assets/svg/pizza.svg';
import GoogleSvg from '@/assets/svg/pizza.svg';
import LinearGradientButton from '@/components/Button/LinearGradientButton';
import useStatusBarForAndroid from '@/hooks/useStatusBarForAndroid';
import theme from '@/themes';
import DynastyLogoBgWhite from '@/assets/images/logo/logo-bg-white.png';
import PizzaBgLeft from '@/assets/images/logo/pizza-hai-san-cao-cap.png';
import PizzaBgRight from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';
import { Button, Input, Separator, XStack, YStack } from 'tamagui';
import { useId } from 'react';
import SVG from 'react-native-svg';
import PizzaSvg from '@/assets/svg/pizza.svg';
import OfferSvg from '@/assets/svg/offer.svg';
import MobileSvg from '@/assets/svg/mobile.svg';
import { Controller, useForm } from 'react-hook-form';

const SignInScreen = () => {
  useStatusBarForAndroid();

  const {} = useForm();

  const topIntroduce = [
    {
      id: useId(),
      title: 'Great',
      description: 'Food & Taste',
      icon: PizzaSvg,
    },
    {
      id: useId(),
      title: 'Great',
      description: 'Offers & Deals',
      icon: OfferSvg,
    },
    {
      id: useId(),
      title: 'Easy',
      description: 'Ordering',
      icon: MobileSvg,
    },
  ];

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

          <View className="flex justify-between items-center flex-row space-x-3 mt-4">
            {topIntroduce.map((item) => (
              <View key={item.id} className="flex justify-between items-center flex-row space-x-1">
                <item.icon width={23} height={23} color="#fff" />
                <View className="flex justify-between">
                  <Text className="text-white text-xs">{item.title}</Text>
                  <Text className="text-white text-xs font-nunito-700">{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
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
      <View className="absolute top-[45%] left-4 right-4 bottom-12 bg-white rounded-2xl shadow-2xl p-6">
        <View className="space-y-.5">
          <Text className="font-nunito-500 text-[17px]">Enter your Mobile number</Text>
          <Text className="font-nunito-500 text-sm text-gray-1">
            Login with a valid local mobile number
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

        <TouchableHighlight>
          <Button
            size="$4"
            style={{
              elevation: 5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 5,
              shadowColor: '#c3c3c3',
            }}
            className="text-secondary font-nunito-500 my-8 bg-zinc-100 border-[0.22px] border-secondary"
          >
            SEND OTP
          </Button>
        </TouchableHighlight>
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
