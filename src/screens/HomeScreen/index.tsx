import { useIsFocused } from '@react-navigation/native';
import { createRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from 'native-base';

import { RefreshControl, SideBar } from '@/components';
import { useFetchAllBanner, useFetchAllCategories } from '@/hooks';
import styles from '@/styles';
import { BuyAction, BuyQueueTutorial, Header, HomeCategory, HomeSlider, ProductList } from './components';

type HomeScreenRefType = {
  toggleOpenSideBar(): void;
};

export const homeScreenRef = createRef<HomeScreenRefType>();

const HomeScreen = () => {
  const isFocus = useIsFocused();

  const [isOpenSideBar, setIsOpenSidebar] = useState<boolean>(true);

  const [isLoadingData, setIsLoadingData] = useState<boolean>();

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

  const {
    data: categoriesData,
    isFetching: isFetchingCategories,
    refetch: refetchCategories,
  } = useFetchAllCategories();

  const { data: bannersData, isFetching: isFetchingBanners, refetch: refetchBanners } = useFetchAllBanner();

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

  const refetchHomeData = async () => {
    setIsLoadingData(true);
    await Promise.all([refetchCategories(), refetchBanners()]);
    setIsLoadingData(false);
  };

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
              refreshControl={<RefreshControl refreshing={isLoadingData} onRefresh={refetchHomeData} />}
            >
              <View className='flex-1'>
                <BuyAction />
                <HomeSlider data={bannersData} isLoading={isFetchingBanners} />
                <HomeCategory data={categoriesData} isLoading={isFetchingCategories} />
                <BuyQueueTutorial />
                <Box className='mt-4 w-screen'>
                  {categoriesData?.map((category, key) => (
                    <ProductList
                      key={key}
                      {...category}
                      isLoading={isFetchingCategories}
                      isRefetching={isLoadingData}
                    />
                  ))}
                </Box>
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
