import { FlatList, View } from 'react-native';
import HomeSliderImage from '../HomeSliderImage';

import Slider1 from '@/assets/images/slider-1.jpeg';
import Slider2 from '@/assets/images/slider-2.jpeg';
import Slider3 from '@/assets/images/slider-3.jpeg';
import Slider4 from '@/assets/images/slider-4.jpeg';
import Slider5 from '@/assets/images/slider-5.jpeg';

const sliders = [Slider1, Slider2, Slider3, Slider4, Slider5];

const HomeSlider = () => {
  //   const flatListRef = useRef<FlatList>(null);

  //   const [activeIndex, setActiveIndex] = useState<number>(0);

  //   useEffect(() => {
  //     let timer = null;

  //     if (activeIndex < sliders.length) {
  //       const newActiveIndex = activeIndex + 1;
  //       flatListRef.current.scrollToIndex({
  //         index: newActiveIndex,
  //         animated: true,
  //       });

  //       setActiveIndex(newActiveIndex);
  //     } else {
  //       setActiveIndex(0);
  //       flatListRef.current.scrollToIndex({
  //         index: 0,
  //         animated: true,
  //       });
  //     }
  //   }, [activeIndex]);

  return (
    <View className="mt-4 ml-2">
      <FlatList
        horizontal
        pagingEnabled
        data={sliders}
        // ref={flatListRef}
        snapToAlignment="center"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomeSliderImage source={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default HomeSlider;
