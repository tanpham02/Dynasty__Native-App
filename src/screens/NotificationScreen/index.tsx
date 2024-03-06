import { Box, Text } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { NotificationType } from './type';
import { PrimaryLayout } from '@/components';
import { NotificationHiddenItem, NotificationItem, NotificationTab } from './components';

const NotificationScreen = () => {
  const [tabKey, setTabKey] = useState<NotificationType>(NotificationType.DISCOUNT_NEWS);

  return (
    <PrimaryLayout
      containerClass='bg-white'
      renderTitle={() => (
        <Box className='justify-center flex-row flex-1'>
          <Text className='font-nunito-700 text-lg text-center -ml-16'>Dynasty Pizza</Text>
          <TouchableOpacity className='p-1 absolute top-0 right-4'>
            <Svg.MarkAllAsRead width={20} height={20} className='text-zinc-400' />
          </TouchableOpacity>
        </Box>
      )}
    >
      <NotificationTab activeTab={tabKey} onChangeTab={setTabKey} />
      <SwipeListView
        disableRightSwipe
        rightOpenValue={-155}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <NotificationItem />}
        data={Array.from({ length: 10 }).fill({})}
        keyExtractor={(_, index) => index.toString()}
        renderHiddenItem={() => <NotificationHiddenItem />}
        ItemSeparatorComponent={() => <Box className='h-[1px] bg-zinc-200' />}
      />
    </PrimaryLayout>
  );
};

export default NotificationScreen;
