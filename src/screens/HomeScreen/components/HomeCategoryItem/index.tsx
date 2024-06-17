import { Box, Image } from 'native-base';
import { Text, TouchableOpacity, View } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { HomeCategoryItemProps } from './type';
import { getFullImageUrl } from '@/utils';

const HomeCategoryItem = ({ name, avatar }: HomeCategoryItemProps) => {
  return (
    <View className='items-center w-1/3 mt-4 '>
      <TouchableOpacity className='bg-third rounded-tl-full rounded-tr-full relative'>
        <Box className='h-[2.5px] bg-[#ff9e0b] absolute bottom-0 left-0 right-0'></Box>

        <Box className='w-[85px] h-[85px] rounded-full bg-white p-[3px] items-center justify-center overflow-hidden'>
          {avatar ? (
            <Image
              source={{
                uri: getFullImageUrl(avatar),
              }}
              className='w-full h-full'
              resizeMode='contain'
              alt='avatar'
            />
          ) : (
            <Svg.Box className='text-zinc-600' width={45} height={45} />
          )}
        </Box>
        <Text
          numberOfLines={2}
          className='mt-2 text-[12.5px] font-nunito-700 text-zinc-700 text-center capitalize pb-[6px] pt-1'
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCategoryItem;
