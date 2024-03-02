import { useIsFocused } from '@react-navigation/native';
import { MutableRefObject, createRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Animated, ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SideBar } from '@/components';
import styles from '@/styles';
import { BuyAction, BuyQueueTutorial, Header, HomeCategory, HomeSlider, ProductList } from './components';

type HomeScreenRefType = {
  toggleOpenSideBar(): void;
  isOpenSideBar: MutableRefObject<boolean>;
};

export const homeScreenRef = createRef<HomeScreenRefType>();

const HomeScreen = () => {
  const isOpenSideBar = useRef<boolean>(false);
  const openSideBar = useRef(new Animated.Value(0)).current;

  const isFocus = useIsFocused();

  useEffect(() => {
    let timer = null;

    if (!isFocus && isOpenSideBar.current) {
      timer = setTimeout(() => {
        toggleOpenSideBar();
      }, 200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isFocus]);

  const toggleOpenSideBar = () => {
    isOpenSideBar.current = !isOpenSideBar.current;
    Animated.timing(openSideBar, {
      toValue: isOpenSideBar.current ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  useImperativeHandle(homeScreenRef, () => ({
    toggleOpenSideBar,
    isOpenSideBar: isOpenSideBar,
  }));

  const interpolatedTop = openSideBar.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '15%'],
  });

  const interpolatedLeft = openSideBar.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '60%'],
  });

  const interpolatedScale = openSideBar.interpolate({
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
          opacity: openSideBar,
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
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
