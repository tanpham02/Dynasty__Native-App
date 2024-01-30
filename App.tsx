import {
  NavigationContainer,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { LogBox, useColorScheme } from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import BottomSheetModal from 'src/components/BottomSheetModal';
import { TamaguiProvider, Theme } from 'tamagui';
import { Provider } from 'react-redux';

import config from './tamagui.config';
import TokenManager from 'src/helpers/tokenManager';
import RootStackNavigator from 'src/navigation/RootStackNavigator';
import SplashLogo from 'src/assets/images/logo/splash-screen.png';
import GlobalLoading, { globalLoadingRef } from '@/components/GlobalLoading';
import { heightScreen, widthScreen } from '@/utils/systemUtils';
import store from 'src/redux/store';

LogBox.ignoreAllLogs();
export const tokenManager = TokenManager.getInstance();

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

export const replace = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const getCurrentRoute = async () => {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      if (navigationRef.isReady()) {
        clearInterval(interval);
        resolve(navigationRef.getCurrentRoute());
      }
    }, 500);
  });
};

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

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);

  const loadFont = async () => {
    await Font.loadAsync({
      'Nunito-Black': require('src/assets/fonts/Nunito-Black.ttf'),
      'Nunito-Bold': require('src/assets/fonts/Nunito-Bold.ttf'),
      'Nunito-ExtraBold': require('src/assets/fonts/Nunito-ExtraBold.ttf'),
      'Nunito-SemiBold': require('src/assets/fonts/Nunito-SemiBold.ttf'),
      'Nunito-Medium': require('src/assets/fonts/Nunito-Medium.ttf'),
      'Nunito-Regular': require('src/assets/fonts/Nunito-Regular.ttf'),
      'Nunito-Light': require('src/assets/fonts/Nunito-Light.ttf'),
      'Nunito-ExtraLight': require('src/assets/fonts/Nunito-ExtraLight.ttf'),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
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
              <AnimatedSplash
                translucent={true}
                disableBackgroundImage={false}
                isLoaded={isLoaded}
                logoImage={SplashLogo}
                backgroundColor={'#FAFBDB'}
                logoHeight={heightScreen}
                logoWidth={widthScreen}
              >
                <>
                  <RootStackNavigator />
                  <FlashMessage position="bottom" floating />
                  <BottomSheetModal />
                </>
              </AnimatedSplash>
            </NavigationContainer>
            <GlobalLoading ref={globalLoadingRef} />
          </Provider>
        </QueryClientProvider>
      </Theme>
    </TamaguiProvider>
  );
}
