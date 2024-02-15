import { Text, TouchableOpacity, View } from 'react-native';

import styles from '@/styles';
import { Svg } from '@/assets';
import { BuyActionItemProps } from './type';

const BuyActionItem = ({
  label,
  Icon,
  onPress,
  isActive,
  wrapperClassName,
}: BuyActionItemProps) => {
  return (
    <View className={`items-center w-1/4 ${wrapperClassName}`}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.shadowX}
        className={`border ${isActive ? 'border-secondary-1' : 'border-gray-5'} w-[50px] h-[50px] rounded-full items-center justify-center bg-gray-5`}
      >
        <Icon width={25} height={25} className="text-zinc-800" />
      </TouchableOpacity>
      <View className={`flex-row items-center ${isActive && 'border-b border-secondary-1'}`}>
        {isActive && (
          <Svg.Checked width={11} height={11} className="text-secondary-1 mr-0.5 mb-1" />
        )}
        <Text
          className={`font-nunito-700 text-xs mt-1 pb-2 ${isActive ? 'text-zinc-700' : ' text-zinc-500'}`}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default BuyActionItem;
