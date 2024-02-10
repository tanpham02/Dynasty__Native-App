import { heightScreen, widthScreen } from '@/utils/systemUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    shadowX: {
        shadowColor: '#777777',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 5.0,
        elevation: 4,
    },
    shadowSecondary: {
        shadowColor: '#d52415',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10.0,
        elevation: 20,
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
        width: widthScreen * 0.4,
    },
});

export default styles;
