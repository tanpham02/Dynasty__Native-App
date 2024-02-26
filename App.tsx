import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { NativeBaseProvider } from 'native-base';
import { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Font as MyFont } from '@/assets';
import GlobalLoading, { globalLoadingRef } from '@/components/GlobalLoading';
import { TokenManager } from '@/helpers';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import store from '@/redux/store';
import { NavigationUtils } from '@/utils';

LogBox.ignoreAllLogs();
export const tokenManager = TokenManager.getInstance();

export const queryClient = new QueryClient();

export default function App() {
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
          <NavigationContainer ref={NavigationUtils.navigationRef}>
            <RootStackNavigator />
            <FlashMessage position='bottom' floating />
          </NavigationContainer>
          <GlobalLoading ref={globalLoadingRef} />
        </Provider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
