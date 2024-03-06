import { Box } from 'native-base';

import NotificationTabItem from '../NotificationTabItem';
import { NotificationTabProps } from './type';
import { NotificationType } from '../../type';

const NotificationTab = ({ activeTab, onChangeTab }: NotificationTabProps) => {
  const handlePressDiscountNotification = () => onChangeTab(NotificationType.DISCOUNT_NEWS);
  const handlePressMyNewsNotification = () => onChangeTab(NotificationType.MY_NEWS);

  return (
    <Box className='flex-row mx-4 mb-2'>
      <NotificationTabItem
        title='Tin khuyến mãi'
        onPress={handlePressDiscountNotification}
        isActive={activeTab === NotificationType.DISCOUNT_NEWS}
      />
      <NotificationTabItem
        title='Tin của bạn'
        onPress={handlePressMyNewsNotification}
        isActive={activeTab === NotificationType.MY_NEWS}
      />
    </Box>
  );
};

export default NotificationTab;
