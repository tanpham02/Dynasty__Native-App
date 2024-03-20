import { Avatar, Box, Pressable } from 'native-base';
import { memo } from 'react';
import Animated from 'react-native-reanimated';

import styles from '@/styles';
import { CategoryTabViewItemProps } from './type';

const CategoryTabViewItem = ({ activeTabKey, categoryItem, index, onScrollToIndex }: CategoryTabViewItemProps) => {
  return (
    <Box
      className={`relative border-b-2 px-3 mb-0.5 mt-[3px] ${index === activeTabKey ? ' border-b-secondary text-secondary font-nunito-600' : 'border-b-transparent'} `}
    >
      <Pressable
        onPress={() => onScrollToIndex(index)}
        className='flex justify-center items-center'
        style={styles.shadowX}
      >
        <Box
          className={`flex justify-center items-center rounded-full w-[56px] h-[56px] border-[1.2px] ${index === activeTabKey ? 'border-secondary' : 'border-white'}`}
        >
          <Avatar
            source={
              categoryItem?.icon
                ? categoryItem.icon
                : { uri: 'https://thepizzacompany.vn/images/thumbs/000/0002218_sup-deluxe_300.png' }
            }
            className={`w-full h-full bg-white rounded-full object-contain`}
            style={styles.shadowSecondary}
          />
        </Box>
        <Animated.Text
          className={`text-xs font-nunito-500 mt-2 ${index === activeTabKey ? ' text-secondary font-nunito-700' : 'text-gray-9'}`}
        >
          {categoryItem.name}
        </Animated.Text>
      </Pressable>
    </Box>
  );
};

export default memo(CategoryTabViewItem);
