import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TamaguiProvider, Theme } from 'tamagui';

import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Font from 'expo-font';
import BottomSheetModal from 'src/components/BottomSheetModal';
import GlobalLoading, { globalLoadingRef } from '@/components/GlobalLoading';
import { LogBox, useColorScheme } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Font as MyFont } from 'src/assets';
import TokenManager from 'src/helpers/tokenManager';
import RootStackNavigator from 'src/navigation/RootStackNavigator';
import store from 'src/redux/store';
import config from './tamagui.config';
import SideBar from '@/components/SideBar';

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

const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  const timeoutRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
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

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
              <RootStackNavigator />
              <FlashMessage position="bottom" floating />
              <BottomSheetModal />
              {/* <AnimatedSplash
                translucent={true}
                disableBackgroundImage={false}
                isLoaded={isLoaded}
                logoImage={SplashLogo}
                // backgroundColor={'#006a31'}
                // disableBackgroundImage={true}r
                logoHeight={heightScreen}
                logoWidth={widthScreen + 100}
              > */}

              {/* </AnimatedSplash> */}
            </NavigationContainer>
            <GlobalLoading ref={globalLoadingRef} />
          </Provider>
        </QueryClientProvider>
      </Theme>
    </TamaguiProvider>
  );
}
