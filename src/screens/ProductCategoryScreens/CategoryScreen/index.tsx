import { Box } from 'native-base';

import { PrimaryLayout } from '@/layouts';
import { CategoryTabViewGroup } from './components';
import { CategoryScreenProps } from './type';

const CategoryScreen = (props: CategoryScreenProps) => {
  return (
    <PrimaryLayout
      titleScreen='Khám phá Menu'
      statusBarBackgroundColor='#f5faff'
      containerClass='bg-third'
    >
        <CategoryTabViewGroup />
    </PrimaryLayout>
  );
};

export default CategoryScreen;
