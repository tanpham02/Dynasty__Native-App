import { createRef, forwardRef, useImperativeHandle, useState } from 'react';
import AppLoading from '../AppLoading';

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

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return <>{visible && <AppLoading />}</>;
};

export default forwardRef(GlobalLoading);
