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
  FAQsScreen,
  PrivacyPolicyScreen,
  NutritionInformationScreen,
  MyProfileScreen,
  UpdateProfileScreen,
  AddressSavedScreen,
  AddressUpdateScreen,
  OrderHistoryScreen,
} from '@/screens';
import SideBar from '@/components/SideBar';
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

      {/* Product Detail Screens */}
      <RootStack.Screen
        name={PathName.PATH_SCREEN.PRODUCT_DETAIL}
        component={ProductDetail}
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

      <RootStack.Screen
        name={PathName.PATH_SCREEN.FAQS_SCREEN}
        component={FAQsScreen}
        options={optionsMain}
      />

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
        name={PathName.PATH_SCREEN.MY_PROFILE}
        component={MyProfileScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.UPDATE_PROFILE}
        component={UpdateProfileScreen}
        options={optionsMain}
      />

      <RootStack.Screen
        name={PathName.PATH_SCREEN.ADDRESS_SAVED}
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
    </Drawer.Navigator>
  );
};

export default RootStackNavigator;
