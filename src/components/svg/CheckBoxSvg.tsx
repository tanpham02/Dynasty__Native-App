import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import theme from 'src/themes';

interface CheckmarkSvgProps {
  checked?: boolean;
  color?: string;
  width: string;
  height: string;
}

const CheckBoxSvg = (props: CheckmarkSvgProps) => {
  const { color = theme.colors.textBold, width, height, checked } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Rect x="0.5" y="0.5" width="14" height="14" rx="4.5" stroke={color} />
      {checked && (
        <Path
          d="M13.3516 3.64844C13.707 3.97656 13.707 4.55078 13.3516 4.87891L6.35156 11.8789C6.02344 12.2344 5.44922 12.2344 5.12109 11.8789L1.62109 8.37891C1.26562 8.05078 1.26562 7.47656 1.62109 7.14844C1.94922 6.79297 2.52344 6.79297 2.85156 7.14844L5.72266 10.0195L12.1211 3.64844C12.4492 3.29297 13.0234 3.29297 13.3516 3.64844Z"
          fill={color}
        />
      )}
    </Svg>
  );
};

export default CheckBoxSvg;
