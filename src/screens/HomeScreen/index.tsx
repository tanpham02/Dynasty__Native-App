import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef } from 'react';

import {
  BuyAction,
  BuyQueueTutorial,
  Header,
  HomeCategory,
  HomeSlider,
  ProductList,
} from './components';
import { useStatusBarForAndroid } from '@/hooks';

const HomeScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  useStatusBarForAndroid('#f5faff');

  return (
    <View className="flex-1 bg-third">
      <View className="flex-1">
        <SafeAreaView className="flex-1">
          <View className="flex-1">
            <Header navigation={navigation} />
            <Animated.ScrollView
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="always"
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                useNativeDriver: true,
              })}
            >
              <View className="flex-1">
                <BuyAction />
                <HomeSlider />
                <HomeCategory />
                <BuyQueueTutorial />
                {Array.from({ length: 10 }).map((_, key) => (
                  <ProductList key={key} />
                ))}
              </View>
            </Animated.ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HomeScreen;
