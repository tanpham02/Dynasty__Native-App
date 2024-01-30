import { Animated, ImageBackground, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStatusBarForAndroid from 'src/hooks/useStatusBarForAndroid';
import theme from 'src/themes';
import * as Clipboard from 'expo-clipboard';
import BannerSlider from './components/BannerSlider';
import ExchangePoints from './components/ExchangePoints';
import MenuGroup from './components/MenuGroup';
import ProductCategory from './components/ProductCategory';
import { ProductCategoryType } from './components/ProductCategory/types';
import ProductHot from './components/ProductHot';
import Promotions from './components/Promotions';
import Search from './components/Search';
import UserHeader from './components/UserHeader';
import styles from './styles';

const categoriesData: ProductCategoryType[] = [
  {
    title: 'Món mới phải thử',
    readMore: true,
    products: [
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
    ],
  },
  {
    title: 'Trà sữa',
    readMore: true,
    products: [
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
    ],
  },
  {
    title: 'Cafe',
    readMore: true,
    products: [
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
      {
        bannerImage: require('src/assets/images/home-screen-images/product-test.png'),
        productName: 'Trà Chanh Mật Ong Giã tay',
        productPrice: 35000,
      },
    ],
  },
];

const HomeScreen = () => {
  useStatusBarForAndroid();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
    Alert.alert("Đã copy");
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Animated.ScrollView scrollEventThrottle={16}>
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
            }}
          >
            <ImageBackground
              source={require('../../assets/images/home-screen-images/background-image.png')}
              style={styles.imageBackground}
              imageStyle={{ resizeMode: 'cover' }}
            ></ImageBackground>
            <SafeAreaView style={styles.container}>
              <UserHeader />
              <View style={styles.contentView}>
                <MenuGroup />
                <BannerSlider />
                <ExchangePoints />
                <ProductHot />
                <Promotions />
                <Search />
                {categoriesData.map((item, index) => (
                  <ProductCategory productCategory={item} key={index} />
                ))}
              </View>
            </SafeAreaView>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
