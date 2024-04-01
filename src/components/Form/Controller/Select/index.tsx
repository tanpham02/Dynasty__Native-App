import { Box, Text, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormUnController } from '@/components';
import { FormSelectProps } from './type';

const FormSelect = <T,>(props: FormSelectProps<T>) => {
  const { name, rules, label, isRequired, wrapperClassName, options, isFormController = true } = props;
  const { FormSelect } = FormUnController;

  const { control } = useFormContext<T>();

  return (
    <Box>
      {/* FIXME: RENDER LABEL CODE IS REPEATED AT ALL FORM COMPONENT */}
      {label && (
        <Text className='text-[13.5px] font-nunito-700 text-gray-10 mr-1 block mb-0.5'>
          {label}
          {isRequired && <Text className='font-nunito-700 text-danger'> *</Text>}
        </Text>
      )}
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
              {...props}
            />
            {/* FIXME: RENDER ERROR CODE IS REPEATED AT ALL FORM COMPONENT */}
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
export default FormSelect;
