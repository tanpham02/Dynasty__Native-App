import { Box, ScrollView, Text, View } from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FlatList, TouchableOpacity } from 'react-native';

import { PrimaryLayout } from '@/components';
import { OrderStatusTag } from './components';
import { useState } from 'react';
import { widthScreen } from '@/utils';

const orderStatus = [
  {
    label: 'Mới',
  },
  {
    label: 'Chờ xác nhận',
  },
  {
    label: 'Đang giao',
  },
  {
    label: 'Hoàn thành',
  },
  {
    label: 'Đã hủy',
  },
];

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
  fourth: FirstRoute,
  fifth: FirstRoute,
});

const OrderHistoryScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Mới' },
    { key: 'second', title: 'Chờ xác nhận' },
    { key: 'third', title: 'Đang giao' },
    { key: 'fourth', title: 'Đã hoàn thành' },
    { key: 'fifth', title: 'Đã hủy' },
  ]);
  return (
    <PrimaryLayout titleScreen="Lịch sử đơn hàng">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: widthScreen }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: 'pink' }}
            tabStyle={{ backgroundColor: 'white' }}
            renderLabel={({ route, focused, color }) => (
              <Text style={{ color: focused ? '#ff9900' : '#000000', margin: 2 }}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </PrimaryLayout>
  );
};

export default OrderHistoryScreen;
