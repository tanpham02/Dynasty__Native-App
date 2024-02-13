import styles from '@/styles';
import { Text, View } from 'react-native';
import { buyQueueSteps } from './data';
import BuyQueueStep from '../BuyQueueStep';

const BuyQueueTutorial = () => {
  return (
    <View
      className="mt-4 border border-gray-200 rounded-lg p-4 bg-gray-5 mx-3"
      style={[
        styles.shadowX,
        {
          elevation: 5,
        },
      ]}
    >
      <View>
        <Text className="text-sm font-nunito-700 text-zinc-800">Quy trình đặt</Text>
        <Text className="font-nunito-500 text-zinc-600">& nhận hàng tại của hàng</Text>
      </View>
      <View className="flex-row">
        {buyQueueSteps.map((buyQueueStep, index) => (
          <BuyQueueStep {...buyQueueStep} key={index} index={index + 1} />
        ))}
      </View>
    </View>
  );
};

export default BuyQueueTutorial;
