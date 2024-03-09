import React, { memo, useRef } from 'react';
import { Animated, Pressable } from 'react-native';

import { ButtonPrimaryAnimatedProps } from './type';

const ButtonPrimaryAnimated = ({ children, className, onPress }: ButtonPrimaryAnimatedProps) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const interpolateLeft = translateX.interpolate({ inputRange: [0, 1], outputRange: [-150, 200] });

  Animated.loop(
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Pressable
      onPress={onPress}
      className={`bg-white rounded-lg p-2 flex flex-row items-center justify-between relative overflow-hidden  ${className}`}
    >
      {children}
      <Animated.View
        style={[
          {
            position: 'absolute',
            backgroundColor: '#e8002a',
            top: 0,
            bottom: 0,
            width: 200,
            height: 35,
            opacity: 0.25,
          },
          {
            transform: [{ translateX: interpolateLeft }, { rotateZ: '-45deg' }],
          },
        ]}
      />
    </Pressable>
  );
};

export default memo(ButtonPrimaryAnimated);
