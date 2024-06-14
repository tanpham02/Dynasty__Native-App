import LottieView from 'lottie-react-native';
import { Box } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

import { NoneLayout } from '@/layouts';

const OrderConfirmed = () => {
  const bgAnimateRef = useRef(new Animated.Value(0)).current;
  const [canStartChangeBg, setCanStartChangeBg] = useState<boolean>(false);
  const bgScale = bgAnimateRef.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 1],
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      Animated.timing(bgAnimateRef, {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
      setCanStartChangeBg(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NoneLayout backgroundStatusBar='#00b041'>
      <Box className='bg-[#00b041] flex-1 justify-center items-center'>
        {/* <Animated.View
          className={`bg-white w-[200px] h-[200px] ${canStartChangeBg ? 'rounded-full' : ''}`}
          style={{
            top: StatusBar.currentHeight,
            transform: [
              {
                scale: bgScale,
              },
            ],
          }}
        ></Animated.View> */}
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
          resizeMode='contain'
          source={require('@/assets/lotties/green-tick.json')}
        />
      </Box>
    </NoneLayout>
  );
};

export default OrderConfirmed;
