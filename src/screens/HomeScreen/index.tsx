import { Text } from 'tamagui';

import { Svg } from '@/assets';
import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from 'src/styles';

const HomeScreen = () => {
  return (
    <>
      <View className="flex-1 bg-zinc-50">
        <Animated.ScrollView scrollEventThrottle={16}>
          <View className="flex-1">
            <SafeAreaView>
              <View className="px-3">
                <View className="flex-row justify-between">
                  <View
                    className="flex-row items-center border border-zinc-50 py-2 px-4 rounded-lg bg-white my-2"
                    style={styles.shadowX}
                  >
                    <Svg.Menu width={20} height={20} className="text-zinc-500" />
                    <View className="ml-2">
                      <Text className="text-zinc-800 font-nunito-700 uppercase text-xs">
                        Chọn vị trí
                      </Text>
                      <Text className="text-zinc-500 font-nunito-500 text-xs">
                        Nhận chính xác giá...
                      </Text>
                    </View>
                  </View>
                  <View></View>
                  <View></View>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
