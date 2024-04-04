import { Box, CheckIcon, Select } from 'native-base';

import { Svg } from '@/assets';
import FieldLabel from '../../FieldLabel';
import { FormSelectUnControllerProps } from './type';

const FormSelectUnController = (props: FormSelectUnControllerProps) => {
  const {
    value,
    options,
    allowClear,
    label,
    borderColor = '#e1e1e1',
    className,
    wrapperClassName,
    isFormController = false,
    onChange,
  } = props;
  return (
    <Box className={`${wrapperClassName}`}>
      {!isFormController && <FieldLabel label={label} />}
      <Select
        onValueChange={onChange}
        selectedValue={value as string}
        borderRadius='lg'
        dropdownIcon={
          value && allowClear ? (
            <Svg.TimesCircle width={19} height={19} className='text-gray-9 mr-3' onPress={() => onChange('')} />
          ) : (
            <Svg.ArrowDown width={20} height={20} className='text-gray-9 mr-3' />
          )
        }
        borderColor={borderColor}
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
    </Box>
  );
};

export default FormSelectUnController;
