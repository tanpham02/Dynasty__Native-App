import { useIsFocused } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { Platform, StatusBar } from 'react-native';

const useStatusBarForAndroid = (currentColor?: any) => {
  const isFocus = useIsFocused();

  useEffect(() => {
    setTimeout(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(currentColor ?? 'transparent');
        StatusBar.setTranslucent(true);
      }
    }, 4000);
  }, [isFocus, currentColor]);
};

export default useStatusBarForAndroid;
