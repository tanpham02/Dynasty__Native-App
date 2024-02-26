import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { ProductVariantTabListProps } from './type';
import { widthScreen } from '@/utils';
import { tabBarRoutes } from '../../data';
import ProductVariantTabItem from '../ProductVariantTabItem';

const renderScene = SceneMap({
  size: ProductVariantTabItem,
  crust: ProductVariantTabItem,
});

const ProductVariantTabList = (props: ProductVariantTabListProps) => {
  const { activeTabKey, setActiveTabKey } = props;
  return (
    <TabView
      navigationState={{
        index: activeTabKey,
        routes: tabBarRoutes,
      }}
      renderScene={renderScene}
      renderTabBar={() => (
        <ProductVariantTabItem
          //   ref={topCategoriesRef}
          activeTabKey={activeTabKey}
          //   onScrollToIndex={handleScrollToIndex}
          setActiveTabKey={setActiveTabKey}
        />
      )}
      onIndexChange={setActiveTabKey}
      initialLayout={{
        width: widthScreen,
      }}
    />
  );
};

export default ProductVariantTabList;
