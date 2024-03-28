import { Box } from 'native-base';
import { useEffect, useState } from 'react';

import { getParams } from '@/utils';
import { BuyActionType, buyActions } from './data';
import { DeliveryTab, PickupTab } from './components';
import { BuyActionItem, PrimaryLayout } from '@/components';

const DeliveryAndPickupScreenScreen = () => {
  const params = getParams();

  const [tabActiveKey, setTabActiveKey] = useState<BuyActionType>(BuyActionType.DELIVERY);

  useEffect(() => {
    if (params?.buyAction) {
      setTabActiveKey(params.buyAction);
    }
  }, [params?.buyAction]);

  return (
    <PrimaryLayout
      statusBarBackgroundColor='white'
      containerClass='bg-gray-5 flex-1'
      renderTitle={() => (
        <Box className='w-full flex-row items-center mx-3'>
          {buyActions.map((buyAction, index) => (
            <BuyActionItem
              wrapperClassName='mr-3'
              key={index}
              {...buyAction}
              onPress={() => setTabActiveKey(index)}
              isActive={tabActiveKey === index}
            />
          ))}
        </Box>
      )}
    >
      {tabActiveKey === BuyActionType.DELIVERY ? <DeliveryTab /> : <PickupTab />}
    </PrimaryLayout>
  );
};

export default DeliveryAndPickupScreenScreen;
