import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { Text, View } from 'react-native';

import styles from '@/styles';
import { buyQueueSteps } from './data';
import BuyQueueStep from '../BuyQueueStep';
import { widthScreen } from '@/utils';

const BuyQueueTutorial = () => {
  return (
    <View className='h-[185px]'>
      <Canvas
        style={{
          flex: 1,
          backgroundColor: '#f5faff',
        }}
      >
        <RoundedRect x={12} y={16} width={widthScreen - 25} height={150} r={8} color='#f0f6fc'>
          <Shadow dx={10} dy={10} blur={10} color='#dfe6ee' />
          <Shadow dx={-10} dy={-10} blur={10} color='#ffffff' />
        </RoundedRect>
      </Canvas>
      <View className='mt-4 rounded-lg p-4 mx-3 absolute top-0 left-0 right-0 bottom-0'>
        <View>
          <Text className='text-sm font-nunito-700 text-zinc-800'>Quy trình đặt</Text>
          <Text className='font-nunito-500 text-zinc-600'>& nhận hàng tại của hàng</Text>
        </View>
        <View className='flex-row'>
          {buyQueueSteps.map((buyQueueStep, index) => (
            <BuyQueueStep {...buyQueueStep} key={index} index={index + 1} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BuyQueueTutorial;
