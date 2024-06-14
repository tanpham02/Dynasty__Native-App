import { BannerModel } from '@/models';
import { LayoutRectangle } from 'react-native';

export interface HomeSliderImageProps {
  item: BannerModel;
  index: number;
  setFlatListItemLayout: (index: number, layout: LayoutRectangle) => void;
}
