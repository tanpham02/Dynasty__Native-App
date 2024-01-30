import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

const useStatusBarForAndroid = () => {
  const isFocus = useIsFocused();

  useEffect(() => {
    setTimeout(() => {
      if (Platform.OS === 'android') {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
      }
    }, 2000);
  }, [isFocus]);
};

export default useStatusBarForAndroid;
