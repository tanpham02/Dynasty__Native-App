import { Box, Checkbox, Divider, Flex, Input, KeyboardAvoidingView, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Keyboard, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DynastyLogoBgWhite from '@/assets/images/logo/logo-bg-white.png';
import PizzaBgRight from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';
import PizzaBgLeft from '@/assets/images/logo/pizza-hai-san-cao-cap.png';
import { Mobile as MobileSvg, Offer as OfferSvg, PizzaSlice } from '@/assets/svg';

import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { useStatusBarForAndroid } from '@/hooks';
import styles from '@/styles';
import { NavigationUtils } from '@/utils';
import { navigate } from '@/utils/navigationUtil';

const SignInScreen = () => {
  const [isAgreeReceiveOffer, setIsAgreeReceiveOffer] = useState<boolean>(true);

  useStatusBarForAndroid('#006a31');

  const {} = useForm();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true); // or some other action
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false); // or some other action
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const topIntroduce = [
    {
      title: 'Great',
      description: 'Food & Taste',
      icon: PizzaSlice,
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

  const handleChangeCheckedReceiveOffer = () => setIsAgreeReceiveOffer(!isAgreeReceiveOffer);

  const gotoTermAndConditionsScreen = () => NavigationUtils.navigate(PathName.PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN);

  return (
    <KeyboardAvoidingView className='flex-1 bg-gray-6'>
      <KeyboardAwareScrollView
        // extraScrollHeight={Platform.OS === 'ios' ? 0 : 20}
        className='flex-1 bg-gray-6'
      >
        <Box className='relative h-screen flex flex-col overflow-hidden bg-gray-6'>
          <Box className='relative bg-primary flex flex-1 justify-center items-center'>
            <Image
              source={PizzaBgLeft}
              style={{
                width: 180,
                height: 180,
              }}
              className='absolute top-1/4 -left-[20%]'
              alt=''
            />

            <Box className='flex items-center justify-center'>
              <Image
                source={DynastyLogoBgWhite}
                style={{
                  width: 120,
                  objectFit: 'contain',
                }}
                className='mb-36'
                alt=''
              />
              <View className='absolute top-1/2 flex justify-center items-center'>
                <Text className='font-nunito-300 text-white text-xl'>Login to Unlock</Text>
                <Text className='font-nunito-700 text-white text-xl'>awesome new features</Text>

                <View className='flex justify-between items-center flex-row space-x-3 mt-4'>
                  {topIntroduce.map((item, index) => (
                    <View key={index} className='flex justify-between items-center flex-row space-x-1'>
                      <item.icon width={23} height={23} color='#fff' />
                      <View className='flex justify-between'>
                        <Text className='text-white text-xs'>{item.title}</Text>
                        <Text className='text-white text-xs font-nunito-700'>{item.description}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </Box>

            <Image
              source={PizzaBgRight}
              style={{
                width: 200,
                height: 200,
              }}
              className='absolute top-[10.5%] -right-[22%]'
              alt=''
            />
          </Box>
          <Box className='bg-gray-6 h-[40%]'></Box>

          <Box
            className='absolute top-[47%] bottom-auto left-4 right-4 bg-gray-7 rounded-2xl shadow-2xl px-6 pt-6 pb-3.5 z-999
          '
            style={styles.shadowX}
          >
            <View className='space-y-.5'>
              <Text className='font-nunito-500 text-[17px]'>Enter your Mobile number</Text>
              <Text className='font-nunito-500 text-sm text-gray-1'>Login with a valid local mobile number</Text>
            </View>
            <Box
              flexDirection='row'
              className='h-12 flex items-center bg-white rounded-lg p-1.5 mt-3'
              style={styles.shadowX}
            >
              <View className='flex flex-row items-center space-x-1 rounded-lg px-2 bg-gray-7 h-full'>
                <Svg.FlagVi />
                <Text className='font-nunito-700 !text-[13px]'>+84</Text>
              </View>

              <Divider orientation='vertical' thickness='1' className='bg-secondary ml-2 mr-1' />
              <Input
                className='text-black bg-white placeholder:!font-nunito-700 placeholder:!text-[15px]'
                placeholder='Mobile number*'
                width='100%'
                variant='unstyled'
                flex='1'
                keyboardType='numeric'
              />
            </Box>
            <TouchableOpacity style={styles.shadowX} className='bg-gray-7 rounded-lg py-3 mt-8 border border-[#faf1f3]'>
              <Text className='text-secondary font-nunito-600 text-[15px] text-center'>SEND OTP</Text>
            </TouchableOpacity>
            <Flex className='flex-row items-center gap-2 mt-1.5'>
              <TouchableOpacity>
                <Checkbox
                  className={`rounded-lg`}
                  onChange={handleChangeCheckedReceiveOffer}
                  value=''
                  isChecked={isAgreeReceiveOffer}
                  colorScheme='danger'
                  size='sm'
                />
              </TouchableOpacity>
              <Text onPress={handleChangeCheckedReceiveOffer} className='text-xs font-nunito-500'>
                By clicking i agree to receive marketing offers
              </Text>
            </Flex>
            <Box className='my-6'>
              <Text className='mb-3 font-nunito-600'>Login with Social Media Accounts</Text>
              <TouchableOpacity style={styles.shadowX} className='bg-white flex flex-row rounded-lg'>
                <Box className='flex-row items-center justify-center w-fit mx-auto py-2 '>
                  <Svg.GoogleSvg width={30} height={30} className='mr-2' />
                  <Text className='text-[15px] font-nunito-500'>Google</Text>
                </Box>
              </TouchableOpacity>
            </Box>

            <Box className='flex-row justify-between items-center '>
              <TouchableOpacity onPress={gotoTermAndConditionsScreen}>
                <Text className='uppercase text-[10px] font-nunito-500 text-[#1476e1]'>Terms & Conditions</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate(PathName.PATH_SCREEN.HOME_SCREEN)}>
                <Text className='uppercase text-[10px] font-nunito-500'>Skip Login</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
