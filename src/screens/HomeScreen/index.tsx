import { useIsFocused } from '@react-navigation/native';
import { createRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SideBar } from '@/components';
import styles from '@/styles';
import { BuyAction, BuyQueueTutorial, Header, HomeCategory, HomeSlider, ProductList } from './components';

type HomeScreenRefType = {
  toggleOpenSideBar(): void;
};

export const homeScreenRef = createRef<HomeScreenRefType>();

const HomeScreen = () => {
  const isFocus = useIsFocused();

  const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);

  const sidebarAniValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
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

  useImperativeHandle(homeScreenRef, () => ({
    toggleOpenSideBar,
  }));

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

  return (
    <View className='flex-1 bg-white'>
      <Animated.View
        className='flex-1'
        style={{
          transform: [
            {
              scale: interpolatedScale,
            },
          ],
          opacity: sidebarAniValue,
        }}
      >
        <SideBar />
      </Animated.View>
      <Animated.View
        className='flex-1 bg-third absolute'
        style={[
          {
            top: interpolatedTop,
            left: interpolatedLeft,
            bottom: interpolatedTop,
          },
          styles.shadowX,
        ]}
      >
        <SafeAreaView className='flex-1'>
          <View className='flex-1'>
            <Header />
            <ScrollView
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps='always'
            >
              <View className='flex-1'>
                <BuyAction />
                <HomeSlider />
                <HomeCategory />
                <BuyQueueTutorial />
                {Array.from({ length: 10 }).map((_, key) => (
                  <ProductList key={key} />
                ))}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
        {!isOpenSideBar && <View onTouchStart={toggleOpenSideBar} className='absolute top-0 left-0 right-0 bottom-0' />}
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
