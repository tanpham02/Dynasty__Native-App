import { Box, Text } from 'native-base';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { Svg } from '@/assets';
import styles from '@/styles';
import { widthScreen } from '@/utils';
import { CategoryTabViewList, CategoryTypeList } from '..';
import { tabBarRoutes } from './data';
import ProductList from '../ProductList';

const renderScene = SceneMap({
  deals: ProductList,
  'for-me': ProductList,
  pizza: ProductList,
  starters: ProductList,
  'salads-and-pasta': ProductList,
  drinks: ProductList,
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
    <Box className='flex-1 flex items-center relative' style={styles.shadowX}>
      <Box className='flex-1 min-h-[200px]'>
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
          onIndexChange={setActiveTabKey}
          initialLayout={{
            width: widthScreen,
          }}
          onSwipeStart={() => handleScrollToIndex(activeTabKey)}
        />
      </Box>

      <Box className='absolute left-0 top-[90px] shadow-2xl flex-1'>
        <CategoryTypeList />
      </Box>
    </Box>
  );
};

export default CategoryTabViewGroup;
