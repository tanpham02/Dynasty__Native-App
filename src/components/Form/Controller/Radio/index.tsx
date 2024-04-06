import { Box, Radio, Text, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, Path, useFormContext } from 'react-hook-form';

import { FieldLabel } from '@/components';
import { FormRadioProps } from './type';

const FormRadio = <T,>(props: FormRadioProps<T>) => {
  const { fieldName, children, wrapperClassName, className, label, isRequired, rootClassName } = props;
  const { control } = useFormContext<T>();

  return (
    <Box className={rootClassName}>
      <FieldLabel isRequired={isRequired} label={label} />
      <Controller
        control={control}
        name={fieldName as Path<T>}
        render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
          <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
            <Radio.Group
              ref={ref as any}
              onChange={onChange}
              value={value as string}
              name={fieldName}
              className={`${className}`}
            >
              {children}
            </Radio.Group>

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

export default FormRadio;
