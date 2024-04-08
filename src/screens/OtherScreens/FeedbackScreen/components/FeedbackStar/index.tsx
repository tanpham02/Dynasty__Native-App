import { Box } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { FeedbackStarProps } from './type';

const FeedbackStar = ({ currentStar, setCurrentStar }: FeedbackStarProps) => {
  return (
    <Box className='flex-row gap-3 mt-1'>
      {Array.from({ length: 5 }).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => setCurrentStar(index + 1)}>
          <Svg.StarSolid width={30} height={30} className={currentStar <= index ? 'text-zinc-300' : 'text-red-600'} />
        </TouchableOpacity>
      ))}
    </Box>
  );
};

export default FeedbackStar;
