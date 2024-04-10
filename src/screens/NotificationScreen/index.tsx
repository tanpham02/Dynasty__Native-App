import { useState } from 'react';

import { PrimaryLayout } from '@/layouts';
import { NotificationType } from './type';
import { NotificationHeader, NotificationList, NotificationTab } from './components';

const NotificationScreen = () => {
  const [tabKey, setTabKey] = useState<NotificationType>(NotificationType.DISCOUNT_NEWS);

  return (
    <PrimaryLayout containerClass='bg-white' renderTitle={NotificationHeader}>
      <NotificationTab activeTab={tabKey} onChangeTab={setTabKey} />
      <NotificationList />
    </PrimaryLayout>
  );
};

export default NotificationScreen;
