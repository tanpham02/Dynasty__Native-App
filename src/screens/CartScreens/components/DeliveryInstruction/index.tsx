import { Box, Pressable, Text, TextArea } from 'native-base';
import React, { useState } from 'react';
import { Animated } from 'react-native';

import { Svg } from '@/assets';

const DeliveryInstruction = () => {
  const [isShowBody, setIsShowBody] = useState<boolean>(false);
  const [instructionValue, setInstructionValue] = useState<string>('');
  const [isSaved, setIsSave] = useState<boolean>(false);

  const handleOpenOrCloseBodyDeliveryInstruction = () => setIsShowBody(!isShowBody);

  return (
    <>
      <Pressable
        className='flex flex-row items-center p-3 bg-third rounded-lg'
        onPress={() => {
          if (!instructionValue && !isShowBody) {
            handleOpenOrCloseBodyDeliveryInstruction();
            setIsSave(false);
          }
        }}
      >
        <Box className='flex-1 flex-row items-center'>
          {!isShowBody && !instructionValue && <Svg.Notepad width={24} height={24} className='mr-2' />}
          <Text className='text-gray-1 text-sm font-nunito-600 flex flex-wrap'>Thêm hướng dẫn giao hàng (Nếu có)</Text>
        </Box>
        {instructionValue && isSaved && (
          <Pressable
            className='w-fit ml-auto'
            onPress={() => {
              handleOpenOrCloseBodyDeliveryInstruction();
              setIsSave(false);
            }}
          >
            <Text className='text-fourth text-xs font-nunito-700 uppercase '>Chỉnh sửa</Text>
          </Pressable>
        )}
      </Pressable>
      {isShowBody || instructionValue ? (
        <Animated.View className='w-full mt-3'>
          <Box className='flex flex-row'>
            <Box className='mr-2'>
              <Svg.Notepad width={24} height={24} />
            </Box>
            <Box className='flex-1 justify-center'>
              {instructionValue && isSaved ? (
                <Box className='bg-fourth/10 rounded-lg p-2'>
                  <Text className='text-xs text-gray-11 font-nunito-500'>{instructionValue}</Text>
                </Box>
              ) : (
                <TextArea
                  autoCompleteType=''
                  outlineColor='#8c8c8c'
                  focusOutlineColor='#8c8c8c'
                  backgroundColor='#f5faff'
                  placeholder='Nhập hướng dẫn ở đây'
                  minHeight={30}
                  value={instructionValue}
                  onChangeText={setInstructionValue}
                />
              )}
            </Box>
          </Box>
          {!isSaved && (
            <Pressable
              className='w-fit ml-auto bg-secondary py-2 px-4 rounded-lg mt-3'
              onPress={() => {
                setIsSave(true);
                handleOpenOrCloseBodyDeliveryInstruction();
              }}
            >
              <Text className='text-white font-nunito-600 text-sm '>Lưu</Text>
            </Pressable>
          )}
        </Animated.View>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeliveryInstruction;
