import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from '@/styles';

const HomeSliderImage = ({ source }: { source: ImageSourcePropType }) => {
  return (
    <TouchableOpacity>
      <Image
        source={source}
        className="rounded-lg m-1 mr-2"
        style={[styles.heightOnePerFive, styles.widthFourPerFiveScreen]}
      />
    </TouchableOpacity>
  );
};
export default HomeSliderImage;
