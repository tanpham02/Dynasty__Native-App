import { Text } from 'tamagui';

import styles from '@/styles';
import { TouchableOpacity, View } from 'react-native';
import { BuyActionItemProps } from './type';
import { Svg } from '@/assets';

const BuyActionItem = ({ label, Icon, onPress, isActive }: BuyActionItemProps) => {
  return (
    <View className="items-center w-1/4">
      <TouchableOpacity
        onPress={onPress}
        style={styles.shadowX}
        className={`border ${isActive ? 'border-secondary' : 'border-gray-5'} w-14 h-14 rounded-full items-center justify-center bg-gray-5`}
      >
        <Icon width={27} height={27} className="text-zinc-800" />
      </TouchableOpacity>
      <View className={`flex-row items-center ${isActive && 'border-b border-secondary'}`}>
        {isActive && <Svg.Checked width={10} height={10} className="text-secondary mr-1" />}
        <Text
          className={`font-nunito-700 text-[13px] mt-1 pb-2 ${isActive ? 'text-zinc-700' : ' text-zinc-500'}`}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default BuyActionItem;
