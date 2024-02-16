import { Box, Image, Text } from 'native-base';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { Svg } from '@/assets';
import styles from '@/styles';
import { heightScreen, widthScreen } from '@/utils';
import { tabBarRoutes } from './data';
import CategoryTabViewList from '../CategoryTabViewList';
import CategoryTypeList from '../CategoryTypeList';

const FirstRoute = () => (
  <FlatList
    scrollEventThrottle={16}
    pagingEnabled
    keyExtractor={(_, index) => `${index}`}
    horizontal={false}
    showsVerticalScrollIndicator={false}
    snapToAlignment="center"
    style={{
      height: heightScreen,
      flexGrow: 0,
      backgroundColor: 'white',
      width: widthScreen,
    }}
    className="absolute top-[55px] left-0 right-0 bottom-0"
    data={[
      ...new Array(10).fill({
        url: 'https://thepizzacompany.vn/images/thumbs/000/0002258_spaghetti-bolognese_300.png',
      }),
    ]}
    renderItem={({ index, item }) => (
      <Box key={index} className="flex-1 p-4">
        <Image src={item?.url} width="full" height={200} />
      </Box>
    )}
  />
);

const renderScene = SceneMap({
  deals: FirstRoute,
  'for-me': FirstRoute,
  pizza: FirstRoute,
  starters: FirstRoute,
  'salads-and-pasta': FirstRoute,
  drinks: FirstRoute,
});

const CategoryTabViewGroup = () => {
  const topCategoriesRef = useRef<FlatList>();

  const [activeTabKey, setActiveTabKey] = useState<number>(0);

  const handleScrollToIndex = (index: number) => {
    if (index === tabBarRoutes.length - 1) {
      return;
    }
    topCategoriesRef.current?.scrollToIndex({
      index: index,
      viewPosition: 0.5,
    });
  };

  return (
    <Box className="flex-1 px-1.5 flex items-center relative" style={styles.shadowX}>
      <Box className="flex-1 min-h-[200px]">
        <Box className="absolute left-2 flex justify-center items-center flex-col pr-4">
          <Box
            className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center"
            style={styles.shadowSecondary}
          >
            <Svg.FoodMenu width={36} height={36} className="text-white mt-1" />
          </Box>
          <Text className="text-[13px] text-secondary font-nunito-700 mt-2">Menu</Text>
        </Box>
        <TabView
          navigationState={{
            index: activeTabKey,
            routes: tabBarRoutes,
          }}
          renderScene={renderScene}
          renderTabBar={() => (
            <CategoryTabViewList
              ref={topCategoriesRef}
              activeTabKey={activeTabKey}
              onScrollToIndex={handleScrollToIndex}
              setActiveTabKey={setActiveTabKey}
            />
          )}
          onIndexChange={setActiveTabKey}
          initialLayout={{
            width: widthScreen,
          }}
          onSwipeStart={() => handleScrollToIndex(activeTabKey)}
        />
      </Box>

      <Box className="absolute left-0 top-[90px] shadow-2xl">
        <CategoryTypeList />
      </Box>
    </Box>
  );
};

export default CategoryTabViewGroup;
