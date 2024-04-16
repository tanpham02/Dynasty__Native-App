import { Box } from 'native-base';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import { orderStatus } from './data';
import { PrimaryLayout } from '@/layouts';
import { OrderHistoryItem, OrderStatusItemList } from './components';

const OrderHistoryScreen = () => {
  const [activeKey, setActiveKey] = useState<number>(0);

  const orderStatusFlatListRef = useRef<FlatList>(null);

  const handleScrollToIndex = (index: number) => {
    setActiveKey(index);
    orderStatusFlatListRef.current.scrollToIndex({
      index,
      viewPosition: 0.5,
    });
  };

  return (
    <PrimaryLayout titleScreen='Lịch sử đơn hàng' containerClass='bg-white'>
      <Box className='flex-1'>
        <Box className='-mt-4'>
          <FlatList
            horizontal
            data={orderStatus}
            ref={orderStatusFlatListRef}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <OrderStatusItemList
                {...item}
                onPress={() => handleScrollToIndex(index)}
                isActive={activeKey === index}
              />
            )}
          />
        </Box>
        <Box className='flex-1'>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Array.from({ length: 10 }).fill({})}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({}) => <OrderHistoryItem />}
          />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default OrderHistoryScreen;
