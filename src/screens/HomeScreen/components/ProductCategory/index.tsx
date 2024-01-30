import { TouchableOpacity, View } from 'react-native';
import { Text } from 'src/components';
import ProductItem from '../ProductItem';
import { ProductItemType } from '../ProductItem/types';
import styles from './styles';
import { ProductCategoryType } from './types';

const data: ProductItemType[] = [
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
];

const ItemSeparator = () => <View style={styles.itemSeparator} />;
const ProductCategory = ({ productCategory }: { productCategory: ProductCategoryType }) => {
  const { title, readMore = true, products } = productCategory;

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.exchangePointText}>{title}</Text>
        {readMore ? (
          <TouchableOpacity>
            <Text style={styles.readMoreText}>Xem thêm</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.descriptionText}>Dành cho bạn</Text>
      <View style={styles.productListView}>
        {products.map((product, index) => {
          const value = {
            ...product,
            width: '48%',
          };
          return <ProductItem {...value} key={index} />;
        })}
      </View>
    </View>
  );
};

export default ProductCategory;
