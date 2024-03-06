import { NavigationState } from '@react-navigation/native';

export const tabBarRoutes: NavigationState['routes'] = [
  { key: 'deals', name: 'Pizza' },
  { key: 'for-me', name: 'Khai vị' },
  { key: 'pizza', name: 'Mỳ Ý' },
  { key: 'starters', name: 'Salad' },
  { key: 'salads-and-pasta', name: 'Thức uống' },
  { key: 'drinks', name: 'Favorite' },
];
