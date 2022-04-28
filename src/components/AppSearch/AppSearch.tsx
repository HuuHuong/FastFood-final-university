import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {IconFilter, IconSearch} from '@assets';
import {AppInput} from '@components/AppInput';
import {colors, Spacing} from '@theme';
import {IAppInput} from 'src/interfaces/interfaces';
import {DebounceButton} from '@components/Button/Button';

export const AppSearch = (props: IAppInput) => {
  const {
    value,
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
    onFilter,
  } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    if (callBackOnFocus) callBackOnFocus(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (callBackOnFocus) callBackOnFocus(false);
  };
  const onChangeText = (text: any) => {
    const nText = text || '';
    if (onValueChange) onValueChange(nText, name);
  };
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          marginHorizontal: Spacing.width20,
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        style,
      ]}>
      <View style={styles.form_search}>
        <IconSearch />
        <TextInput
          style={{
            marginLeft: Spacing.width10,
            width: '80%',
            paddingVertical: Spacing.height12,
          }}
          placeholder={'Search food'}
          placeholderTextColor={colors.gray_4F}
          onFocus={handleFocus}
          onBlur={handleBlur}
          numberOfLines={1}
          onChangeText={onChangeText}
          value={value}
          autoFocus={autoFocus}
          maxLength={maxLength}
          textAlignVertical={'center'}
          secureTextEntry={false}
          keyboardType={keyboardType}
        />
      </View>
      <DebounceButton onPress={() => onFilter} viewStyle={styles.filter}>
        <IconFilter />
      </DebounceButton>
    </View>
  );
};

const styles = StyleSheet.create({
  form_search: {
    paddingLeft: Spacing.width24,
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: Spacing.width10,
    alignItems: 'center',
    width: '85%',
  },
  filter: {
    padding: Spacing.width12,
    borderRadius: Spacing.width14,
    borderWidth: Spacing.width1,
    borderColor: colors.gray_C8,
  },
});
