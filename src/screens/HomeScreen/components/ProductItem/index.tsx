import { Animated, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Text } from 'src/components';
import { ProductItemType } from './types';
import { formatMoneyVND } from 'src/utils/numberUtils';

const ProductItem = (props: ProductItemType) => {
  const { bannerImage, productName, productPrice, width } = props;

  return (
    <TouchableOpacity style={[styles.promotionCardView, { width: width }]}>
      <Animated.Image style={[styles.bannerImage]} source={bannerImage} />
      <View style={styles.infoGroupView}>
        <View style={styles.infoView}>
          <Text style={styles.productNameText}>{productName}</Text>
          <Text style={styles.productPriceText}>{formatMoneyVND(productPrice)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
