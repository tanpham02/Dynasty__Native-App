import { useState } from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  View,
} from 'react-native';
import styles, { bannerWidth } from './styles';

const Banner = ({ index, scrollX }) => {
  return (
    <TouchableOpacity style={[styles.bannerView]}>
      <Animated.Image
        style={[styles.bannerImage]}
        source={require('src/assets/images/home-screen-images/banner-test.png')}
      />
    </TouchableOpacity>
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = new Animated.Value(0);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / (bannerWidth + 10));
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        style={styles.flatList}
        horizontal
        data={[{}, {}, {}, {}]}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={bannerWidth + 10}
        onScrollEndDrag={handleScrollEnd}
        renderItem={({ index }) => <Banner index={index} scrollX={scrollX} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
      />
    </View>
  );
};

export default BannerSlider;
