import { Image, TouchableOpacity, View } from 'react-native';
import { SecondLayout } from 'src/components/Layout';
import CloseSvg from '@/assets/svg/pizza.svg';
import styles from './styles';
import theme from 'src/themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack } from 'App';
import { Text } from 'src/components';
import CopySvg from '@/assets/svg/pizza.svg';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';

const PromotionDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View></View>
        <Text style={styles.titleText}>Mua 1 tặng 1 + Freeship</Text>
        <TouchableOpacity style={[styles.closeButton, theme.stylesPrimary.shadow]} onPress={goBack}>
          <CloseSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.contentView}>
        <Image
          style={styles.qrCodeImage}
          source={require('src/assets/images/promotion-screen-images/promotion-detail-test.png')}
        />
        <View style={styles.qrCodeView}>
          <Text style={styles.codeText}>Mã</Text>
          <Text style={styles.codeValueText}>TUCTACTEA123</Text>
          <CopySvg width={12} height={20} color={theme.colors.textBold} />
        </View>
      </View>
      <LinearGradientButton title="Đặt hàng ngay" style={styles.orderButton} />
      <Text style={styles.expDateText}>Hết hạn trong 5 ngày</Text>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          Mua 1 Tặng 1 bộ Sản phẩm Cafe Muối hoặc Trà sữa Thanh long + Freeship -- Áp dụng dịch vụ
          Giao hàng (Delivery) khi đặt hàng qua Mobile App Túc Tắc Tea trên toàn quốc. -- Sản phẩm
          áp dụng: + Trà sữa Thanh Long + Trà sữa Socola + Trà sữa Khoai môn tươi
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PromotionDetailScreen;
