import { Svg } from '@/assets';
import { BuyActionItemProps } from '@/components/BuyActionItem/type';
import { PATH_SCREEN } from '@/constants';
import { BuyActionType } from '@/screens/DeliveryAndPickupScreen/data';
import { navigate } from '@/utils';

export const buyActions: BuyActionItemProps[] = [
  {
    Icon: Svg.Delivery,
    label: 'Giao hàng',
    onPress: () => navigate(PATH_SCREEN.DELIVERY_AND_PICKUP_SCREEN, { buyAction: BuyActionType.DELIVERY }),
  },
  {
    Icon: Svg.Store,
    label: 'Nhận hàng',
    onPress: () => navigate(PATH_SCREEN.DELIVERY_AND_PICKUP_SCREEN, { buyAction: BuyActionType.PICKUP }),
  },
];
