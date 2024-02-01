import { Text } from 'tamagui';

import { Svg } from '@/assets';
import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from 'src/styles';

const HomeScreen = () => {
  return (
    <>
      <View className="flex-1">
        <Animated.ScrollView scrollEventThrottle={16}>
          <View className="flex-1">
            <SafeAreaView>
              <View className="flex-row justify-between">
                <View
                  className="flex-row items-center border border-zinc-100 py-2 px-4 rounded-lg bg-white"
                  style={styles.shadow}
                >
                  <Svg.Menu width={20} height={20} />
                  <Text className="text-red-500 font-nunito-500">Select Location</Text>
                </View>
                <View></View>
                <View></View>
              </View>
            </SafeAreaView>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
