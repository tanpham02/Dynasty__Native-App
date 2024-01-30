import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import styles, { bannerWidth } from './styles';
import { Text } from 'src/components';

const PromotionCard = ({ index, scrollX }) => {
  const viewportWidth = bannerWidth / 2;

  const inputRange = [
    (index - 1) * viewportWidth,
    index * viewportWidth,
    (index + 1) * viewportWidth,
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -10, 0],
  });

  const zIndex = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const scaleDuration = 200; // milliseconds

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1.2, 1],
    extrapolate: 'clamp', // Giữ giá trị ở ngoài khoảng inputRange
  });

  return (
    <TouchableOpacity style={[styles.promotionCardView, { zIndex }]}>
      <Animated.Image
        style={[
          styles.bannerImage,
          
        ]}
        source={require('src/assets/images/home-screen-images/product-test.png')}
      />
      <View style={styles.infoGroupView}>
        <View style={styles.infoView}>
          <Text style={styles.productNameText}>Mua 1 tặng 1</Text>
          <Text style={styles.productPriceText}>HSD 02/02/2024</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Promotions = () => {
  const scrollX = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.exchangePointText}>Khuyến mãi</Text>
        <TouchableOpacity>
          <Text style={styles.readMoreText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <View>
        <AnimatedFlatList
          style={styles.flatList}
          horizontal
          data={[{}, {}, {}, {}]}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={bannerWidth / 2}
          renderItem={({ index }) => <PromotionCard index={index} scrollX={scrollX} />}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
        />
      </View>
    </View>
  );
};

export default Promotions;
