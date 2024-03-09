import { Text, Skeleton } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { ExpandItemProps } from './type';

const ExpandItem = ({ label, isLoading, value = 'Chưa có thông tin' }: ExpandItemProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const expandAnimation = useRef(new Animated.Value(50)).current;
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isLoading) {
      toggleExpand();
    }
  }, [isExpand, isLoading]);

  const toggleExpand = () => {
    Animated.timing(expandAnimation, {
      toValue: isExpand ? 500 : 50,
      useNativeDriver: false,
      easing: Easing.linear,
      duration: isExpand ? 500 : 200,
    }).start();
    Animated.timing(rotateAnimation, {
      toValue: isExpand ? 1 : 0,
      useNativeDriver: false,
      easing: Easing.linear,
      duration: 200,
    }).start();
  };

  const interpolatedRotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View
      className='border-b border-zinc-300'
      style={[
        {
          maxHeight: expandAnimation,
          overflow: 'hidden',
        },
      ]}
    >
      <TouchableOpacity className='flex-row py-3 px-5' onPress={() => setIsExpand(!isExpand)}>
        {isLoading ? (
          <Skeleton className='h-5 rounded-lg' />
        ) : (
          <Text className='text-zinc-700 font-nunito-700 flex-1'>{label}</Text>
        )}
        {!isLoading && (
          <Animated.View
            style={{
              transform: [
                {
                  rotate: interpolatedRotate,
                },
              ],
            }}
          >
            <Svg.ArrowDown width={23} height={23} className='text-zinc-700' />
          </Animated.View>
        )}
      </TouchableOpacity>
      <Text className='font-nunito-500 pt-1 pb-2 px-6 text-zinc-500'>{value}</Text>
    </Animated.View>
  );
};

export default ExpandItem;
