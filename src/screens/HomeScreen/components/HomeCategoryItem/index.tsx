import { Text, View, TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { HomeCategoryItemProps } from './type';
import { Image } from 'native-base';

const HomeCategoryItem = ({ name, avatar }: HomeCategoryItemProps) => {
  return (
    <View className='items-center w-1/4 mt-2'>
      <TouchableOpacity
        className='w-16 h-16 rounded-full bg-gray-5 items-center justify-center border border-zinc-200 overflow-hidden'
        style={styles.shadowX}
      >
        {avatar ? (
          <Image
            source={{
              uri: `https://dynasty-ws.vtaan.id.vn/${avatar}`,
            }}
            className='w-full h-full'
            resizeMode='cover'
          />
        ) : (
          <Svg.Box className='text-zinc-600' width={45} height={45} />
        )}
      </TouchableOpacity>
      <Text numberOfLines={2} className='mt-4 text-xs font-nunito-700 text-zinc-600 text-center capitalize'>
        {name}
      </Text>
    </View>
  );
};

export default HomeCategoryItem;
