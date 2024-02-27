import { Svg } from '@/assets';

export const buyActions = [
    {
        Icon: Svg.Delivery,
        label: 'Giao hàng',
    },
    {
        Icon: Svg.Store,
        label: 'Nhận hàng',
    },
];


export enum BuyActionType {
    DELIVERY,
    PICKUP
}