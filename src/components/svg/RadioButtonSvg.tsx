import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import theme from 'src/themes';

interface RadioButtonSvgProps {
  checked?: boolean;
  color?: string;
  width: string;
  height: string;
}

const RadioButtonSvg = (props: RadioButtonSvgProps) => {
  const { checked = false, color = theme.colors.textBold, width, height } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Circle cx="7.5" cy="7.5" r="7" stroke={checked ? color : theme.colors.borderBox} />
      {checked && <Circle cx="7.5" cy="7.5" r="5.5" fill={color} />}
    </Svg>
  );
};

export default RadioButtonSvg;
