import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';

import { BuyActionItemProps } from '../../../../components/BuyActionItem/type';

export const buyActions: BuyActionItemProps[] = [
  {
    Icon: Svg.Delivery,
    label: 'Giao hàng',
    onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.DELIVERY_SCREEN),
  },
  {
    Icon: Svg.Store,
    label: 'Nhận hàng',
    onPress: () => {},
  },
];
