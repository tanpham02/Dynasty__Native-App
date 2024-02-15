import { NavigationState } from '@react-navigation/native';

export const tabBarRoutes: NavigationState['routes'] = [
  { key: 'deals', name: 'Deals' },
  { key: 'for-me', name: 'For Me' },
  { key: 'pizza', name: 'Pizza' },
  { key: 'starters', name: 'Starters' },
  { key: 'salads-and-pasta', name: 'Salads & Pasta' },
  { key: 'drinks', name: 'Drinks' },
];
