import { Box } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native';

import { FieldLabel } from '@/components';
import { FormInputProps } from './type';

const FormInput = (props: FormInputProps) => {
  const { className, label, wrapperClassName, rootClassName, value, onChangeText } = props;

  return (
    <Box className={rootClassName}>
      <FieldLabel label={label} />
      <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          selectionColor='#111111'
          placeholderTextColor='#999'
          selectTextOnFocus={false}
          className={`border border-gray-12 rounded-lg px-4 h-[45px] bg-gray-13 text-sm font-nunito-600 ${className}`}
          {...props}
        />
      </Box>
    </Box>
  );
};
export default FormInput;
