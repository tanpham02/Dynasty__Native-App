import BottomSheet, { BottomSheetMethods, BottomSheetProps } from '@devvie/bottom-sheet';
import { StyleSheet } from 'react-native';
import styles from './styles';
import { forwardRef } from 'react';

export default forwardRef<BottomSheetMethods, BottomSheetProps>((props, ref) => {
  const style = StyleSheet.flatten([styles.container, props.style]);

  const EmptyDragHandleComponent = () => <></>;

  return (
    <BottomSheet
      {...props}
      ref={ref}
      style={style}
      backdropMaskColor={props.backdropMaskColor || styles.backdropMaskColor.color}
      customDragHandleComponent={props.customDragHandleComponent || EmptyDragHandleComponent}
    >
      {props.children}
    </BottomSheet>
  );
});
