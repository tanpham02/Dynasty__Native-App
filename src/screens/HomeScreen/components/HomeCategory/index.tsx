import { Box, Text } from 'native-base';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { PATH_SCREEN } from '@/constants/pathName';
import { navigate } from '@/utils/navigationUtils';
import HomeCategoryItem from '../HomeCategoryItem';
import HomeCategoryItemSkeleton from '../HomeCategoryItemSkeleton';
import { HomeCategoryProps } from './type';

const HomeCategory = ({ isLoading, data = [] }: HomeCategoryProps) => {
  return (
    <Box className='mt-4 mx-3'>
      <Box className='flex-row justify-between items-center'>
        <Text className='font-nunito-700 text-[14.5px] text-gray-10'>Khám phá Menu</Text>
        <TouchableOpacity
          className='flex-row items-center gap-1'
          onPress={() => navigate(PATH_SCREEN.CATEGORIES_SCREEN)}
        >
          <Text className='font-nunito-600 text-[13px] text-gray-10'>Xem thêm</Text>
          <Svg.ArrowRight width={16} height={16} className='text-gray-10' />
        </TouchableOpacity>
      </Box>
      <Box className='flex-row flex-wrap gap-x-4'>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <HomeCategoryItemSkeleton key={index} />)
          : data.slice(0, 6).map((category, index) => <HomeCategoryItem key={index} {...category} />)}
      </Box>
    </Box>
  );
};

export default memo(HomeCategory);
