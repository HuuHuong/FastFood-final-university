import React from 'react';
import {StyleSheet, Text} from 'react-native';
interface AppTextProps {
  children: any;
  style?: any;
  onPress?: any;
  numberOfLines?: number;
  isPrice?: boolean;
}
const AppText = React.memo((props: AppTextProps) => {
  const {style, onPress, numberOfLines} = props;
  let {children} = props;
  return (
    <Text
      style={style}
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={false}>
      {children}
    </Text>
  );
});
export {AppText};
