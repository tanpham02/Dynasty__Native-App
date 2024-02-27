import { createDrawerNavigator } from '@react-navigation/drawer';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { PathName } from '@/constants';
import {
  AddressSavedScreen,
  AddressUpdateScreen,
  CategoryScreen,
  DeliveryAndPickupScreenScreen,
  FAQsScreen,
  FeedbackScreen,
  HomeScreen,
  MyProfileScreen,
  NotificationScreen,
  NutritionInformationScreen,
  OrderDetailScreen,
  OrderHistoryScreen,
  PrivacyPolicyScreen,
  SignInScreen,
  TermAndConditionsScreen,
  UpdateProfileScreen,
} from '@/screens';
import ProductDetail from '@/screens/CategoryScreen/components/ProductDetail';

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
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      //   drawerContent={() => <SideBar />}
      initialRouteName={PathName.PATH_SCREEN.HOME_SCREEN}
    >
      {/* Main Screen */}
      <RootStack.Screen name={PathName.PATH_SCREEN.HOME_SCREEN} component={HomeScreen} options={optionsMain} />

      {/* Authentication Screens */}
      <RootStack.Screen name={PathName.PATH_SCREEN.SIGN_IN_SCREEN} component={SignInScreen} options={optionsRoot} />

      {/* Categories Screens */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.CATEGORIES_SCREEN}
        component={CategoryScreen}
        options={optionsRoot}
      />

      {/* Product Detail Screens */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.PRODUCT_DETAIL_SCREEN}
        component={ProductDetail}
        options={optionsRoot}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.DELIVERY_AND_PICKUP_SCREEN}
        component={DeliveryAndPickupScreenScreen}
        options={optionsMain}
      />

      <RootStack.Screen name={PathName.PATH_SCREEN.FEEDBACK_SCREEN} component={FeedbackScreen} options={optionsMain} />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN}
        component={TermAndConditionsScreen}
        options={optionsMain}
      />

      <RootStack.Screen name={PathName.PATH_SCREEN.FAQS_SCREEN} component={FAQsScreen} options={optionsMain} />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.NUTRITION_INFORMATION_SCREEN}
        component={NutritionInformationScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.MY_PROFILE_SCREEN}
        component={MyProfileScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.UPDATE_PROFILE_SCREEN}
        component={UpdateProfileScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.ADDRESS_SAVED_SCREEN}
        component={AddressSavedScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.ADDRESS_UPDATE_SCREEN}
        component={AddressUpdateScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.ORDER_HISTORY_SCREEN}
        component={OrderHistoryScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.ORDER_DETAIL_SCREEN}
        component={OrderDetailScreen}
        options={optionsMain}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
