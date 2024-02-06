/* eslint-disable react-native/no-inline-styles */
import { Svg } from '@/assets';
import styles from '@/styles';
import {
  ColorValue,
  SafeAreaView,
  StatusBarStyle,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { MyStatusBar } from 'src/components';

interface Props {
  statusBarBackgroundColor?: ColorValue;
  barStyle?: null | StatusBarStyle | undefined;
  style?: StyleProp<ViewStyle>;
  goBack?(): void;
  title: string;
  children?: JSX.Element | JSX.Element[];
}
const SecondLayout = (props: Props) => {
  return (
    <>
      <MyStatusBar
        backgroundColor={props.statusBarBackgroundColor || 'transparent'}
        barStyle={props.barStyle || 'dark-content'}
      />
      <SafeAreaView className="flex-1 bg-gray-5">
        {/* <HeaderBar
          title={props.title}
          onBack={() => {
            props.goBack ? props.goBack() : goBack();
          }}
        /> */}
        <View className="mx-3 mt-2">
          <TouchableOpacity
            style={styles.shadowX}
            className="w-10 h-10 items-center justify-center bg-gray-5 rounded-lg"
          >
            <Svg.ArrowLeft width={25} height={25} />
          </TouchableOpacity>
        </View>
        <View style={[props.style, { flex: 1 }]}>{props.children}</View>
      </SafeAreaView>
    </>
  );
};

export default SecondLayout;
