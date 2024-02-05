import { Text } from 'tamagui';

import styles from '@/styles';
import { TouchableOpacity, View } from 'react-native';
import { BuyActionItemProps } from './type';

const BuyActionItem = ({ label, Icon, onPress }: BuyActionItemProps) => {
  return (
    <View className="items-center w-1/4">
      <TouchableOpacity
        onPress={onPress}
        style={styles.shadowX}
        className="border border-zinc-200 w-14 h-14 rounded-full items-center justify-center bg-gray-5"
      >
        <Icon width={27} height={27} className="text-zinc-800" />
      </TouchableOpacity>
      <Text className="font-nunito-700 text-[13px] mt-1">{label}</Text>
    </View>
  );
};

export default BuyActionItem;
