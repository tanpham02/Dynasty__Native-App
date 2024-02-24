import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { Svg } from '@/assets';
import DataRow from '../DataRow';
import { PathName } from '@/constants';
import { OrderStatusTag } from '@/components';
import { DateUtils, NavigationUtils, NumberUtils } from '@/utils';

const OrderHistoryItem = () => {
  const viewOrderDetail = () => NavigationUtils.navigate(PathName.PATH_SCREEN.ORDER_DETAIL_SCREEN);

  return (
    <TouchableOpacity
      className="bg-white border border-zinc-100 mx-3 my-2 p-4 rounded-lg"
      style={styles.shadowX}
    >
      <OrderStatusTag />
      <DataRow Icon={Svg.Note} label="Mã đơn hàng" value="#12445" />
      <DataRow
        Icon={Svg.Clock}
        label="Thời gian đặt"
        value={DateUtils.formatDate(new Date(), DateUtils.DATE_FORMAT_HHMMDDMMYYYY)}
      />
      <DataRow Icon={Svg.Product} label="Sản phẩm" value="Pizza hải sản đào, Pepsi lon vị chanh" />
      <DataRow
        Icon={Svg.Coin}
        label="Tổng giá trị"
        value={NumberUtils.formatCurrencyByLocale(199547)}
      />
      <Box className="flex-row gap-4 pt-2">
        <TouchableOpacity
          className="flex-1 items-center py-2 px-1 border rounded-lg border-zinc-500"
          onPress={viewOrderDetail}
        >
          <Text className="font-nunito-700 text-zinc-500">Xem chi tiết</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center py-2 px-1 bg-primary rounded-lg">
          <Text className="text-white font-nunito-700 text-sm">Mua lại</Text>
        </TouchableOpacity>
      </Box>
    </TouchableOpacity>
  );
};

export default OrderHistoryItem;
