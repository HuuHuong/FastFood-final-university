import React from 'react';
import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';
export interface ButtonProps {
  title?: string;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  icon?: JSX.Element;
  disabled?: number | boolean;
  onPress?: () => void;
  children?: any;
  textStyle?: any;
  activeOpacity?: number;
  viewStyle?: StyleProp<ViewStyle>;
  isLine?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  socialIcon?: React.ReactNode;
  colorIcon?: string;
}
