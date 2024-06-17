import { FlatList } from 'native-base';
import { useSelector } from 'react-redux';

import { FaqItem } from '..';
import { RootState } from '@/redux';
import { StoreConfigModel } from '@/models';

const FaqList = () => {
  const storeConfig = useSelector<RootState, StoreConfigModel>((state) => state.storeStore.storeConfig);

  return (
    <FlatList
      className='mt-2'
      data={storeConfig?.faqs || []}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <FaqItem {...item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default FaqList;
