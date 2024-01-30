import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface NotificationSvgProps {
  showNotification?: boolean;
  activeColor?: string;
  color?: string;
  width: string;
  height: string;
}

const NotificationSvg = (props: NotificationSvgProps) => {
  const {
    showNotification = false,
    activeColor = '#FFCE6D',
    color = '#274788',
    width,
    height,
  } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 17 20" fill="none">
      <Path
        d="M14.7188 13.3438C14.9062 13.5312 15 13.7812 15 14C14.9688 14.5312 14.5938 15 13.9688 15H2C1.375 15 1 14.5312 1 14C0.96875 13.7812 1.0625 13.5312 1.25 13.3438C1.84375 12.6875 3 11.7188 3 8.5C3 6.09375 4.6875 4.15625 7 3.65625V3C7 2.46875 7.4375 2 8 2C8.53125 2 8.96875 2.46875 8.96875 3V3.65625C11.2812 4.15625 12.9688 6.09375 12.9688 8.5C12.9688 11.7188 14.125 12.6875 14.7188 13.3438ZM3.09375 13.5H12.875C12.2188 12.6562 11.5 11.1875 11.4688 8.53125C11.4688 8.53125 11.5 8.53125 11.5 8.5C11.5 6.59375 9.90625 5 8 5C6.0625 5 4.5 6.59375 4.5 8.5C4.5 8.53125 4.5 8.53125 4.5 8.53125C4.46875 11.1875 3.75 12.6562 3.09375 13.5ZM8 18C6.875 18 6 17.125 6 16H9.96875C9.96875 17.125 9.09375 18 8 18Z"
        fill={color}
      />
      {showNotification && <Circle cx="13" cy="5" r="3.5" fill={activeColor} stroke="white" />}
    </Svg>
  );
};

export default NotificationSvg;
