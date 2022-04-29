import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {AppText} from '@components';
import {colors, commonStyles, Spacing} from '@theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useIsFocused} from '@react-navigation/native';
export const ModalVerifyCode = (props: any) => {
  const {isVisible, verifyCode, close} = props;
  const [code, setCode] = useState<string>('');
  const isFocus = useIsFocused();
  useEffect(() => {
    if (isFocus) setCode('');
  }, [isFocus]);
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.view_modal}>
        <AppText style={styles.heading_text}>{'Verify code'}</AppText>
        <OTPInputView
          style={{width: '80%', height: Spacing.height200, alignSelf: 'center'}}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={setCode}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code: string) => {
            verifyCode(code);
            close();
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view_modal: {
    backgroundColor: colors.white,
    borderRadius: Spacing.width20,
    paddingVertical: Spacing.height8,
  },
  heading_text: {
    ...commonStyles.commonText600_20,
    color: colors.mainColor,
    textAlign: 'center',
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: colors.black,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
