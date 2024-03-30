import { Box, CheckIcon, Select, Text, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormSelectProps } from './type';
import { Svg } from '@/assets';
import { border } from 'native-base/lib/typescript/theme/styled-system';

const FormSelect = <T,>(props: FormSelectProps<T>) => {
  const {
    name,
    rules,
    className,
    label,
    isRequired,
    wrapperClassName,
    options,
    allowClear,
    borderColor = '#e1e1e1',
  } = props;
  const { control } = useFormContext<T>();

  const handleClearValueSelected = (cb: (...event: any[]) => void) => {
    cb('');
  };

  return (
    <Box>
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
        render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
          <Box className={`flex flex-col gap-[.2px] ${wrapperClassName}`}>
            <Select
              ref={ref as any}
              onValueChange={onChange}
              selectedValue={value as string}
              borderRadius='lg'
              dropdownIcon={
                value && allowClear ? (
                  <Svg.TimesCircle
                    width={19}
                    height={19}
                    className='text-gray-9 mr-3'
                    onPress={() => handleClearValueSelected(onChange)}
                  />
                ) : (
                  <Svg.ArrowDown width={20} height={20} className='text-gray-9 mr-3' />
                )
              }
              borderColor={error ? '#ff0505' : borderColor}
              _selectedItem={{
                endIcon: (
                  <CheckIcon
                    size='sm'
                    color='#00b041'
                    style={{
                      position: 'absolute',
                      top: 50,
                      right: 5,
                      transform: [{ translateY: -47 }],
                    }}
                  />
                ),
                backgroundColor: '#eeeeee',
                borderRadius: 'lg',
                _pressed: {
                  backgroundColor: '#eeeeee',
                },
                _focus: {
                  backgroundColor: '#eeeeee',
                },
              }}
              _item={{
                borderRadius: 'lg',
                _pressed: {
                  backgroundColor: '#eeeeee',
                },
                _focus: {
                  backgroundColor: '#eeeeee',
                },
              }}
              backgroundColor='#fafafa'
              placeholderTextColor='#999'
              className={`!rounded-lg px-4 h-[45px] text-sm font-nunito-600  ${className}`}
              {...props}
            >
              {options.length ? (
                options.map((options, index) => <Select.Item key={index} label={options.label} value={options.value} />)
              ) : (
                <></>
              )}
            </Select>
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
