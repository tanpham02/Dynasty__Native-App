import LoaderBikeGif from '@/assets/gif/loader-bike.gif';
import { createRef, forwardRef, useImperativeHandle, useState } from 'react';
import { View, Platform, Image } from 'react-native';

export const globalLoadingRef = createRef<{
  show: () => void;
  hide: () => void;
}>();

export const globalLoading = {
  show: () => globalLoadingRef.current.show(),
  hide: () => globalLoadingRef.current.hide(),
};

const GlobalLoading = (__, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        show,
        hide,
      };
    },
    [],
  );

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <>
      {visible && (
        <View
          className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center"
          style={{
            backgroundColor: `${Platform.OS === 'ios' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.7)'}`,
          }}
        >
          <Image source={LoaderBikeGif} className="w-24 h-24" alt="" />
        </View>
      )}
    </>
  );
};

export default forwardRef(GlobalLoading);
