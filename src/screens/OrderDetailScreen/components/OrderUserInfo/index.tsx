import { Box, Text } from 'native-base';

import RowData from '../RowData';

const OrderUserInfo = () => {
  return (
    <Box className="">
      <Text className="font-nunito-700 text-sm text-zinc-800">Thông tin người đặt hàng</Text>
      <RowData label="Họ và tên" value="Phạm Văn Tân" />
      <RowData label="Số điện thoại" value="0984316437" />
      <RowData
        label="Địa chỉ giao hàng"
        value="12 Tân Bình, Thành Phố Hồ Chí Minh12 Tân Bình, Thành Phố Hồ Chí Minh"
      />
      <RowData label="Ghi chú đơn hàng" value="Nhớ giao hàng vào giờ hành chính" />
    </Box>
  );
};

export default OrderUserInfo;
