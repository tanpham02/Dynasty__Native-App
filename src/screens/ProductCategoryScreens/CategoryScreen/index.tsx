import { Box } from 'native-base';

import { PrimaryLayout } from '@/components/Layout';
import { CategoryTabViewGroup } from './components';
import { CategoryScreenProps } from './type';

const CategoryScreen = (props: CategoryScreenProps) => {
  return (
    <PrimaryLayout titleScreen='Khám phá Menu' statusBarBackgroundColor='#f5faff' containerClass='bg-third'>
      <Box className='flex-1'>
        <CategoryTabViewGroup />
      </Box>
    </PrimaryLayout>
  );
};

export default CategoryScreen;
