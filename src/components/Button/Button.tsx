import {IconBack} from '@assets/icons/icon_back';
import {NavigationUtils} from '@navigation';
import {colors, Poppins, Spacing} from '@theme';
import UIHelper from '@utils/UIHelper';
import debounce from 'lodash.debounce';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {ButtonProps} from './Button.props';

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.mainColor,
    paddingVertical: Spacing.height12,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginHorizontal: 20,
    borderRadius: Spacing.width30,
  },
  txtTitle: {
    ...Poppins.Bold_Poppins_600,
    color: colors.white,
    fontSize: Spacing.width16,
  },
  loading: {position: 'absolute', top: 12, right: 10},
});

export const DebounceButton = React.memo(
  ({
    onPress,
    viewStyle,
    ...props
  }: ButtonProps & TouchableWithoutFeedbackProps) => {
    const scale = new Animated.Value(1);
    const debouncedOnPress = () => {
      onPress && onPress();
    };

    const onPressAction = debounce(debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    });

    return (
      <TouchableOpacity
        {...props}
        onPress={onPressAction}
        onPressIn={() => {
          Animated.timing(scale, UIHelper.btnScaleAnim.in).start();
        }}
        onPressOut={() => {
          Animated.timing(scale, UIHelper.btnScaleAnim.out).start();
        }}
        children={
          <Animated.View style={[{transform: [{scale}]}, viewStyle]}>
            {props.children}
          </Animated.View>
        }
      />
    );
  },
);

export const Button = React.memo(
  ({onPress, ...props}: ButtonProps & TouchableWithoutFeedbackProps) => {
    const scale = new Animated.Value(1);
    const debouncedOnPress = () => {
      onPress && onPress();
    };

    const onPressAction = debounce(debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    });

    return (
      <TouchableOpacity
        {...props}
        activeOpacity={props.activeOpacity}
        onPress={onPressAction}
        onPressIn={() => {
          Animated.timing(scale, UIHelper.btnScaleAnim.in).start();
        }}
        onPressOut={() => {
          Animated.timing(scale, UIHelper.btnScaleAnim.out).start();
        }}
        children={
          <Animated.View style={{transform: [{scale}]}}>
            {props.children}
          </Animated.View>
        }
      />
    );
  },
);

export const MainButtonApp = React.memo(
  ({
    onPress,
    title,
    style,
    isLoading,
    disabled,
    isLine,
    titleStyle,
    socialIcon,
    icon,
    ...props
  }: ButtonProps & TouchableWithoutFeedbackProps) => {
    return (
      <DebounceButton
        {...props}
        style={[
          styles.btnPrimary,
          style,
          isLine && {
            borderWidth: 1,
            backgroundColor: 'transparent',
          },
        ]}
        onPress={onPress}
        disabled={isLoading || disabled}
        children={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {socialIcon}
            <Text style={[styles.txtTitle, titleStyle]} children={title} />
            {icon}
            {isLoading && (
              <ActivityIndicator color="white" style={styles.loading} />
            )}
          </View>
        }
      />
    );
  },
);

export const BackButton = React.memo(
  ({style, colorIcon}: ButtonProps & TouchableWithoutFeedbackProps) => {
    return (
      <DebounceButton style={style} onPress={() => NavigationUtils.goBack()}>
        <IconBack strokeColor={colorIcon || colors.black} />
      </DebounceButton>
    );
  },
);
