// FIXME: sorting import below
import { Avatar, Box, Pressable } from 'native-base';
import React from 'react';

import styles from '@/styles';
import Animated from 'react-native-reanimated';
import { CategoryTabViewItemProps } from './type';

// FIXME: using destructuring instead of access to property
const CategoryTabViewItem = (props: CategoryTabViewItemProps) => {
  return (
    <Box
      className={`relative border-b-2 px-3 mb-0.5 mt-[3px] ${props.index === props.activeTabKey ? ' border-b-secondary text-secondary font-nunito-600' : 'border-b-transparent'} `}
    >
      {/* FIXME: pass in a function that executes both functions instead of 2 functions */}
      <Pressable
        onPress={() => {
          props.setActiveTabKey(props.index);
          props.onScrollToIndex(props.index);
        }}
        className='flex justify-center items-center'
        style={styles.shadowX}
      >
        <Box
          className={`flex justify-center items-center rounded-full w-[56px] h-[56px] border-[1.2px] ${props.index === props.activeTabKey ? 'border-secondary' : 'border-white'}`}
        >
          <Avatar
            source={{
              uri: 'https://thepizzacompany.vn/images/thumbs/000/0002218_sup-deluxe_300.png',
            }}
            className={`w-full h-full bg-white rounded-full object-cover flex justify-center items-center`}
            style={styles.shadowSecondary}
          />
        </Box>
        <Animated.Text
          className={`text-xs font-nunito-500 mt-2 ${props.index === props.activeTabKey ? ' text-secondary font-nunito-700' : 'text-gray-9'}`}
        >
          {props.categoryItem.name}
        </Animated.Text>
      </Pressable>
    </Box>
  );
};

export default CategoryTabViewItem;
