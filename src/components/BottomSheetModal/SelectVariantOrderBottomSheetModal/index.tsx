import { BottomSheetMethods } from '@devvie/bottom-sheet';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import CloseSvg from '@/assets/svg/pizza.svg';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import BottomSheet from 'src/components/customs/BottomSheet';
import ScrollView from 'src/components/customs/ScrollView';
import TextInput from 'src/components/customs/TextInput';
import RadioButtonSvg from 'src/components/svg/RadioButtonSvg';
import theme from 'src/themes';
import Text from '../../customs/Text';
import styles from './styles';
import { BottomSheetModalProps } from './types';
import { confirmOrderBottomSheetModalRef } from '../ConfirmOrderBottomSheetModal';
import CheckBoxSvg from 'src/components/svg/CheckBoxSvg';

export const selectVariantOrderBottomSheetModalRef = React.createRef<BottomSheetMethods>();

const SelectVariantOrderBottomSheetModal = React.forwardRef<
  BottomSheetMethods,
  BottomSheetModalProps
>((__props, ref) => {
  const handleClose = () => {
    selectVariantOrderBottomSheetModalRef?.current?.close();
  };

  const handleSubmit = () => {
    confirmOrderBottomSheetModalRef?.current?.open();
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
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentView}>
            <Text style={styles.priceText}>35.000đ</Text>
            <Text style={styles.descriptionText}>
              Sản phẩm được làm từ những nguyên liệu tươi ngon, đảm bảo an toàn vệ sinh thực phẩm,
              với sự chăm sóc kỹ lưỡng và tinh tế ...
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMoreText}>Xem thêm</Text>
            </TouchableOpacity>
            <View style={styles.radioButtonGroupView}>
              <View style={styles.radioButtonOptionView}>
                <Text style={styles.optionTitleText}>Size</Text>
                {[...Array(3)].map((__item, index) => (
                  <TouchableOpacity key={index} style={styles.radioButton}>
                    <View style={styles.radioInfoView}>
                      <RadioButtonSvg height="15" width="15" checked />
                      <Text style={styles.radioButtonNameText}>Size lớn</Text>
                    </View>
                    <Text style={styles.radioButtonPriceText}>35.000đ</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.radioButtonOptionView}>
                <Text style={styles.optionTitleText}>Topping</Text>
                {[...Array(3)].map((__item, index) => (
                  <TouchableOpacity key={index} style={styles.radioButton}>
                    <View style={styles.radioInfoView}>
                      <CheckBoxSvg height="15" width="15" checked />
                      <Text style={styles.radioButtonNameText}>Thạch trái cây</Text>
                    </View>
                    <Text style={styles.radioButtonPriceText}>35.000đ</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TextInput
                placeholder="Yêu cầu khác"
                placeholderTextColor={theme.colors.textNormal}
                multiline
                numberOfLines={4}
                style={styles.noteInputText}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <View style={styles.numberView}>
            <TouchableOpacity style={styles.numberButton}>
              <Text style={styles.numberButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.valueText}>2</Text>
            <TouchableOpacity style={styles.numberButton}>
              <Text style={styles.numberButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <LinearGradientButton
            title="Chọn 70.000đ"
            style={styles.submitButton}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </BottomSheet>
  );
});

export default SelectVariantOrderBottomSheetModal;
