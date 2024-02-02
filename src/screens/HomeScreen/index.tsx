import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BuyAction,
  BuyQueueTutorial,
  Header,
  HomeCategory,
  HomeSlider,
  ProductList,
} from './components';

const HomeScreen = () => {
  return (
    <>
      <View className="flex-1 bg-gray-4">
        <Animated.ScrollView scrollEventThrottle={16}>
          <View className="flex-1 py-2">
            <SafeAreaView>
              <View className="px-3 pb-4">
                <Header />
                <BuyAction />
                <HomeSlider />
                <HomeCategory />
                <BuyQueueTutorial />
                <ProductList />
                <ProductList />
                <ProductList />
              </View>
            </SafeAreaView>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
