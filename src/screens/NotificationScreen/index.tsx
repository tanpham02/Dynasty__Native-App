import { Box, Image, Text } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { PrimaryLayout } from '@/components';
import { NotificationHiddenItem, NotificationItem } from './components';

const NotificationScreen = () => {
  return (
    <PrimaryLayout titleScreen="Thông báo của bạn" containerClass="bg-white">
      <SwipeListView
        disableRightSwipe
        rightOpenValue={-96}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <NotificationItem />}
        data={Array.from({ length: 100 }).fill({})}
        keyExtractor={(_, index) => index.toString()}
        renderHiddenItem={() => <NotificationHiddenItem />}
        ItemSeparatorComponent={() => <Box className="h-[1px] bg-zinc-200" />}
      />
    </PrimaryLayout>
  );
};

export default NotificationScreen;
