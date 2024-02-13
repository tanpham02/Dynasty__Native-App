import { Text, View, TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { HomeCategoryItemProps } from './type';

const HomeCategoryItem = ({ name }: HomeCategoryItemProps) => {
  return (
    <View className="items-center w-1/4 mt-2">
      <TouchableOpacity
        className="w-16 h-16 rounded-full bg-gray-5 items-center justify-center border border-zinc-200"
        style={styles.shadowX}
      >
        <Svg.Box className="text-zinc-600" width={45} height={45} />
      </TouchableOpacity>
      <Text numberOfLines={2} className="mt-4 text-xs font-nunito-700 text-zinc-600 text-center">
        {name}
      </Text>
    </View>
  );
};

export default HomeCategoryItem;
