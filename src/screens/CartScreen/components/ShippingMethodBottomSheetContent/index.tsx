import { Box, Divider, Image, Text } from 'native-base';
import { Pressable } from 'react-native';

import { Svg } from '@/assets';
import { ShippingMethodBottomSheetContentProps } from './type';

const ShippingMethodBottomSheetContent = ({
  image,
  title,
  isActive,
  renderContent,
  onSelect,
}: ShippingMethodBottomSheetContentProps) => {
  return (
    <Pressable
      className={`relative flex-row justify-between items-center mb-4 border rounded-lg py-4 px-2 ${isActive ? 'border-primary' : 'border-[#e1e1e1] '} min-h-[200px]`}
      onPress={onSelect}
    >
      <Image
        source={image}
        style={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          marginRight: 12,
        }}
      />
      <Box className='flex-1'>
        <Text className='text-[15.5px] font-nunito-700 text-primary mb-2'>{title}</Text>
        <Divider />
        <Box className='text-start mt-2'>{renderContent()}</Box>
      </Box>
      {isActive && (
        <Box className='absolute top-1.5 right-1.5 bg-success p-1 rounded-full'>
          <Svg.Checked width={12} height={12} className='text-white' />
        </Box>
      )}
    </Pressable>
  );
};

export default ShippingMethodBottomSheetContent;
