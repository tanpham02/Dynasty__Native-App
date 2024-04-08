import { useIsFocused } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useHomeLayout = () => {
  const isFocus = useIsFocused();

  const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);

  const sidebarAniValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //close sidebar with delay when navigate to other screen
    let timer = null;
    if (!isFocus && !isOpenSideBar) {
      timer = setTimeout(() => {
        toggleOpenSideBar();
      }, 200);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isFocus, isOpenSideBar]);

  const toggleOpenSideBar = () => {
    Animated.timing(sidebarAniValue, {
      toValue: isOpenSideBar ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsOpenSidebar(!isOpenSideBar);
  };

  const interpolatedTop = sidebarAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '15%'],
  });

  const interpolatedLeft = sidebarAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '60%'],
  });

  const interpolatedScale = sidebarAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.2, 1],
  });

  const interpolatedOpacity = sidebarAniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return {
    isOpenSideBar,
    toggleOpenSideBar,
    interpolatedTop,
    interpolatedLeft,
    interpolatedScale,
    interpolatedOpacity,
  } as const;
};
