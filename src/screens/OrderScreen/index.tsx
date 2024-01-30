import { FlatList, SectionList, TouchableOpacity, View } from 'react-native';
import { Text } from 'src/components';
import { selectVariantOrderBottomSheetModalRef } from 'src/components/BottomSheetModal/SelectVariantOrderBottomSheetModal';
import { PrimaryLayout } from 'src/components/Layout';
import SeparatorItem from 'src/components/SeparatorItem';
import theme from 'src/themes';
import ProductFlatListItem from './components/ProductFlatListItem';
import styles from './styles';
import OrderSectionHeader from './components/OrderSectionHeader';

interface OptionSearch {
  title: string;
  textColor: string;
  backgroundColor: string;
}

const data: OptionSearch[] = [
  {
    title: 'Món mới',
    textColor: theme.colors.textButton,
    backgroundColor: '#E8EB95',
  },
  {
    title: 'Trà sữa',
    textColor: '#FFFFFF',
    backgroundColor: '#8EC1B8',
  },
  {
    title: 'Cafe',
    textColor: '#FFFFFF',
    backgroundColor: '#6BA4D4',
  },
  {
    title: 'Trà',
    textColor: '#FFFFFF',
    backgroundColor: '#2C65A2',
  },
];

const SearchItem = ({ item }: { item: OptionSearch }) => (
  <TouchableOpacity style={[styles.newProductBtn, { backgroundColor: item.backgroundColor }]}>
    <Text style={[styles.newProductText, { color: item.textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const DATA = [
  {
    title: 'Món MỚI nhất định phải thử',
    data: [
      {
        title: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
    ],
  },
  {
    title: 'Cafe',
    data: [
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
    ],
  },
  {
    title: 'Trà sữa',
    data: [
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
      {
        productName: 'Trà Chanh Mật Ong Giã Tay',
        price: 35000,
        image: require('src/assets/images/home-screen-images/product-test.png'),
      },
    ],
  },
];

const OrderScreen = () => {
  const handleOpen = () => {
    selectVariantOrderBottomSheetModalRef?.current?.open();
  };

  return (
    <PrimaryLayout title="Danh mục" style={styles.container}>
      <View style={styles.optionView}>
        <FlatList
          style={styles.flatList}
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={SearchItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <SectionList
        sections={DATA}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={SeparatorItem}
        renderItem={({ item }) => <ProductFlatListItem {...item} onPress={handleOpen} />}
        renderSectionHeader={({ section: { title } }) => <OrderSectionHeader title={title} />}
      />
    </PrimaryLayout>
  );
};

export default OrderScreen;
