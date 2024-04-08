import { NavigationState } from '@react-navigation/native';
import FavoriteListIcon from '@/assets/images/favorite-list.png';

export const tabBarRoutes = [
  { key: 'deals', name: 'Pizza' },
  { key: 'for-me', name: 'Khai vị' },
  { key: 'pizza', name: 'Mỳ Ý' },
  { key: 'starters', name: 'Salad' },
  { key: 'salads-and-pasta', name: 'Thức uống' },
  { key: 'drinks', name: 'Favorite', icon: FavoriteListIcon },
];
