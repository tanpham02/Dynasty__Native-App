import { PrimaryLayout } from '@/layouts';
import { CategoryTabViewGroup } from './components';
import { CategoryScreenProps } from './type';

const CategoryScreen = (_props: CategoryScreenProps) => {
  return (
    <PrimaryLayout titleScreen='Khám phá Menu' statusBarBackgroundColor='#f5faff' containerClass='bg-third flex-1'>
      <CategoryTabViewGroup />
    </PrimaryLayout>
  );
};

export default CategoryScreen;
