import {colors} from '@theme';
import UIHelper from '@utils/UIHelper';
import debounce from 'lodash.debounce';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {ButtonProps} from './Button.props';

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: colors.mainColor,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 30,
  },
  txtTitle: {
    color: colors.white,
    // ...NotoSansFont.Bold_NotoSans_700,
    fontSize: 20,
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
    ...props
  }: ButtonProps & TouchableWithoutFeedbackProps) => {
    return (
      <DebounceButton
        {...props}
        style={[
          styles.btnPrimary,
          style,
          isLine && {
            // borderColor: colors.primary,
            borderWidth: 1,
            backgroundColor: 'transparent',
          },
          // disabled && {...commonStyles.disabledBtn},
        ]}
        onPress={onPress}
        disabled={isLoading || disabled}
        children={
          <>
            <Text
              style={[
                styles.txtTitle,
                // isLine && {color: colors.primary},
                titleStyle,
              ]}
              children={title}
            />
            {isLoading && (
              <ActivityIndicator color="white" style={styles.loading} />
            )}
          </>
        }
      />
    );
  },
);
