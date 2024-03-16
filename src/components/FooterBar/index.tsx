import React from 'react';
import { FooterBarProps } from './type';
import { Box } from 'native-base';
import styles from '@/styles';

const FooterBar = ({ renderRight, children, wrapperClassName, bodyClassName }: FooterBarProps) => {
  return (
    <Box className={`bg-white p-3 absolute left-0 right-0 bottom-0 h-fit ${wrapperClassName}`} style={[styles.shadowX]}>
      <Box className={`bg-secondary rounded-lg flex flex-row justify-between p-3 ${bodyClassName}`}>
        {children && <Box>{children}</Box>}
        {renderRight && <Box>{renderRight()}</Box>}
      </Box>
    </Box>
  );
};

export default FooterBar;
