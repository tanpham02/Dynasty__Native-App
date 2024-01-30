/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ColorValue, SafeAreaView, StatusBarStyle, StyleProp, View, ViewStyle } from 'react-native';
import { HeaderBar, MyStatusBar } from 'src/components';
import { goBack } from '../../../../App';

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
        backgroundColor={props.statusBarBackgroundColor || 'white'}
        barStyle={props.barStyle || 'dark-content'}
      />
      <SafeAreaView style={[{ flex: 1 }]}>
        <HeaderBar
          title={props.title}
          onBack={() => {
            props.goBack ? props.goBack() : goBack();
          }}
        />
        <View style={[props.style, { flex: 1 }]}>{props.children}</View>
      </SafeAreaView>
    </>
  );
};

export default SecondLayout;
