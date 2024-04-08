import { Box, Radio, Text, WarningOutlineIcon } from 'native-base';
import { Controller, Path, useFormContext } from 'react-hook-form';

import { FieldLabel } from '@/components';
import { FormRadioProps } from './type';

const FormRadio = <T,>(props: FormRadioProps<T>) => {
  const { fieldName, children, wrapperClassName, className, label, isRequired, rootClassName, name } = props;
  const { control } = useFormContext<T>();
  const colorError = '#ff0505';

  return (
    <Box className={rootClassName}>
      <FieldLabel isRequired={isRequired} label={label} />
      <Controller
        control={control}
        name={fieldName as Path<T>}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
            <Radio.Group onChange={onChange} value={value as string} name={name} className={className} {...props}>
              {children}
            </Radio.Group>

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

export default FormRadio;
