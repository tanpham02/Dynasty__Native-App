import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Text } from 'src/components';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';
import { navigate } from 'App';
import { PathName } from 'src/constants';

const PromotionFlatListItem = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate(PathName.PATH_SCREEN.PROMOTION_DETAIL_SCREEN)}
    >
      <Image
        style={styles.bannerImage}
        source={require('src/assets/images/promotion-screen-images/promotion-test.png')}
      />
      <View style={styles.contentView}>
        <View style={styles.infoView}>
          <Text style={styles.titleText}>Mua 1 tặng 1 freeship</Text>
          <Text style={styles.descriptionText}>Hết hạn trong 5 ngày</Text>
        </View>
      </View>
      <LinearGradientButton title={'Áp dụng ngay'} style={styles.submitBtn} />
    </TouchableOpacity>
  );
};

export default PromotionFlatListItem;
