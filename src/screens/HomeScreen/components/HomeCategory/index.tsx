import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from 'native-base';

import { Svg } from '@/assets';
import { PATH_SCREEN } from '@/constants/pathName';
import { navigate } from '@/utils/navigationUtil';
import HomeCategoryItem from '../HomeCategoryItem';
import { HomeCategoryProps } from './type';
import HomeCategoryItemSkeleton from '../HomeCategoryItemSkeleton';

const HomeCategory = ({ isLoading, data = [] }: HomeCategoryProps) => {
  return (
    <Box className='mt-4 mx-3'>
      <Box className='flex-row justify-between items-center'>
        <Text className='font-nunito-700 text-sm'>Khám phá Menu</Text>
        <TouchableOpacity
          className='flex-row items-center gap-1'
          onPress={() => navigate(PATH_SCREEN.CATEGORIES_SCREEN)}
        >
          <Text className='font-nunito-600 text-[13px] text-zinc-600'>Xem thêm</Text>
          <Svg.ArrowRight width={16} height={16} className='text-zinc-600' />
        </TouchableOpacity>
      </Box>
      <Box className='flex-row flex-wrap gap-x-4'>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <HomeCategoryItemSkeleton key={index} />)
          : data.map((category, index) => <HomeCategoryItem key={index} {...category} />)}
      </Box>
    </Box>
  );
};

export default memo(HomeCategory);
