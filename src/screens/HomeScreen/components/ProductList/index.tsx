import { Svg } from '@/assets';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'tamagui';
import ProductItem from '../ProductItem';
import { FlatList } from 'react-native';

const ProductList = () => {
  return (
    <View className="mt-4">
      <View className="flex-row items-center justify-between mx-3">
        <Text className="text-sm font-nunito-700 text-zinc-700">Pizza</Text>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Text className="font-nunito-600 text-[13px]">Xem thêm</Text>
          <Svg.ArrowRight width={16} height={16} />
        </TouchableOpacity>
      </View>
      <FlatList
        className="mt-4 ml-2"
        data={[{}, {}, {}, {}, {}]}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductItem />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ProductList;
