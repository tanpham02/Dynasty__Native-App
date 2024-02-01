import { BottomSheetMethods } from '@devvie/bottom-sheet';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import CloseSvg from '@/assets/svg/pizza.svg';
import BottomSheet from 'src/components/customs/BottomSheet';
import Text from 'src/components/customs/Text';
import theme from 'src/themes';
import styles from './styles';
import { PaymentBottomSheetModalProps } from './types';
import PaymentFlatListItem from './components/PaymentFlatListItem';
import { PaymentFlatListItemProps } from './components/PaymentFlatListItem/types';

export const paymentBottomSheetModalRef = React.createRef<BottomSheetMethods>();

const data: PaymentFlatListItemProps[] = [
  {
    title: 'VnPay',
    image: require('src/assets/images/payment-screen-images/vn-pay.png'),
    checked: true,
  },
  {
    title: 'ZaloPay',
    image: require('src/assets/images/payment-screen-images/zalo-pay.png'),
    checked: false,
  },
  {
    title: 'Momo',
    image: require('src/assets/images/payment-screen-images/momo.png'),
    checked: false,
  },
  {
    title: 'Tiền mặt',
    image: require('src/assets/images/payment-screen-images/cash.png'),
    checked: false,
  },
];

const PaymentBottomSheetModal = React.forwardRef<BottomSheetMethods, PaymentBottomSheetModalProps>(
  (__props, ref) => {
    const handleClose = () => {
      paymentBottomSheetModalRef?.current?.close();
    };

    return (
      <BottomSheet ref={ref} height={300}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.titleText}>Phương thức thanh toán</Text>
            <TouchableOpacity
              style={[styles.closeButton, theme.stylesPrimary.shadow]}
              onPress={handleClose}
            >
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.titleContentText}>
              Vui lòng chọn phương thức thanh toán phù hợp cho đơn hàng của bạn
            </Text>
          </View>
          <FlatList
            data={data}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            // ItemSeparatorComponent={SeparatorItem}
            renderItem={({ item }) => <PaymentFlatListItem {...item} />}
          />
        </View>
      </BottomSheet>
    );
  },
);

export default PaymentBottomSheetModal;
