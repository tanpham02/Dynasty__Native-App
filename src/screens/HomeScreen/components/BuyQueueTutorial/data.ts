import BuyQueueStep1Image from '@/assets/images/buy-queue-step-1.png';
import BuyQueueStep2Image from '@/assets/images/buy-queue-step-2.png';
import BuyQueueStep3Image from '@/assets/images/buy-queue-step-3.png';
import { BuyQueueStepProps } from '../BuyQueueStep/type';

export const buyQueueSteps: BuyQueueStepProps[] = [
  {
    label: 'Đặt hàng trên ứng dụng',
    source: BuyQueueStep1Image,
  },
  {
    label: 'Lựa chọn cửa hàng đặt',
    source: BuyQueueStep2Image,
  },
  {
    label: 'Đợi nhận thông báo đến nhận hàng',
    source: BuyQueueStep3Image,
  },
];
