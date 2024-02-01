import { BottomSheetMethods } from '@devvie/bottom-sheet';
import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import CloseSvg from '@/assets/svg/pizza.svg';
import OrderDetailSvg from '@/assets/svg/pizza.svg';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import BottomSheet from 'src/components/customs/BottomSheet';
import Text from 'src/components/customs/Text';
import theme from 'src/themes';
import ProductFlatListItem from './components/ProductFlatListItem';
import styles from './styles';
import { ConfirmOrderBottomSheetModalProps } from './types';
import { navigate } from 'App';
import { PathName } from 'src/constants';
import { paymentBottomSheetModalRef } from '../PaymentBottomSheetModal';

export const confirmOrderBottomSheetModalRef = React.createRef<BottomSheetMethods>();

const ConfirmOrderBottomSheetModal = React.forwardRef<
  BottomSheetMethods,
  ConfirmOrderBottomSheetModalProps
>((__props, ref) => {
  const handleClose = () => {
    confirmOrderBottomSheetModalRef?.current?.close();
  };

  const handleChangeStore = () => {
    navigate(PathName.PATH_SCREEN.STORE_DETAIL_SCREEN);
  };

  const handleOpenPaymentMethod = () => {
    paymentBottomSheetModalRef?.current?.open();
  };

  return (
    <BottomSheet ref={ref} height={'90%'}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.titleText}>Trà Chanh Mật Ong Giã Tay </Text>
          <TouchableOpacity
            style={[styles.closeButton, theme.stylesPrimary.shadow]}
            onPress={handleClose}
          >
            <CloseSvg />
          </TouchableOpacity>
        </View>
        <View style={styles.contentView}>
          <View style={styles.contentHeaderView}>
            <View style={styles.contentHeaderLeftView}>
              <OrderDetailSvg />
              <Text style={styles.contentHeaderLeftText}>Chi tiết đơn</Text>
            </View>
            <LinearGradientButton title="+ Thêm" style={styles.addProductButton} />
          </View>
          <FlatList
            style={styles.swipeListView}
            nestedScrollEnabled
            keyExtractor={(_, index) => index.toString()}
            data={[{}, {}]}
            renderItem={() => <ProductFlatListItem />}
          />
          <View style={styles.contentDetailView}>
            <View style={styles.textGroupView}>
              <Text style={styles.groupLeftText}>Thành tiền</Text>
              <Text style={[styles.groupRightText, { color: theme.colors.textValueBold }]}>
                35.000đ
              </Text>
            </View>
            <View style={styles.textGroupView}>
              <Text style={styles.groupLeftText}>Phí ship</Text>
              <Text style={styles.groupRightText}>0đ</Text>
            </View>
            <View style={styles.textGroupView}>
              <Text style={styles.groupLeftText}>Số điểm sử dụng</Text>
              <Text style={styles.groupRightText}>-10.000đ</Text>
            </View>
          </View>
          <View
            style={[styles.textGroupView, { paddingTop: theme.spacing.paddingVerticalContent / 2 }]}
          >
            <Text style={styles.groupLeftText}>Tổng điểm tích lũy</Text>
            <Text style={styles.groupRightText}>1.830 điểm</Text>
          </View>
        </View>
        <View style={styles.storeView}>
          <View style={styles.contentHeaderView}>
            <View style={styles.contentHeaderLeftView}>
              <OrderDetailSvg />
              <Text style={styles.contentHeaderLeftText}>Lấy tại cửa hàng</Text>
            </View>
            <LinearGradientButton
              title="Thay đổi"
              style={styles.changeStoreButton}
              onPress={handleChangeStore}
            />
          </View>
          <View style={styles.addressStoreView}>
            <View style={styles.dotView}></View>
            <Text style={styles.addressStoreText}>43 Hoa Hồng, Q. Phú Nhuận, Tp. HCM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.paymentSelectButton} onPress={handleOpenPaymentMethod}>
          <Text style={styles.paymentSelectText}>Chọn phương thức thanh toán</Text>
        </TouchableOpacity>
      </View>
      <View>
        <LinearGradientButton
          title="Thanh toán"
          style={styles.submitButton}
          // onPress={handleSubmit}
        />
      </View>
    </BottomSheet>
  );
});

export default ConfirmOrderBottomSheetModal;
