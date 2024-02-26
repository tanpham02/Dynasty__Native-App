import { Text, TouchableOpacity, View } from 'react-native';

import { Svg } from '@/assets';
import HomeCategoryItem from '../HomeCategoryItem';
import { navigate } from '@/utils/navigationUtil';
import { PATH_SCREEN } from '@/constants/pathName';

const categories = [
  {
    name: 'Pizza',
  },
  {
    name: 'ĐẠI TIỆC GRILL CHILL NGON LÀANH',
  },
  {
    name: 'Khai vị',
  },
  {
    name: 'Mỳ Ý',
  },
  {
    name: 'Salad',
  },
  {
    name: 'Thức uống',
  },
];

const HomeCategory = () => {
  return (
    <View className='mt-4 mx-3'>
      <View className='flex-row justify-between items-center'>
        <Text className='font-nunito-700 text-sm'>Khám phá Menu</Text>
        <TouchableOpacity className='flex-row items-center gap-1' onPress={() => navigate(PATH_SCREEN.CATEGORIES)}>
          <Text className='font-nunito-600 text-[13px]'>Xem thêm</Text>
          <Svg.ArrowRight width={16} height={16} />
        </TouchableOpacity>
      </View>
      <View className='flex-row flex-wrap gap-x-4'>
        {categories.map((category, index) => (
          <HomeCategoryItem key={index} {...category} />
        ))}
      </View>
    </View>
  );
};

export default HomeCategory;
