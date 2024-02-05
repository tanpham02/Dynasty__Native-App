import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'tamagui';

import { Svg } from '@/assets';
import styles from '@/styles';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center gap-3">
      <TouchableOpacity
        className="flex-row flex-1 items-center border border-zinc-200 py-2 px-4 rounded-lg bg-gray-5 my-2"
        style={styles.shadowX}
      >
        <Svg.Menu width={20} height={20} className="text-zinc-500" />
        <View className="mr-2 ml-4 flex-1">
          <Text className="text-zinc-800 font-nunito-700 uppercase text-xs">Chọn vị trí</Text>
          <Text className="text-zinc-500 font-nunito-500 text-xs">Nhận chính xác giá...</Text>
        </View>
        <View className="w-4 h-4 bg-secondary rounded item-center justify-center flex-row">
          <Svg.ArrowDown width={14} height={14} className="text-white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadowX}
        className="w-12 h-12 bg-gray-5 rounded-full justify-center items-center m-1 border border-zinc-200"
      >
        <Svg.QrCode width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadowX}
        className="w-12 h-12 bg-gray-5 rounded-lg justify-center items-center m-1 border border-zinc-200"
      >
        <Svg.Notification width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
