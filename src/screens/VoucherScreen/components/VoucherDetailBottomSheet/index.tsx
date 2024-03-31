import * as Clipboard from 'expo-clipboard';
import { Actionsheet, Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { Svg } from '@/assets';
import { ButtonPrimary } from '@/components';
import { DATE_FORMAT_DDMMYYYY, formatDate } from '@/utils';
import RowData from '../RowData';
import VoucherDecoration from '../VoucherDecoration';
import { VoucherDetailBottomSheetProps } from './type';

const VoucherDetailBottomSheet = ({ isOpen, onClose }: VoucherDetailBottomSheetProps) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('COMBACK25');
    showMessage({
      message: 'Sao chép mã voucher thành công!',
      type: 'success',
    });
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content className='min-h-[200px] bg-white'>
        <TouchableOpacity
          className='w-8 h-8 rounded-full items-center justify-center absolute top-2 right-2'
          onPress={onClose}
        >
          <Svg.Close width={20} height={20} className='text-black' />
        </TouchableOpacity>
        <Box className='w-full px-4'>
          <Text className='font-nunito-600 text-[13px] text-center text-zinc-600'>Dynasty Pizza</Text>
          <Text className='font-nunito-700 text-lg text-center text-zinc-900 mt-2'>Dynasty Pizza Comeback Offer</Text>
        </Box>
        <VoucherDecoration />
        <Box className='w-full px-4 mb-6'>
          <Box className='items-center'>
            <Svg.Coupon width={120} height={120} className='text-black' />
            <TouchableOpacity className='flex-row items-center gap-x-2' onPress={copyToClipboard}>
              <Text className='uppercase font-nunito-700 text-zinc-600'>COMBACK25</Text>
              <Svg.Copy width={16} height={16} className='text-zinc-600' />
            </TouchableOpacity>
            <ButtonPrimary title='Bắt đầu đặt hàng' color='danger' containerClass='px-4 rounded-[30px] mt-4' />
          </Box>
          <RowData label='Ngày hết hạn: ' value={formatDate(new Date(), DATE_FORMAT_DDMMYYYY)} />
          <Text className='py-4 text-sm text-zinc-700 font-nunito-500'>
            - Mua 1 Pizza từ size M và 1 thức uống bất kỳ được giảm ngay 50% khi mua Pizza thứ 2, cùng cỡ. Bánh Pizza
            thứ 2 có giá trị bằng hoặc thấp hơn so với Pizza thứ nhất. - Áp dụng tất cả các ngày trong tuần. Áp dụng cho
            dịch vụ mua mang về khi đặt hàng qua Hotline 19006066 hoặc Website. Áp dụng cho giao hàng tận nơi khi đặt
            hàng qua Hotline 19006066 hoặc Website. - Giao hàng tận nơi với hóa đơn từ 100.000đ trở lên và trong phạm vi
            bán kính 4km. Không áp dụng chung với các chương trình khuyến mãi, giảm giá khác. Không áp dụng cho menu
            Pizza Chất. - Với mỗi hóa đơn có sản phẩm thuộc chương trình khuyến mại Giảm 50% Pizza thứ hai, phụ thu phí
            giao hàng 25,000VND/đơn khi đặt hàng qua Hotline 19006066 hoặc Website.
          </Text>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default VoucherDetailBottomSheet;
