import { View, TouchableOpacity, FlatList, Animated } from 'react-native';
import { Text } from 'src/components';
import styles, { bannerWidth } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const PromotionCard = ({ index, scrollX }) => {
  const inputRange = [(index - 1) * bannerWidth, index * bannerWidth, (index + 1) * bannerWidth];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -10, 0],
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1.2, 1],
  });

  const zIndex = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  return (
    <TouchableOpacity style={[styles.promotionCardView, { zIndex }]}>
      <Animated.Image
        style={[styles.bannerImage, { transform: [{ translateY }, { scale }] }]}
        source={require('src/assets/images/home-screen-images/tea-test.png')}
      />
      <View style={styles.infoGroupView}>
        <View style={styles.infoView}>
          <Text style={styles.productNameText}>
            Trà Chanh Mật Ong Giã Tay
          </Text>
          <Text style={styles.productPriceText}>35.000đ</Text>
        </View>
      </View>
        <TouchableOpacity style={styles.exchangePointBtn}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#90C2B8', '#D5E5CC']}
            style={styles.gradientBox}
          >
            <Text style={styles.textStyle}>Đổi điểm</Text>
          </LinearGradient>
        </TouchableOpacity>
    </TouchableOpacity>
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const ExchangePoints = () => {
  const scrollX = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.exchangePointText}>Đổi điểm</Text>
        <TouchableOpacity>
          <Text style={styles.readMoreText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.havePointText}>
        Bạn đang có <Text style={styles.havePointValueText}>90</Text> điểm
      </Text>
      <View>
        <FlatList
          style={styles.flatList}
          horizontal
          data={[{}, {}, {}, {}]}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={bannerWidth + 10}
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

export default ExchangePoints;
