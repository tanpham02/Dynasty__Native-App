import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import GlobalLoading, { globalLoadingRef } from '@/components/GlobalLoading';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import { Font as MyFont } from '@/assets';
import TokenManager from '@/helpers/tokenManager';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import store from '@/redux/store';
import * as Font from 'expo-font';
import { LogBox, useColorScheme } from 'react-native';
import FlashMessage from 'react-native-flash-message';

LogBox.ignoreAllLogs();
export const tokenManager = TokenManager.getInstance();

export const navigationRef = createNavigationContainerRef();

type GetParams = {
  [key: string]: any;
};
export const getParams = (): GetParams => {
  let currentParams = {};
  if (navigationRef.isReady()) {
    currentParams = navigationRef.getCurrentRoute()?.params as any;
  }

  return currentParams;
};

export const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);

  const loadFont = async () => {
    await Font.loadAsync({
      'Nunito-Black': MyFont.NunitoBlack,
      'Nunito-ExtraBold': MyFont.NunitoExtraBold,
      'Nunito-Bold': MyFont.NunitoBold,
      'Nunito-SemiBold': MyFont.NunitoSemiBold,
      'Nunito-Medium': MyFont.NunitoMedium,
      'Nunito-Regular': MyFont.NunitoRegular,
      'Nunito-Light': MyFont.NunitoLight,
      'Nunito-ExtraLight': MyFont.NunitoExtraLight,
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <RootStackNavigator />
            <FlashMessage position="bottom" floating />
          </NavigationContainer>
          <GlobalLoading ref={globalLoadingRef} />
        </Provider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
