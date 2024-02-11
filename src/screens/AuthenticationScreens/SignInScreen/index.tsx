import DynastyLogoBgWhite from '@/assets/images/logo/logo-bg-white.png';
import PizzaBgRight from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';
import PizzaBgLeft from '@/assets/images/logo/pizza-hai-san-cao-cap.png';
import FlagViSvg from '@/assets/svg/flag_vi.svg';
import MobileSvg from '@/assets/svg/mobile.svg';
import OfferSvg from '@/assets/svg/offer.svg';
import PizzaSvg from '@/assets/svg/pizza.svg';
import useStatusBarForAndroid from '@/hooks/useStatusBarForAndroid';
import { useForm } from 'react-hook-form';
import { Image, Text, View, SafeAreaView } from 'react-native';
import { Box, Input } from 'native-base';

const SignInScreen = () => {
  useStatusBarForAndroid();

  const {} = useForm();

  const topIntroduce = [
    {
      title: 'Great',
      description: 'Food & Taste',
      icon: PizzaSvg,
    },
    {
      title: 'Great',
      description: 'Offers & Deals',
      icon: OfferSvg,
    },
    {
      title: 'Easy',
      description: 'Ordering',
      icon: MobileSvg,
    },
  ];

  return (
    <Box flex={1}>
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
            {topIntroduce.map((item, index) => (
              <View key={index} className="flex justify-between items-center flex-row space-x-1">
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

        <Box flexDirection="row">
          <View className="flex flex-row items-center space-x-1 rounded-md pr-5 bg-primary/5 ">
            <FlagViSvg />
            <Text className="font-nunito-700 !text-[13px]">+84</Text>
          </View>

          <Input
            className="text-black bg-white placeholder:!font-nunito-700 placeholder:!text-[15px]"
            placeholder="Mobile number*"
            width="100%"
            variant="unstyled"
            flex={1}
            keyboardType="numeric"
            // type="text"
            // height="100%"
          />
        </Box>

        {/* <TouchableHighlight>
          <Button
            style={{
              elevation: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 6,
              shadowColor: '#c3c3c3',
            }}
            className="text-secondary font-nunito-500 my-8 bg-zinc-100 border-[0.22px] border-secondary"
          >
            SEND OTP
          </Button>
        </TouchableHighlight> */}
      </View>

      {/* <Box style={styles.body
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
    </Box>
  );
};

export default SignInScreen;
