import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import CartSvg from 'src/assets/svg/cart-icon.svg';
import { Text } from 'src/components';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import styles from './styles';
import { ProductFlatListItemType } from './types';
import { formatMoneyVND } from 'src/utils/numberUtils';

const ProductFlatListItem = ({ productName, price, image, onPress }: ProductFlatListItemType) => {
  const renderIcon = () => {
    if (React.isValidElement(image)) {
      return image;
    } else if (typeof image === 'string') {
      return <Image source={{ uri: image }} style={styles.bannerImage} />;
    } else {
      return <Image source={image} style={styles.bannerImage} />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {renderIcon()}
      <View style={styles.contentView}>
        <View style={styles.infoView}>
          <Text style={styles.titleText}>{productName}</Text>
          <Text style={styles.descriptionText}>{`${formatMoneyVND(price | 0)}đ`}</Text>
        </View>
      </View>
      <LinearGradientButton icon={<CartSvg width={14} height={14} />} style={styles.submitBtn} />
    </TouchableOpacity>
  );
};

export default ProductFlatListItem;
