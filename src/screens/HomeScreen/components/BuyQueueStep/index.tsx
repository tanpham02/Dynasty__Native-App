import { Image, Text, View } from 'react-native';

import { BuyQueueStepProps } from './type';

const BuyQueueStep = ({ source, label, index }: BuyQueueStepProps) => {
  return (
    <View className="w-1/3 flex-row items-start mt-3">
      <Image source={source} className="w-10 h-10" alt="" />
      <View className="flex-1 gap-1 ml-1">
        <Text className="text-[11px] font-nunito-700 text-yellow-600">Bước {index}</Text>
        <Text className="text-zinc-400 text-[10px] font-nunito-700">{label}</Text>
      </View>
    </View>
  );
};

export default BuyQueueStep;
