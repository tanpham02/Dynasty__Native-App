import { Image, TouchableOpacity } from 'react-native';

import { useEffect, useRef } from 'react';
import styles from '@/styles';
import { getFullImageUrl, heightScreen, widthScreen } from '@/utils';
import { HomeSliderImageProps } from './type';

const HomeSliderImage = ({ setFlatListItemLayout, index, item }: HomeSliderImageProps) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.measure((x, y, width, height, pageX, pageY) => {
        setFlatListItemLayout(index, { x: pageX, y: pageY, width, height });
      });
    }
  }, []);

  return (
    <TouchableOpacity
      ref={itemRef}
      className='bg-white rounded-lg m-1 p-1.5'
      style={[{ height: heightScreen * 0.18, width: widthScreen * 0.8 }, styles.shadowPrimary]}
    >
      <Image
        source={{ uri: getFullImageUrl(item.url) }}
        className='w-full h-full rounded-lg'
        alt={item.name}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
};
export default HomeSliderImage;
