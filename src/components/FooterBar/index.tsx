import { Box } from 'native-base';
import React from 'react';

import styles from '@/styles';
import { FooterBarProps } from './type';

const FooterBar = ({ children, wrapperClassName }: FooterBarProps) => {
  return (
    <Box className={`bg-white p-3 ${wrapperClassName}`} style={[styles.shadowX]}>
      {children}
    </Box>
  );
};

export default FooterBar;
