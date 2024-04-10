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
  OrderStoreToPickUpScreen,
  OrderPaymentInformationScreen,
  OrderConfirmed,
} from '@/screens';
import { Platform } from 'react-native';

const RootStack = createStackNavigator();

const usePlatformAppropriateOption = () => {
  return Platform.select({
    ios: {
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    },
    android: {
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    },
  });
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
      <RootStack.Screen name={PATH_SCREEN.HOME_SCREEN} component={HomeScreen} options={usePlatformAppropriateOption} />

      {/* Authentication Screens */}
      <RootStack.Screen
        name={PATH_SCREEN.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={usePlatformAppropriateOption}
      />

      {/* Categories Screens */}
      <RootStack.Screen
        name={PATH_SCREEN.CATEGORIES_SCREEN}
        component={CategoryScreen}
        options={usePlatformAppropriateOption}
      />

      {/* Product Detail Screens */}
      <RootStack.Screen
        name={PATH_SCREEN.PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={usePlatformAppropriateOption}
      />

      {/* Cart Screens */}
      <RootStack.Screen name={PATH_SCREEN.CART_SCREEN} component={CartScreen} options={usePlatformAppropriateOption} />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_INFORMATION_SCREEN}
        component={OrderInformationScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_STORE_TO_PICK_UP_SCREEN}
        component={OrderStoreToPickUpScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_PAYMENT_RESULT_SCREEN}
        component={OrderPaymentInformationScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_CONFIRMED}
        component={OrderConfirmed}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.DELIVERY_AND_PICKUP_SCREEN}
        component={DeliveryAndPickupScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN}
        component={TermAndConditionsScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen name={PATH_SCREEN.FAQS_SCREEN} component={FAQsScreen} options={usePlatformAppropriateOption} />

      <RootStack.Screen
        name={PATH_SCREEN.PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.NUTRITION_INFORMATION_SCREEN}
        component={NutritionInformationScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.MY_PROFILE_SCREEN}
        component={MyProfileScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.UPDATE_PROFILE_SCREEN}
        component={UpdateProfileScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ADDRESS_SAVED_SCREEN}
        component={AddressSavedScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ADDRESS_UPDATE_SCREEN}
        component={AddressUpdateScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_HISTORY_SCREEN}
        component={OrderHistoryScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.NOTIFICATION_SCREEN}
        component={NotificationScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.ORDER_DETAIL_SCREEN}
        component={OrderDetailScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.VOUCHER_SCREEN}
        component={VoucherScreen}
        options={usePlatformAppropriateOption}
      />

      <RootStack.Screen
        name={PATH_SCREEN.VERIFY_OTP_SCREEN}
        component={VerifyOTPScreen}
        options={usePlatformAppropriateOption}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
