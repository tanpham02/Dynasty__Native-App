import { Box, Flex, Input, Pressable, Text } from 'native-base';
import {
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import { ButtonPrimary, PrimaryLayout } from '@/components';
import { useEffect, useRef, useState } from 'react';
import PATTERN from '@/utils/regexUtils';
import VerifyBg from '@/assets/images/verify-otp-bg.jpg';
import PizzaBgRight from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';
import { widthScreen } from '@/utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const VerifyOTPScreen = () => {
  const [inputState, setInputState] = useState<
    {
      value?: string;
      disable?: boolean;
    }[]
  >([]);
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });

  const inputRefs = useRef<Array<TextInput>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const handleChangeTextInput = (value: string, index: number) => {
    const newInputState = [...inputState];
    if (!PATTERN.WHITE_SPACE.test(value)) {
      newInputState[index] = { value };
      setInputState(newInputState);
      if (index <= inputRefs.current.length - 1) {
        if (value) {
          inputRefs.current[index + 1]?.focus();
          return;
        }
        if (index === 0) {
          inputRefs.current[index]?.focus();
          return;
        }
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleIgnoreSpaceKey = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === ' ' || PATTERN.WHITE_SPACE.test(inputState[index]?.value)) {
      inputRefs.current[index]?.focus();
    }
  };

  const onSelectionChange = ({ nativeEvent: { selection } }) => {
    setSelection({ start: selection.end, end: selection.end });
  };
  return (
    <PrimaryLayout
      titleScreen='Xác minh số điện thoại'
      containerClass='flex-1 bg-white'
      statusBarBackgroundColor='white'
    >
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1'>
          <Box className='flex-1 px-4 w-screen'>
            <Box className='flex justify-center items-center mb-1'>
              <Image source={VerifyBg} width={widthScreen} resizeMode='contain' />
            </Box>
            <Box className='justify-center items-center gap-6'>
              <Text className='text-lg  uppercase font-nunito-700'>OTP Xác thực</Text>
              <Box className=''>
                <Text className='text-[13px] font-nunito-600 text-gray-400'>
                  Chúng tôi đã gửi SMS đến số điện thoại
                  <Text className='text-secondary font-nunito-700 text-[14px]'> 0372800762</Text>
                </Text>
                <Text className='text-[13px] font-nunito-600 text-gray-400'>
                  Vui lòng kiểm tra hộp thư và điền OTP vào ô bên dưới
                </Text>
              </Box>
            </Box>
            <Flex className='w-full flex-row justify-between items-center my-8'>
              {[...new Array(6)].map((_, index) => (
                <TextInput
                  ref={(ref) => {
                    if (ref && !inputRefs.current.includes(ref)) {
                      inputRefs.current = [...inputRefs.current, ref];
                    }
                  }}
                  maxLength={1}
                  contextMenuHidden
                  onChangeText={(value) => handleChangeTextInput(value, index)}
                  onKeyPress={(e) => handleIgnoreSpaceKey(e, index)}
                  className='text-center text-xl font-nunito-600 text-secondary w-[55px] h-[55px] border-2 border-[#d9d9d9] rounded-xl'
                  selectTextOnFocus={false}
                  selectionColor='black'
                  value={inputState[index]?.value}
                  keyboardType='numeric'
                />
              ))}
            </Flex>
            <Box className='flex flex-row justify-center items-center gap-1 mb-8'>
              <Text className='text-sm font-nunito-600'>Bạn chưa nhận được mã?</Text>
              <Text className='text-secondary font-nunito-700 text-[15px]'>Gửi lại</Text>
            </Box>
            <ButtonPrimary
              title='Đăng nhập'
              color='danger'
              containerClass='py-3'
              textClassName='uppercase font-nunito-700'
            />
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </PrimaryLayout>
  );
};

export default VerifyOTPScreen;
