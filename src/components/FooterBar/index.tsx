import React from 'react';
import { FooterBarProps } from './type';
import { Box } from 'native-base';
import styles from '@/styles';

const FooterBar = ({ children, wrapperClassName, bodyClassName }: FooterBarProps) => {
  return (
    <Box className={`bg-white p-3 ${wrapperClassName}`} style={[styles.shadowX]}>
      <Box className={`bg-secondary rounded-lg flex flex-row justify-between p-3 ${bodyClassName}`}>{children}</Box>
    </Box>
  );
};

export default FooterBar;
