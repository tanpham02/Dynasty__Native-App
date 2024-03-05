import { Box } from 'native-base';

import { PrimaryLayout } from '@/components/Layout';
import CategoryTabViewGroup from './components/CategoryTabViewGroup';
import { CategoriesProps } from './type';

const Categories = (props: CategoriesProps) => {
  return (
    <PrimaryLayout titleScreen='Khám phá Menu' statusBarBackgroundColor='white' containerClass='bg-third'>
      <Box className='flex-1 mt-3'>
        <CategoryTabViewGroup />
      </Box>
    </PrimaryLayout>
  );
};

export default Categories;
