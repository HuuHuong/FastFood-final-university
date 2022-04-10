import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {IAppInput} from 'src/interfaces/interfaces';
import {AppText} from '@components';
import {colors, DEVICE, FontSize, Spacing} from '@theme';

export const AppInput = (props: IAppInput) => {
  const {
    label,
    error,
    value,
    placeholder,
    secureTextEntry = false,
    inputStyle,
    multiline = false,
    numberOfLines = 1,
    style,
    showEye,
    onValueChange,
    keyboardType,
    editable,
    name,
    containerStyle,
    autoFocus,
    typeInput,
    customStyleLabel,
    maxLength,
    callBackOnFocus,
    onEndEditing,
  } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePasssWord, setHidePassWord] = React.useState(true);

  const handleFocus = () => {
    setIsFocused(true);
    if (callBackOnFocus) callBackOnFocus(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (callBackOnFocus) callBackOnFocus(false);
  };
  const onShowPassWord = () => {
    setHidePassWord(!hidePasssWord);
  };

  const onChangeText = (text: any) => {
    const nText = text || '';
    if (onValueChange) onValueChange(nText, name);
  };

  const styles =
    typeInput !== 'linear' || isFocused
      ? stylesBase
      : {...stylesBase, ...stylesLinear};

  const viewStyle: any = [
    // styles.inputWrap,
    // {
    //   borderColor: error
    //     ? colors.rose
    //     : isFocused
    //     ? colors.violet
    //     : colors.inputBg,
    // },
    style,
  ];

  const ipStyle: any = [
    styles.input,
    inputStyle,
    DEVICE.isIos &&
      multiline && {
        paddingTop: Spacing.height16,
      },
  ];

  const onEndEditingInput = (e: any) => {
    if (onEndEditing) onEndEditing(name);
  };

  return (
    <View style={containerStyle}>
      {label &&
        (error ? (
          <AppText style={[styles.labelError, customStyleLabel]}>
            {label}
          </AppText>
        ) : isFocused ? (
          <AppText style={[styles.labelFocus, customStyleLabel]}>
            {label}
          </AppText>
        ) : (
          <AppText style={[styles.label, customStyleLabel]}>{label}</AppText>
        ))}
      <View style={viewStyle}>
        <TextInput
          style={[ipStyle, {}]}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={'rgba(160, 160, 160, 0.6)'}
          value={value}
          multiline={multiline}
          onFocus={handleFocus}
          onBlur={handleBlur}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          secureTextEntry={hidePasssWord && secureTextEntry}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onEndEditing={onEndEditingInput}
          returnKeyType={'done'}
          blurOnSubmit={!multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
        />
        {showEye && (
          <TouchableOpacity onPress={onShowPassWord} style={styles.iconRight}>
            {/* {hidePasssWord ? <EyeIconClose /> : <EyeIconOpen />} */}
          </TouchableOpacity>
        )}
      </View>
      {!!error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

const stylesBase = StyleSheet.create({
  inputWrap: {
    // minHeight: SIZE.input_height,
    // borderRadius: scaleSize(16),
    // flexDirection: 'row',
    // backgroundColor: colors.inputBg,
    // alignItems: 'center',
    // borderWidth: 1,
    // paddingHorizontal: SIZE.base_space,
  },
  label: {
    // color: colors.primary,
    // ...fontFamily.Proxima400,
    // marginTop: SIZE.base_space,
    // marginBottom: 10,
    // fontSize: scaleSize(14),
  },
  labelFocus: {
    // color: colors.violet,
    // ...fontFamily.Proxima400,
    // marginTop: SIZE.base_space,
    // marginBottom: 10,
    // fontSize: scaleSize(14),
  },
  labelError: {
    // color: colors.rose,
    // ...fontFamily.Proxima400,
    // marginTop: SIZE.base_space,
    // marginBottom: 10,
    // fontSize: scaleSize(14),
  },
  iconLeft: {
    // marginRight: SIZE.base_space,
  },
  iconRight: {
    // marginLeft: SIZE.base_space,
  },
  input: {
    backgroundColor: colors.white,
    paddingLeft: Spacing.width12,
    borderRadius: Spacing.width12,
    paddingVertical: Spacing.height16,
  },
  error: {
    marginTop: 5,
    color: colors.black,
    fontSize: FontSize.Font12,
    // lineHeight: scaleSize(18),
  },
});

const stylesLinear = StyleSheet.create({
  inputWrap: {
    // minHeight: 'auto',
    // backgroundColor: colors.inputBg,
    // alignItems: 'flex-start',
    // borderBottomColor: colors.inputBg,
    // borderBottomWidth: 1,
    // borderRadius: 0,
  },
  label: {
    // color: colors.secondPrimary,
    // ...fontFamily.Proxima600,
    // marginTop: SIZE.base_space,
    // marginBottom: 0,
    // fontSize: scaleSize(14.5),
  },
  input: {
    // flex: 1,
    // height: '100%',
    // color: colors.primary,
    // fontSize: SIZE.base_size + 1,
    // ...fontFamily.Proxima600,
    // paddingBottom: SIZE.padding,
    // paddingTop: SIZE.base_space / 2,
    // width: '100%',
  },
});
