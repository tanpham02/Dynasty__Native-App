import React from 'react';
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import Text from '../customs/Text';
import TextInput from '../customs/TextInput';
import theme from 'src/themes';

interface InputProps {
  title?: string | null | '';
  errors?: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "words" | "sentences" | "characters" | undefined;
  onChangeText?: (text: string) => void;
  value?: string;
  editable?: boolean;
  onBlur?: () => void;
  textInputStyle?: StyleProp<TextStyle>;
}

const Input = ({
  title,
  errors,
  placeholder,
  onChangeText,
  value,
  editable,
  keyboardType,
  autoCapitalize,
  onBlur,
  textInputStyle,
}: InputProps) => {
  return (
    <View style={[styles.inputView, errors ? styles.inputError : null]}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        value={value}
        editable={editable}
        style={textInputStyle || styles.textInput}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: theme.colors.gray,
    height: 70,
    borderRadius: theme.borders.medium,
    paddingHorizontal: theme.spacing.paddingHorizontalContent,
    paddingTop: theme.spacing.paddingTopContent / 2,
    marginTop: theme.spacing.marginTopContent,
  },
  titleText: {
    fontSize: theme.fontSize.medium,
    fontFamily: theme.fontFamily.robotoMedium,
  },
  textInput: {
    width: '100%',
    height: 40,
    color: theme.colors.text,
    fontFamily: theme.fontFamily.robotoBold,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Input;
