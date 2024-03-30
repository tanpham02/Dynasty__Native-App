import { Box, Radio, Text, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, Path, useFormContext } from 'react-hook-form';

import { FormRadioProps } from './type';

const FormRadio = <T,>({
  fieldName,
  defaultValue,
  children,
  wrapperClassName,
  className,
  label,
  isRequired,
}: FormRadioProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Box>
      {label && (
        <Text className='text-[13.5px] font-nunito-700 text-gray-10 mr-1 block mb-0.5'>
          {label}
          {isRequired && <Text className='font-nunito-700 text-danger'>*</Text>}
        </Text>
      )}
      <Controller
        control={control}
        name={fieldName as Path<T>}
        render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
          <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
            <Radio.Group
              ref={ref as any}
              onChange={onChange}
              defaultValue={defaultValue}
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
