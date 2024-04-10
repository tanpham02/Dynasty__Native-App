import { Text } from 'native-base';
import { Image } from 'react-native';

import { emojis } from '../../data';
import { FeedbackEmotionProps } from './type';

const FeedbackEmotion = ({ currentStar }: FeedbackEmotionProps) => {
  return (
    <>
      <Image source={emojis[currentStar].icon} className='w-36 h-36' alt='emoji' />
      <Text className='font-nunito-700 text-base mt-3'>{emojis[currentStar].label}</Text>
      <Text className='font-nunito-400 text-sm mt-1 text-zinc-500'>Mọi góp ý của bạn sẽ giúp chúng tôi tốt hơn</Text>
    </>
  );
};

export default FeedbackEmotion;
