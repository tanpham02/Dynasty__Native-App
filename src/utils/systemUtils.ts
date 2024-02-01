import { Dimensions } from 'react-native';

import { NativeModules } from 'react-native';

interface SettingsManager {
  AppleLanguages?: string[];
}

interface I18nManager {
  localeIdentifier?: string;
}

export const getSystemLocale = (): string => {
  let locale: string | undefined;

  // iOS
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    (NativeModules.SettingsManager.settings as SettingsManager).AppleLanguages
  ) {
    locale = (NativeModules.SettingsManager.settings as SettingsManager).AppleLanguages[0];
  }
  // Android
  else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (typeof locale === 'undefined') {
    console.log('Could not get locale');
    return 'en';
  }

  return locale;
};

export const {
  width: widthScreen,
  height: heightScreen,
  scale: scaleScreen,
  fontScale: fontScaleScreen,
} = Dimensions.get('window');
