import React from 'react';
import {
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import CloseSvg from '@/assets/svg/pizza.svg';
import { MyStatusBar, ScrollView, Text } from 'src/components';
import theme from 'src/themes';
import styles from './styles';
import { goBack } from 'App';
import LinearGradientButton from 'src/components/Button/LinearGradientButton';

const ExchangePointDetailScreen = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <ImageBackground
          source={require('src/assets/images/promotion-screen-images/banner-test.png')}
          style={[styles.bannerImage]}
          imageStyle={{ objectFit: 'cover' }}
        ></ImageBackground>
        <View style={[styles.container]}>
          <View style={styles.headerView}>
            <View></View>
            <Text style={styles.titleText}></Text>
            <TouchableOpacity
              style={[styles.closeButton, theme.stylesPrimary.shadow]}
              onPress={goBack}
            >
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.contentView}>
              <Image
                style={styles.bannerPromotionImage}
                source={require('src/assets/images/promotion-screen-images/promotion-point-test.png')}
              />
              <View style={styles.infoTextView}>
                <Text style={styles.titlePromotionText}>Mua 1 tặng 1</Text>
                <Text style={styles.expDatePromotionText}>HSD 2/2/2024</Text>
              </View>
              <View style={styles.descriptionTextView}>
                <Text style={styles.descriptionText}>+ Cafe Muối size L chỉ 25k</Text>
                <Text style={styles.descriptionText}>+ Cafe Muối size L chỉ 25k</Text>
                <Text style={styles.descriptionText}>+ Cafe Muối size L chỉ 25k</Text>
              </View>
            </View>
          </ScrollView>
          <LinearGradientButton title="Đổi 25 điểm" style={styles.buttonSubmit} />
        </View>
      </View>
    </>
  );
};

export default ExchangePointDetailScreen;
