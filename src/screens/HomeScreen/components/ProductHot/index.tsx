import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import styles, { bannerWidth } from './styles';
import { Text } from 'src/components';

const ProductCard = ({ index, scrollX }) => {
  return (
    <TouchableOpacity style={[styles.promotionCardView]}>
      <Animated.Image
        style={[styles.bannerImage]}
        source={require('src/assets/images/home-screen-images/product-test.png')}
      />
      <View style={styles.infoGroupView}>
        <View style={styles.infoView}>
          <Text style={styles.productNameText}>Trà Chanh Mật Ong Giã Tay</Text>
          <Text style={styles.productPriceText}>35.000đ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ProductHot = () => {
  const scrollX = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.exchangePointText}>Trà nổi bật</Text>
        <TouchableOpacity>
          <Text style={styles.readMoreText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.descriptionText}>Dành cho bạn</Text>
      <View>
        <AnimatedFlatList
          style={styles.flatList}
          horizontal
          data={[{}, {}, {}, {}]}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={bannerWidth / 2}
          renderItem={({ index }) => <ProductCard index={index} scrollX={scrollX} />}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: true,
          })}
        />
      </View>
    </View>
  );
};

export default ProductHot;
