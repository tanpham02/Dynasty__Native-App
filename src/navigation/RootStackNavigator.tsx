import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { PATH_SCREEN } from '@/constants';
import {
  AddressSavedScreen,
  AddressUpdateScreen,
  DeliveryAndPickupScreen,
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
  VoucherScreen,
  CartScreen,
  CategoryScreen,
  ProductDetailScreen,
  VerifyOTPScreen,
  OrderInformationScreen,
} from '@/screens';
import { Platform } from 'react-native';

const RootStack = createStackNavigator();

const optionsMain = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const optionsRoot = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const userPlatformAppropriateOption = () => {
  return Platform.OS === 'ios' ? optionsMain : optionsRoot;
};

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={PATH_SCREEN.HOME_SCREEN}
    >
      {/* Main Screen */}
      <RootStack.Screen name={PATH_SCREEN.HOME_SCREEN} component={HomeScreen} options={userPlatformAppropriateOption} />

      {/* Authentication Screens */}
      <RootStack.Screen
        name={PATH_SCREEN.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={userPlatformAppropriateOption}
      />

      {/* Categories Screens */}
      <RootStack.Screen
        name={PATH_SCREEN.CATEGORIES_SCREEN}
        component={CategoryScreen}
        options={userPlatformAppropriateOption}
      />

      {/* Product Detail Screens */}
      <RootStack.Screen
        name={PATH_SCREEN.PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={userPlatformAppropriateOption}
      />

      {/* Cart Screens */}
      <RootStack.Screen name={PATH_SCREEN.CART_SCREEN} component={CartScreen} options={userPlatformAppropriateOption} />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_INFORMATION_SCREEN}
        component={OrderInformationScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.DELIVERY_AND_PICKUP_SCREEN}
        component={DeliveryAndPickupScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN}
        component={TermAndConditionsScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen name={PATH_SCREEN.FAQS_SCREEN} component={FAQsScreen} options={userPlatformAppropriateOption} />

      <RootStack.Screen
        name={PATH_SCREEN.PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.NUTRITION_INFORMATION_SCREEN}
        component={NutritionInformationScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.MY_PROFILE_SCREEN}
        component={MyProfileScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.UPDATE_PROFILE_SCREEN}
        component={UpdateProfileScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ADDRESS_SAVED_SCREEN}
        component={AddressSavedScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ADDRESS_UPDATE_SCREEN}
        component={AddressUpdateScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_HISTORY_SCREEN}
        component={OrderHistoryScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_DETAIL_SCREEN}
        component={OrderDetailScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.VOUCHER_SCREEN}
        component={VoucherScreen}
        options={userPlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.VERIFY_OTP_SCREEN}
        component={VerifyOTPScreen}
        options={userPlatformAppropriateOption}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
