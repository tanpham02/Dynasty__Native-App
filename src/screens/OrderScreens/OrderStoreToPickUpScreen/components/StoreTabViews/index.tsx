import { Box, HStack } from 'native-base';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationState, SceneMap, SceneRendererProps, TabView } from 'react-native-tab-view';

import { widthScreen } from '@/utils';
import { StoreNearestYourLocationList, StoreTabView } from '..';

const StoreTabViews = () => {
  const initialLayout = {
    width: widthScreen,
  };
  const renderScene = SceneMap({
    first: StoreNearestYourLocationList,
    second: StoreNearestYourLocationList,
  });

  const [activeTabView, setActiveTabView] = useState(0);
  const routes = [
    {
      key: 'first',
      title: 'Gần vị trí bạn',
    },
    {
      key: 'second',
      title: 'Cửa hàng lọc được',
    },
  ];

  const handleChangeTab = (index: number) => setActiveTabView(index);

  const renderTabBar = ({
    navigationState: { routes },
  }: SceneRendererProps & {
    navigationState: NavigationState<any>;
  }) => {
    return (
      <HStack space={2} className='flex-row items-center'>
        {routes.map((route, index) => {
          const isActive = index === activeTabView;
          return <StoreTabView isActive={isActive} title={route.title} onPress={() => handleChangeTab(index)} />;
        })}
      </HStack>
    );
  };

  return (
    <Box className='h-full flex-1 mt-2'>
      <TabView
        navigationState={{
          index: activeTabView,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleChangeTab}
        initialLayout={initialLayout}
        style={{
          marginTop: StatusBar.currentHeight,
        }}
      />
    </Box>
  );
};

export default StoreTabViews;
