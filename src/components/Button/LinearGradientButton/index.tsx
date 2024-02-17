import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradientButtonProps } from './types';
import { Text } from 'native-base';

const LinearGradientButton = ({
  onPress,
  style,
  icon,
  title,
  iconStyle,
}: LinearGradientButtonProps) => {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    } else if (typeof icon === 'string') {
      return <Image source={{ uri: icon }} style={iconStyle} alt="" />;
    } else {
      return <Image source={icon} style={iconStyle} alt="" />;
    }
  };

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#90C2B8', '#D5E5CC']}
        style={[styles.button, style]}
      >
        {icon && renderIcon()}
        {title && <Text style={styles.titleText}>{title}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearGradientButton;
