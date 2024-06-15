import { Box, Text } from 'native-base';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { Svg } from '@/assets';
import styles from '@/styles';
import { CategoryTabViewList, CategoryTypeList, ProductFavoriteList } from '..';
import ProductList from '../ProductList';
import { tabBarRoutes } from './data';
import { heightScreen, widthScreen } from '@/utils';

// const renderScene = SceneMap({
//   deals: ProductList,
//   'for-me': ProductList,
//   pizza: ProductList,
//   starters: ProductList,
//   'salads-and-pasta': ProductList,
//   drinks: ProductFavoriteList,
// });
const renderScene = SceneMap({
  deals: ProductList,
  'for-me': () => <></>,
  pizza: () => <></>,
  starters: () => <></>,
  'salads-and-pasta': () => <></>,
  drinks: () => <></>,
});

const CategoryTabViewGroup = () => {
  const topCategoriesRef = useRef<FlatList>();

  const [activeTabKey, setActiveTabKey] = useState<number>(0);

  const handleScrollToIndex = (index: number) => {
    topCategoriesRef.current?.scrollToIndex({
      index: index,
      viewPosition: 0.5,
    });

    setActiveTabKey(index);
  };

  return (
    <Box className='relative h-screen flex-1' style={styles.shadowX}>
      <Box className='absolute left-2 px-2 flex justify-center items-center flex-col pr-4'>
        <Box
          className='bg-secondary w-14 h-14 rounded-full flex justify-center items-center'
          style={styles.shadowSecondary}
        >
          <Svg.FoodMenu width={36} height={36} className='text-white mt-1' />
        </Box>
        <Text className='text-[13px] text-secondary font-nunito-700 mt-2'>Menu</Text>
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
          />
        )}
        initialLayout={{
          height: heightScreen,
          width: widthScreen,
        }}
        onIndexChange={setActiveTabKey}
        onSwipeStart={() => handleScrollToIndex(activeTabKey)}
      />

      <CategoryTypeList />
    </Box>
  );
};

export default CategoryTabViewGroup;
