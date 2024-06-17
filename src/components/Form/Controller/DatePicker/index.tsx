import { Box, Modal, Pressable, Text, WarningOutlineIcon } from 'native-base';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-native-neat-date-picker';

import { DATE_FORMAT_DDMMYYYY, formatDate } from '@/utils';
import { FormDatePickerProps } from './type';
import { FieldLabel } from '@/components';

const FormDatePicker = <T,>(props: FormDatePickerProps<T>) => {
  const secondaryColor = '#e8002a';

  const datePickerColorOptions = {
    headerColor: secondaryColor,
    selectedDateBackgroundColor: secondaryColor,
    weekDaysColor: secondaryColor,
    changeYearModalColor: secondaryColor,
    confirmButtonColor: secondaryColor,
  };

  const { wrapperClassName, name, label, isRequired, placeholder, ...desc } = props;

  const { setValue, getFieldState, watch, getValues } = useFormContext<T>();

  const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);

  const datePickerState = getFieldState(name);

  const currentDatePicked = watch(name);

  const toggleOpen = () => setIsOpenDatePicker(!isOpenDatePicker);

  const onConfirmSingle = (output) => {
    setValue(name, output?.date, {
      shouldDirty: true,
    });
    console.log('date', getValues(name));
    toggleOpen();
  };

  return (
    <Box className={wrapperClassName}>
      <FieldLabel isRequired={isRequired} label={label} />
      <Pressable
        onPress={toggleOpen}
        className='bg-gray-13 h-[45px] justify-center px-4 border border-gray-12 rounded-lg'
      >
        <Text className={`font-nunito-600 ${!currentDatePicked && 'text-zinc-400'}`}>
          {currentDatePicked ? formatDate(currentDatePicked as string, DATE_FORMAT_DDMMYYYY) : placeholder}
        </Text>
      </Pressable>
      {datePickerState?.error && (
        <Box className='flex-row items-center'>
          <WarningOutlineIcon size='xs' color='#ff0505' />
          <Text className='text-danger ml-1 font-nunito-600 text-[11.5px]'>{datePickerState.error.message}</Text>
        </Box>
      )}
      <Modal isOpen={isOpenDatePicker} className='items-center justify-center' onClose={toggleOpen}>
        <DatePicker
          isVisible
          withoutModal
          language='vi'
          mode='single'
          onCancel={toggleOpen}
          onConfirm={onConfirmSingle}
          colorOptions={datePickerColorOptions}
          initialDate={currentDatePicked ? new Date(currentDatePicked as string) : new Date()}
          {...desc}
        />
      </Modal>
    </Box>
  );
};

export default FormDatePicker;
