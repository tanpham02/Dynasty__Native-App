import { Box, Text, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput } from 'react-native';

import { FormInputProps } from './type';
import { FieldLabel } from '@/components';

const FormInput = <T,>(props: FormInputProps<T>) => {
  const { name, rules, className, label, isRequired, wrapperClassName, rootClassName } = props;
  const { control } = useFormContext<T>();

  return (
    <Box className={rootClassName}>
      <FieldLabel isRequired={isRequired} label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
          <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
            <TextInput
              onChangeText={onChange}
              value={value as string}
              ref={ref}
              spellCheck={false}
              selectionColor='#111111'
              placeholderTextColor='#999'
              selectTextOnFocus={false}
              className={`border rounded-lg px-4 h-[45px] bg-gray-13 text-sm font-nunito-600 ${error ? ' border-danger' : 'border-gray-12'} ${className}`}
              {...props}
            />
            {error && (
              <Box className='flex-row items-center'>
                <WarningOutlineIcon size='xs' color='#ff0505' />
                <Text className='text-danger ml-1 font-nunito-600 text-[11.5px]'>{error.message}</Text>
              </Box>
            )}
          </Box>
        )}
      />
    </Box>
  );
};
export default FormInput;
