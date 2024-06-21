import { Box, ScrollView, Text } from 'native-base';
import { useMemo, useRef, useState } from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { SceneRendererProps, TabView } from 'react-native-tab-view';

import { Svg } from '@/assets';
import FavoriteListIcon from '@/assets/images/favorite-list.png';
import { useFetchAllCategories } from '@/hooks';
import styles from '@/styles';
import { widthScreen } from '@/utils';
import { CategoryTabViewList, CategoryTypeList, ProductFavoriteList } from '..';
import ProductList from '../ProductList';

const CategoryTabViewGroup = () => {
  const topCategoriesRef = useRef<FlatList>();

  const [activeTabKey, setActiveTabKey] = useState<number>(0);

  const { data: categoriesData, isFetching: isFetchingCategory, refetch } = useFetchAllCategories();

  const handleScrollToIndex = (index: number) => {
    topCategoriesRef.current?.scrollToIndex({
      index: index,
      viewPosition: 0.5,
    });

    setActiveTabKey(index);
  };

  const tabBarRoutes = useMemo(() => {
    if (categoriesData && categoriesData.length > 0)
      return [
        ...categoriesData.map((category) => ({
          key: category._id,
          name: category.name,
        })),
        // TODO: USE SPECIAL KEY FOR FAVORITE PRODUCT
        { key: 'favorite', name: 'Favorite', icon: FavoriteListIcon },
      ];

    //TODO: MISSING RETURN EMPTY VALUE
  }, [categoriesData]);

  const renderTabBar = () => (
    <CategoryTabViewList
      tabBarRoutes={tabBarRoutes}
      ref={topCategoriesRef}
      activeTabKey={activeTabKey}
      onScrollToIndex={handleScrollToIndex}
    />
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
    // TODO: USE SPECIAL KEY FOR FAVORITE PRODUCT
    if (route.key.includes('favorite')) return <ProductFavoriteList />;
    return <ProductList categoryId={route.key} />;
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
