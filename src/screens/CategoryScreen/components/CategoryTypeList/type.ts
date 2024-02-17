import React from 'react';
import { SvgProps } from 'react-native-svg';

export interface CategoryTypeListProps {}

export interface CategoryTypeDataTest {
  typeKey: string;
  name: string;
  icon: React.FC<SvgProps>;
}
