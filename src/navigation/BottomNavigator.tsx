import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PathName } from 'src/constants';
import theme from 'src/themes';

import HomeBottomNavigationIcon from 'src/assets/svg/bottom-navigation-icons/home-bottom-menu-icon.svg';
import OrderBottomNavigationIcon from 'src/assets/svg/bottom-navigation-icons/order-bottom-menu-icon.svg';
import StoreBottomNavigationIcon from 'src/assets/svg/bottom-navigation-icons/store-bottom-menu-icon.svg';
import PromotionBottomNavigationIcon from 'src/assets/svg/bottom-navigation-icons/promotion-bottom-menu-icon.svg';
import OtherBottomNavigationIcon from 'src/assets/svg/bottom-navigation-icons/other-bottom-menu-icon.svg';

import { HomeScreen, OrderScreen, OtherScreen, PromotionScreen, StoreScreen } from 'src/screens';

const Tabs = createBottomTabNavigator();
const iconSize = 25;

const BottomNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name={PathName.PATH_SCREEN.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ focused }) => (
            <HomeBottomNavigationIcon
              width={iconSize}
              height={iconSize}
              color={focused ? theme.colors.primary : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={PathName.PATH_SCREEN.ORDER_SCREEN}
        component={OrderScreen}
        options={{
          tabBarLabel: 'Đặt hàng',
          tabBarIcon: ({ focused }) => (
            <OrderBottomNavigationIcon
              width={iconSize}
              height={iconSize}
              color={focused ? theme.colors.primary : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={PathName.PATH_SCREEN.STORE_SCREEN}
        component={StoreScreen}
        options={{
          tabBarLabel: 'Cửa hàng',
          tabBarIcon: ({ focused }) => (
            <StoreBottomNavigationIcon
              width={iconSize}
              height={iconSize}
              color={focused ? theme.colors.primary : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={PathName.PATH_SCREEN.PROMOTION_SCREEN}
        component={PromotionScreen}
        options={{
          tabBarLabel: 'Ưu đãi',
          tabBarIcon: ({ focused }) => (
            <PromotionBottomNavigationIcon
              width={iconSize}
              height={iconSize}
              color={focused ? theme.colors.primary : theme.colors.lightGray}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={PathName.PATH_SCREEN.OTHER_SCREEN}
        component={OtherScreen}
        options={{
          tabBarLabel: 'Khác',
          tabBarIcon: ({ focused }) => (
            <OtherBottomNavigationIcon
              width={iconSize}
              height={iconSize}
              color={focused ? theme.colors.primary : theme.colors.lightGray}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
