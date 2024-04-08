import { Box, Radio, Text } from 'native-base';
import { PaymentMethodItemProps } from './type';
import { Pressable } from 'react-native';

const PaymentMethodItem = ({ Svg, title, type, onPressPaymentMethodItem }: PaymentMethodItemProps) => {
  return (
    <Box className='flex-row items-center justify-start mb-4 max-w-full'>
      <Radio value={type} size='sm' colorScheme='success' className='mr-1' />
      <Pressable onPress={onPressPaymentMethodItem} className='flex-row items-center justify-start gap-x-2 flex-1'>
        <Svg width={32} height={32} />
        <Text className='flex-1 font-nunito-600 text-sm'>{title}</Text>
      </Pressable>
    </Box>
  );
};

export default PaymentMethodItem;
