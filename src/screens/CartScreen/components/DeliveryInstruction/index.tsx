import { Box, Pressable, Text, TextArea } from 'native-base';
import React, { useState } from 'react';
import { Animated, View } from 'react-native';

import { Svg } from '@/assets';
// NOTE: I KNOW YOU ARE TOO BUSY BUT WHEN YOU ARE COMPLETE UI, FUTURE OR ANYTHING PLEASE SCROLL INTO HEAD OF FILE AND SORTING IMPORT. IT WILL MAKE OUR PROJECT ARE CLEAN AND PROFESSIONAL 😁😁😁

const DeliveryInstruction = () => {
  const [isShowBody, setIsShowBody] = useState<boolean>(false);
  const [instructionValue, setInstructionValue] = useState<string>('');
  const [isSaved, setIsSave] = useState<boolean>(false);

  const handleOpenOrCloseBodyDeliveryInstruction = (isSaved: boolean) => {
    setIsShowBody(!isShowBody);
    setIsSave(isSaved);
  };

  return (
    <>
      <Pressable
        className='flex flex-row items-center p-3 bg-third rounded-lg'
        onPress={() => {
          if (!instructionValue && !isShowBody) {
            handleOpenOrCloseBodyDeliveryInstruction(false);
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
              handleOpenOrCloseBodyDeliveryInstruction(false);
            }}
          >
            <Svg.Edit width={20} height={20} className='text-warning' />
            {/* <Text className='text-fourth text-xs font-nunito-700 uppercase '>Chỉnh sửa</Text> */}
          </Pressable>
        )}
      </Pressable>
      {isShowBody || instructionValue ? (
        <View className='w-full mt-1'>
          <Box className='flex flex-row items-center'>
            <Box className='flex-1 justify-center'>
              {instructionValue && isSaved ? (
                <Box className='bg-fourth/10 rounded-lg p-3'>
                  <Text className='text-sm font text-gray-10 font-nunito-600' numberOfLines={2}>
                    {instructionValue}
                  </Text>
                </Box>
              ) : (
                <TextArea
                  autoCompleteType=''
                  outlineColor='transparent'
                  focusOutlineColor='transparent'
                  backgroundColor='#f5faff'
                  placeholder='Nhập hướng dẫn ở đây'
                  minHeight={30}
                  value={instructionValue}
                  onChangeText={setInstructionValue}
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    lineHeight: 18,
                  }}
                />
              )}
            </Box>
          </Box>
          {!isSaved && (
            <Pressable
              className='w-fit ml-auto bg-secondary py-2 px-4 rounded-lg mt-3'
              //   NOTE: using shorthand code with remove bracket of below function
              onPress={() => {
                handleOpenOrCloseBodyDeliveryInstruction(true);
              }}
            >
              <Text className='text-white font-nunito-600 text-sm '>Lưu</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default DeliveryInstruction;
