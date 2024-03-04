import { Box, Text } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';

import { PrimaryLayout } from '@/components';
import { NotificationHiddenItem, NotificationItem } from './components';
import { TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  return (
    <PrimaryLayout
      renderTitle={() => (
        <Box className='justify-center'>
          <Text className='font-nunito-700 text-lg text-center'>Dynasty Pizza</Text>
        </Box>
      )}
      containerClass='bg-white'
    >
      <SwipeListView
        disableRightSwipe
        rightOpenValue={-160}
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
