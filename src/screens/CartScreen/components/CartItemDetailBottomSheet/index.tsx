import { Actionsheet, Box, Image, Text } from 'native-base';

import { ButtonPrimary } from '@/components';
import { formatCurrencyByLocale } from '@/utils';
import { View } from 'react-native';
import { CartItemDetailBottomSheetProps } from './type';

const CartItemDetailBottomSheet = ({ visible, onClose, productId }: CartItemDetailBottomSheetProps) => {
  return (
    <Actionsheet isOpen={visible} onClose={onClose}>
      <Actionsheet.Content>
        <Box className='px-2 py-2 min-h-[50px] justify-start'>
          <Box w='100%' className='mb-4 flex flex-row gap-2'>
            <Box className='border border-zinc-100 w-[70px] h-[70px] rounded-xl bg-white flex justify-start'>
              <Image
                source={{
                  uri: 'https://thepizzacompany.vn/images/thumbs/000/0002222_ca-bacon_500.png',
                }}
                width={70}
                height={70}
                resizeMode='cover'
                className='rounded-xl'
                alt='image'
              />
            </Box>
            <Box>
              <Text className='text-gray-10 font-nunito-700 text-lg'>Pizza Thịt Nguội Kiểu Canada</Text>
              <Text className='text-secondary font-nunito-700 text-xs'>{formatCurrencyByLocale(159000)}</Text>
            </Box>
          </Box>
          <Box w='100%'>
            <Text className='text-gray-10 font-nunito-700 text-[12.3px] mb-2'>Kích thước Nhỏ 6” - Đế Dày</Text>
            <Text className='font-nunito-400 text-xs text-gray-10'>
              Bánh Pizza siêu thượng hạng với vô vàn loại thịt đặc biệt như xúc xích bò, giăm bông, thịt xông khói. Bánh
              Pizza siêu thượng hạng với vô vàn loại thịt đặc biệt như xúc xích bò, giăm bông, thịt xông khói. Bánh
              Pizza siêu thượng hạng với vô vàn loại thịt đặc biệt như xúc xích bò, giăm bông, thịt xông khói. Bánh
              Pizza siêu thượng hạng với vô vàn loại thịt đặc biệt như xúc xích bò, giăm bông, thịt xông khói. Bánh
              Pizza siêu thượng hạng với vô vàn loại thịt đặc biệt như xúc xích bò, giăm bông, thịt xông khói.
            </Text>
          </Box>

          <View className='flex-row justify-between items-center mt-6'>
            <ButtonPrimary
              onPress={onClose}
              title='Đóng'
              containerClass='bg-third w-[48%]'
              textClassName='text-gray-11'
            />
            <ButtonPrimary title='Cập nhật' containerClass='w-[48%]' color='danger' />
          </View>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default CartItemDetailBottomSheet;
