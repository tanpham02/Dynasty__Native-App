import styles from '@/styles';
import { widthScreen } from '@/utils';
import { NavigationState } from '@react-navigation/native';
import { Avatar, Box, Text } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, SceneRendererProps, TabView } from 'react-native-tab-view';

const tabBarRoutes: NavigationState['routes'] = [
  { key: 'deals', name: 'Deals' },
  { key: 'for-me', name: 'For Me' },
  { key: 'pizza', name: 'Pizza' },
  { key: 'starters', name: 'Starters' },
  { key: 'salads-and-pasta', name: 'Salads & Pasta' },
  { key: 'drinks', name: 'Drinks' },
];

const FirstRoute = () => (
  <Box className="flex-1 w-screen">
    <Text>{Math.ceil(Math.random() * 10)}</Text>
  </Box>
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
  const [activeTabKey, setActiveTabKey] = useState<number>(0);

  const topCategoriesRef = useRef<FlatList>();

  const handleScrollToIndex = (index: number) => {
    topCategoriesRef.current?.scrollToIndex({
      index: index,
      viewPosition: 0.5,
    });
  };

  const renderTabBar = () => {
    return (
      <FlatList
        scrollEventThrottle={16}
        pagingEnabled
        keyExtractor={(_, index) => `${index}`}
        data={tabBarRoutes.map((item) => ({ ...item, title: item.name }))}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: 90,
          flexGrow: 0,
        }}
        snapToAlignment="center"
        ref={topCategoriesRef}
        className="ml-20"
        renderItem={({ index, item }) => {
          return (
            <Box className={`border-[3px] mr-3 border-transparent mb-2 ${activeTabKey}`}>
              <Pressable
                onPress={() => {
                  setActiveTabKey(index);
                  handleScrollToIndex(index);
                }}
                className="flex justify-center items-center"
                style={styles.shadowX}
              >
                <Avatar
                  source={{
                    uri: 'https://thepizzacompany.vn/images/thumbs/000/0003785_trufflemushroomsaucebroccoli_500.png',
                  }}
                  className={`w-[55px] h-[55px] rounded-full border `}
                  borderColor={index === activeTabKey ? '#e8002a' : 'white'}
                  style={styles.shadowX}
                />
                <Animated.Text
                  className={`text-gray-9 text-xs font-nunito-400 border-b-[2px] mt-2 ${index === activeTabKey ? ' border-b-secondary-2 text-secondary-2 font-nunito-600' : 'border-transparent'}`}
                >
                  {item.name}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        }}
      />
    );
  };

  return (
    <Box>
      <TabView
        navigationState={{
          index: activeTabKey,
          routes: tabBarRoutes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setActiveTabKey}
        initialLayout={{
          width: widthScreen,
        }}
        onSwipeStart={() => handleScrollToIndex(activeTabKey)}
      />
    </Box>
  );
};

export default CategoryTabViewGroup;
