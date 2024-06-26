import { View } from 'react-native';

import { BuyActionItem } from '@/components';
import { buyActions } from './data';
import { memo } from 'react';

const BuyAction = () => {
  return (
    <View className='flex-row px-3 mb-2'>
      {buyActions.map((buyAction, index) => (
        <BuyActionItem key={index} {...buyAction} />
      ))}
    </View>
  );
};

export default memo(BuyAction);
