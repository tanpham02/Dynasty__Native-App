import { Image } from 'native-base';
import { Text, TouchableOpacity, View } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { HomeCategoryItemProps } from './type';

const HomeCategoryItem = ({ name, avatar }: HomeCategoryItemProps) => {
  return (
    <View className='items-center w-1/3 mt-4'>
      <TouchableOpacity
        className='w-[85px] h-[85px] rounded-full bg-white p-[3px] items-center justify-center overflow-hidden'
        style={styles.shadowX}
      >
        {avatar ? (
          <Image
            source={{
              uri: `https://dynasty-ws.vtaan.id.vn/${avatar}`,
            }}
            className='w-full h-full'
            resizeMode='contain'
            alt='avatar'
          />
        ) : (
          <Svg.Box className='text-zinc-600' width={45} height={45} />
        )}
      </TouchableOpacity>
      <Text numberOfLines={2} className='mt-2 text-[13px] font-nunito-700 text-zinc-700 text-center capitalize'>
        {name}
      </Text>
    </View>
  );
};

export default HomeCategoryItem;
