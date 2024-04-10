import { View } from 'react-native';
import { Box, ScrollView } from 'native-base';
import React, { memo, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RefreshControl } from '@/components';
import { useHomeData } from './useHomeData';
import { HomeBodyProps } from './type';
import { BuyAction, BuyQueueTutorial, Header, HomeCategory, HomeSlider, ProductList } from '..';

const HomeBody = ({ openSidebar }: HomeBodyProps) => {
  const {
    getUserLoginInfo,
    refetchHomeData,
    isRefetchingHomeData,
    bannersData,
    isFetchingBanners,
    categoriesData,
    isFetchingCategories,
  } = useHomeData();

  useEffect(() => getUserLoginInfo(), []);

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <Header openSidebar={openSidebar} />
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps='always'
          refreshControl={<RefreshControl refreshing={isRefetchingHomeData} onRefresh={refetchHomeData} />}
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
                  isRefetching={isRefetchingHomeData}
                />
              ))}
            </Box>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default memo(HomeBody);
