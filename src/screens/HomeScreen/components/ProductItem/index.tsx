import { TouchableOpacity } from 'react-native-gesture-handler';

import ProductTestImage from '@/assets/images/logo/pizza-5-loai-thit-va-rau-cu.png';
import { Image, Text, View } from 'react-native';
import styles from '@/styles';
import { formatMoneyVND } from '@/utils/numberUtils';

const ProductItem = () => {
  return (
    <TouchableOpacity
      style={[
        styles.shadowX,
        styles.widthTwoPerFive,
        {
          elevation: 5,
        },
      ]}
      className="bg-gray-5 border border-zinc-200 mr-3 h-60 rounded-lg p-2 mb-2 ml-1"
    >
      <Image
        source={ProductTestImage}
        className="object-contain w-full max-h-32"
        resizeMode="contain"
      />
      <Text className="font-nunito-700 text-sm text-zinc-700" numberOfLines={2}>
        Pizza hải sản pessto xanh
      </Text>
      <View className="my-3 w-1/3 h-0.5 bg-secondary" />
      <View className="flex-row">
        <Text className="flex-1 font-nunito-600 text-zinc-700">{formatMoneyVND(199000)}đ</Text>
        <View className="border-2 border-secondary rounded p-0.5">
          <Text className="text-xs font-nunito-500 text-zinc-700">Mua ngay</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
