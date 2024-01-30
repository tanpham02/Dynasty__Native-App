import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Text from 'src/components/customs/Text';

const ProductFlatListItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.dotView}></View>
        <Image
          source={require('src/assets/images/home-screen-images/product-test.png')}
          style={styles.bannerImage}
        />
        <View style={styles.infoView}>
          <Text style={styles.productText}>Cafe đá</Text>
          <Text>Size Lớn</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.quantityText}>x1</Text>
        <Text>30.000đ</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductFlatListItem;
