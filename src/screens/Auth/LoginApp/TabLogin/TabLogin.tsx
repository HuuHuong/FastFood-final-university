import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors, Spacing} from '@theme';
import {AppInput, AppText, DebounceButton, MainButtonApp} from '@components';
import {useFunctions} from '../useFunctions';
import {LENGTH_TEXT} from '@utils';
import {styles} from './styles';
import {IconFacebook, IconGoogle} from '@assets';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';

export const TabLogin = (props: any) => {
  const {formik} = useFunctions();
  const {signInFacebook, signInGoogle} = props;
  return (
    <ScreenWrapper
      unsafe
      scroll
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginHorizontal: Spacing.width48,
          marginVertical: Spacing.height28,
        }}>
        <AppInput
          onValueChange={formik.handleChange('phone_number')}
          value={formik.values.phone_number}
          placeholder="Mobile phone"
          error={formik.errors.phone_number}
          maxLength={LENGTH_TEXT.MAX_255}
          containerStyle={styles.form_input}
        />
        <AppInput
          onValueChange={formik.handleChange('password')}
          value={formik.values.password}
          placeholder="Password"
          error={formik.errors.password}
          maxLength={LENGTH_TEXT.MAX_30}
          containerStyle={styles.form_input}
        />
        <DebounceButton activeOpacity={0.5} onPress={() => {}}>
          <AppText style={styles.forgot_password}>{'Forgot password?'}</AppText>
        </DebounceButton>
        <MainButtonApp onPress={() => formik.handleSubmit()} title={'Login'} />
        <AppText style={styles.or}>{'Or'}</AppText>
        <MainButtonApp
          style={{
            backgroundColor: colors.blue,
            marginBottom: Spacing.height16,
          }}
          socialIcon={<IconFacebook />}
          onPress={signInFacebook}
          title={'Log In with Facebook'}
          titleStyle={styles.login_face}
        />
        <MainButtonApp
          style={{
            backgroundColor: colors.white,
            marginBottom: Spacing.height16,
          }}
          socialIcon={<IconGoogle />}
          onPress={signInGoogle}
          title={'Log In with Google'}
          titleStyle={styles.login_google}
        />
      </View>
    </ScreenWrapper>
  );
};
