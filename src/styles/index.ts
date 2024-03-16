import { heightScreen, widthScreen } from '@/utils/systemUtils';
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  shadowX: {
    shadowColor: '#777777',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: 10,
  },
  shadowSecondary: {
    shadowColor: '#e8002a',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2.0,
    elevation: 10,
  },
  shadowPrimary: {
    shadowColor: '#006a31',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2.0,
    elevation: 10,
  },
  //   shadowX: {
  //     shadowColor: '#5e5e5e',
  //     shadowOffset: { width: 0, height: 5 },
  //     shadowOpacity: 0.35,
  //     shadowRadius: 10.0,
  //     elevation: 24,
  //   },
  heightOnePerFive: {
    height: heightScreen * 0.2,
  },
  widthFourPerFiveScreen: {
    width: widthScreen * 0.8,
  },
  widthTwoPerFive: {
    width: widthScreen * 0.44,
  },
  colorPrimary: {
    color: '#006a31',
  },
  colorSecondary: {
    color: '#e8002a',
  },
  colorThird: {
    color: '#f5faff',
  },
  colorFourth: {
    color: '#1077e6',
  },
});

export default styles;
