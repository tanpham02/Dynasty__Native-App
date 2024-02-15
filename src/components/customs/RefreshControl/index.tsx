import styles from '@/styles';
import React from 'react';
import { RefreshControl, RefreshControlProps } from 'react-native';

export default (props: RefreshControlProps) => (
  <RefreshControl
    colors={[styles.colorPrimary.color]}
    tintColor={styles.colorPrimary.color}
    {...props}
  />
);
