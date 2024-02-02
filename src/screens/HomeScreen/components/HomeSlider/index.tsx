import { FlatList, ImageSourcePropType, View, Image, TouchableOpacity } from 'react-native';
import HomeSliderImage from '../HomeSliderImage';

import Slider1 from '@/assets/images/slider-1.jpeg';
import Slider2 from '@/assets/images/slider-2.jpeg';
import Slider3 from '@/assets/images/slider-3.jpeg';
import Slider4 from '@/assets/images/slider-4.jpeg';
import Slider5 from '@/assets/images/slider-5.jpeg';

const sliders = [Slider1, Slider2, Slider3, Slider4, Slider5];

const HomeSlider = () => {
  return (
    <View className="mt-4">
      <FlatList
        data={sliders}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeSliderImage source={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeSlider;
