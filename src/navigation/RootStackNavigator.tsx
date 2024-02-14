import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { PathName } from '@/constants';
import {
  FeedbackScreen,
  HomeScreen,
  SignInScreen,
  TermAndConditionsScreen,
  CategoryScreen,
  DeliveryScreen,
} from '@/screens';
import SideBar from '@/components/SideBar';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const optionsMain = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const optionsRoot = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const RootStackNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={() => <SideBar />}
      initialRouteName={PathName.PATH_SCREEN.MAIN}
    >
      {/* Main Screen */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.MAIN}
        component={HomeScreen}
        options={optionsMain}
      />

      {/* Authentication Screens */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={optionsRoot}
      />

      {/* Categories Screens */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.CATEGORIES}
        component={CategoryScreen}
        options={optionsRoot}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.DELIVERY_SCREEN}
        component={DeliveryScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN}
        component={TermAndConditionsScreen}
        options={optionsMain}
      />
    </Drawer.Navigator>
  );
};

export default RootStackNavigator;
