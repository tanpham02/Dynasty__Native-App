import React from 'react';
import { Box } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';

import { NotificationHiddenItem, NotificationItem } from '..';

const NotificationList = () => {
  return (
    <SwipeListView
      disableRightSwipe
      rightOpenValue={-130}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      showsVerticalScrollIndicator={false}
      renderItem={() => <NotificationItem />}
      data={Array.from({ length: 10 }).fill({})}
      keyExtractor={(_, index) => index.toString()}
      renderHiddenItem={() => <NotificationHiddenItem />}
      ItemSeparatorComponent={() => <Box className='h-[1px] bg-zinc-200' />}
    />
  );
};

export default NotificationList;
