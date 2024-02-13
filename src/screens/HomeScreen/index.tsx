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

const HomeScreen = ({ navigation }) => {
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
            >
              <View className="flex-1 mt-2">
                <BuyAction />
                <HomeSlider />
                <HomeCategory />
                <BuyQueueTutorial />
                <ProductList />
                <ProductList />
                <ProductList />
              </View>
            </Animated.ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HomeScreen;
