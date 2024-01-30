import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import theme from 'src/themes';

export default (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TextInput> &
    Readonly<TextInputProps>,
) => {
  const {
    color = theme.colors.textNormal,
    fontSize = theme.fontSize.small,
    fontFamily = theme.fontFamily.medium,
    width = '100%'
  } = StyleSheet.flatten(props.style || {});

  return (
    <TextInput
      {...props}
      allowFontScaling={false}
      placeholderTextColor={theme.colors.placeholderTextInput}
      style={[props.style, {fontFamily: fontFamily, color, fontSize, width}]}>
      {props.children}
    </TextInput>
  );
};
