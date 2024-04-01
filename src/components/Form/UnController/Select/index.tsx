import { Box, CheckIcon, Select, Text } from 'native-base';

import { FormSelectUnControllerProps } from './type';
import { Svg } from '@/assets';

const FormSelectUnController = ({
  defaultValue,
  value,
  options,
  allowClear,
  label,
  borderColor = '#e1e1e1',
  className,
  wrapperClassName,
  isFormController = false,
  onChange,
}: FormSelectUnControllerProps) => {
  const handleClearValueSelected = (cb?: (...event: any[]) => void) => {
    cb?.('');
  };

  return (
    <Box className={`${wrapperClassName}`}>
      {/* FIXME: RENDER LABEL CODE IS REPEATED AT ALL FORM COMPONENT */}
      {label && !isFormController && (
        <Text className='text-[13.5px] font-nunito-700 text-gray-10 mr-1 block mb-0.5'>{label}</Text>
      )}
      <Select
        onValueChange={onChange}
        selectedValue={(value as string) || (defaultValue as string)}
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
