import { Box, Text, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormUnController, FieldLabel } from '@/components';
import { FormSelectProps } from './type';

const FormSelect = <T,>(props: FormSelectProps<T>) => {
  const { name, rules, label, isRequired, wrapperClassName, options, isFormController = true } = props;
  const { FormSelect } = FormUnController;

  const { control } = useFormContext<T>();
  const colorError = '#ff0505';

  return (
    <Box>
      <FieldLabel isRequired={isRequired} label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
            <FormSelect
              options={options}
              name={name}
              value={value as string}
              onChange={onChange}
              isFormController={isFormController}
              borderColor={error ? colorError : '#e1e1e1'}
              {...props}
            />

            {error && (
              <Box className='flex-row items-center'>
                <WarningOutlineIcon size='xs' color={colorError} />
                <Text className='text-danger ml-1 font-nunito-600 text-[11.5px]'>{error.message}</Text>
              </Box>
            )}
          </Box>
        )}
      />
    </Box>
  );
};
export default FormSelect;
