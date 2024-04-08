import { NotificationType } from '../../type';

export interface NotificationTabProps {
  activeTab: NotificationType;
  onChangeTab(tabKey: NotificationType): void;
}
