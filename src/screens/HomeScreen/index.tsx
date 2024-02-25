import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SideBar } from '@/components';
import styles from '@/styles';
import {
  BuyAction,
  BuyQueueTutorial,
  Header,
  HomeCategory,
  HomeSlider,
  ProductList,
} from './components';

const HomeScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const openSideBar = useRef(new Animated.Value(0)).current;
  const isOpenSideBar = useRef<boolean>(false);

  //   useEffect(() => {
  //     return () => {
  //       if (isOpenSideBar.current) toggleOpenSideBar();
  //     };
  //   }, []);

  //   useFocusEffect(
  //     React.useCallback(() => {
  //       isOpenSideBar.current = false; // Reset isOpenSideBar to false when the screen is focused
  //       return () => {
  //         // Cleanup function if needed
  //       };
  //     }, [])
  //   );

  const toggleOpenSideBar = () => {
    Animated.timing(openSideBar, {
      toValue: isOpenSideBar.current ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
    isOpenSideBar.current = !isOpenSideBar.current;
  };

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
    <View className="flex-1 bg-white">
      <Animated.View
        className="flex-1"
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
        className="flex-1 bg-third absolute"
        style={[
          {
            top: interpolatedTop,
            left: interpolatedLeft,
            bottom: interpolatedTop,
          },
          styles.shadowX,
        ]}
      >
        <View className="flex-1">
          <SafeAreaView className="flex-1">
            <View className="flex-1">
              <Header onPress={toggleOpenSideBar} />
              <Animated.ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                  useNativeDriver: true,
                })}
              >
                <View className="flex-1">
                  <BuyAction />
                  <HomeSlider />
                  <HomeCategory />
                  <BuyQueueTutorial />
                  {Array.from({ length: 10 }).map((_, key) => (
                    <ProductList key={key} />
                  ))}
                </View>
              </Animated.ScrollView>
            </View>
          </SafeAreaView>
        </View>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
