import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PathName } from 'src/constants';
import {
  ExchangePointDetailScreen,
  HomeScreen,
  MyPromotionScreen,
  NotificationScreen,
  PromotionDetailScreen,
  SignInScreen,
  StoreScreen,
} from 'src/screens';
import BottomNavigator from './BottomNavigator';
import AboutUsScreen from 'src/screens/OtherScreen/AboutUsScreen';
import DeliveryScreen from '@/screens/DeliveryScreen';

const RootStack = createStackNavigator();

const optionsMain = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const optionsRoot = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const optionForBottomSheet = {
  cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
};

const RootStackNavigator = () => {
  let routeName: string;

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName}
    >
      {/* Authentication Screens */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={optionsRoot}
      />
      {/* <RootStack.Screen
          name={PathName.PATH_SCREEN.REGISTER_SCREEN}
          component={RegisterScreen}
          options={optionsRoot}
        /> */}

      {/* Main Screen */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.MAIN}
        component={HomeScreen}
        options={optionsRoot}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.STORE_DETAIL_SCREEN}
        component={StoreScreen}
        options={optionsRoot}
      />

      {/* Notification Screen */}

      {/* Notification Screen */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={optionsRoot}
      />

      {/* MyPromotion  Screen*/}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.MY_PROMOTION_SCREEN}
        component={MyPromotionScreen}
        options={optionsRoot}
      />
      <RootStack.Screen
        name={PathName.PATH_SCREEN.PROMOTION_DETAIL_SCREEN}
        component={PromotionDetailScreen}
        options={optionForBottomSheet}
      />
      <RootStack.Screen
        name={PathName.PATH_SCREEN.EXCHANGE_POINT_DETAIL_SCREEN}
        component={ExchangePointDetailScreen}
        options={optionForBottomSheet}
      />

      {/* ABOUT US */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.ABOUT_US_SCREEN}
        component={AboutUsScreen}
        options={optionForBottomSheet}
      />
      <RootStack.Screen
        name={PathName.PATH_SCREEN.DELIVERY_SCREEN}
        component={DeliveryScreen}
        options={optionsMain}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
