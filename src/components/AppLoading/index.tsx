import { Image, Platform, View } from 'react-native';

import LoaderBikeGif from '@/assets/gif/loader-bike.gif';

const AppLoading = () => {
  return (
    <View
      className='absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center'
      style={{
        backgroundColor: `${Platform.OS === 'ios' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.7)'}`,
      }}
    >
      <Image source={LoaderBikeGif} className='w-24 h-24' alt='Loader Bike Gif' />
    </View>
  );
};

export default AppLoading;
