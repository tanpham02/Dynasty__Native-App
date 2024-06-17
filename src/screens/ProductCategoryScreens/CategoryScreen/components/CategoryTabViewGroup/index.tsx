import { Box, Text } from 'native-base';
import { useRef, useState } from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { SceneRendererProps, TabView } from 'react-native-tab-view';

import { Svg } from '@/assets';
import styles from '@/styles';
import { widthScreen } from '@/utils';
import { CategoryTabViewList, CategoryTypeList, ProductFavoriteList } from '..';
import ProductList from '../ProductList';
import { tabBarRoutes } from './data';

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

  const renderTabBar = () => (
    <CategoryTabViewList ref={topCategoriesRef} activeTabKey={activeTabKey} onScrollToIndex={handleScrollToIndex} />
  );

  const renderScene = ({
    route,
  }: SceneRendererProps & {
    route: {
      key: string;
      name: string;
      icon?: ImageSourcePropType;
    };
  }) => {
    switch (route.key) {
      case 'deals':
        return <ProductList />;

      case 'for-me':
        return <></>;

      case 'pizza':
        return <></>;

      case 'starters':
        return <></>;

      case 'salads-and-pasta':
        return <></>;

      case 'favorite':
        return <ProductFavoriteList />;

      default:
        return <></>;
    }
  };

  return (
    <Box className='relative flex-1' style={styles.shadowX}>
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
        initialLayout={{
          width: widthScreen,
        }}
        navigationState={{
          index: activeTabKey,
          routes: tabBarRoutes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setActiveTabKey}
        onSwipeStart={() => handleScrollToIndex(activeTabKey)}
      />

      <CategoryTypeList />
    </Box>
  );
};

export default CategoryTabViewGroup;
