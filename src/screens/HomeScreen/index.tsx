import { Animated, View } from 'react-native';

import styles from '@/styles';
import { SideBar } from '@/components';
import { HomeBody } from './components';
import { useHomeLayout } from './useHomeLayout';

const HomeScreen = () => {
  const {
    isOpenSideBar,
    toggleOpenSideBar,
    interpolatedLeft,
    interpolatedOpacity,
    interpolatedScale,
    interpolatedTop,
  } = useHomeLayout();

  return (
    <View className='flex-1 bg-white'>
      <Animated.View
        className='flex-1'
        style={{
          transform: [
            {
              scale: interpolatedScale,
            },
          ],
          opacity: interpolatedOpacity,
        }}
      >
        <SideBar />
      </Animated.View>
      <Animated.View
        className='flex-1 bg-white absolute'
        style={[
          {
            top: interpolatedTop,
            left: interpolatedLeft,
            bottom: interpolatedTop,
          },
          styles.shadowX,
        ]}
      >
        <HomeBody openSidebar={toggleOpenSideBar} />
        {!isOpenSideBar && <View onTouchStart={toggleOpenSideBar} className='absolute top-0 left-0 right-0 bottom-0' />}
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
