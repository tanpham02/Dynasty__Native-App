import { Image, View } from 'react-native';
import { BuyQueueStepProps } from './type';
import { Text } from 'tamagui';

const BuyQueueStep = ({ source, label, index }: BuyQueueStepProps) => {
  return (
    <View className="w-1/3 flex-row items-start mt-3">
      <Image source={source} className="w-8 h-8" />
      <View className="flex-1 gap-1 ml-1">
        <Text className="text-xs font-nunito-700 text-yellow-600">Bước {index}</Text>
        <Text className="text-zinc-400 text-[10px] font-nunito-600">{label}</Text>
      </View>
    </View>
  );
};

export default BuyQueueStep;
