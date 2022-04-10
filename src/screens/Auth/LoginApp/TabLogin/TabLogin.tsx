import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors, Spacing} from '@theme';
import {AppInput, AppText, DebounceButton, MainButtonApp} from '@components';
import {useFunctions} from './useFunctions';
import {LENGTH_TEXT} from '@utils';
import {styles} from './styles';
import {IconFacebook, IconGoogle} from '@assets';

export const TabLogin = () => {
  const {formik} = useFunctions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          marginHorizontal: Spacing.width48,
          marginVertical: Spacing.height28,
        }}>
        <AppInput
          onValueChange={formik.handleChange('email')}
          value={formik.values.email}
          placeholder="Email"
          error={formik.errors.email}
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
        <AppText onPress={() => {}} style={styles.forgot_password}>
          {'Forgot password?'}
        </AppText>
        <MainButtonApp onPress={() => {}} title={'Login'} />
        <AppText style={styles.or}>{'Or'}</AppText>
        <MainButtonApp
          style={{
            backgroundColor: colors.blue,
            marginBottom: Spacing.height16,
          }}
          socialIcon={<IconFacebook />}
          onPress={() => {}}
          title={'Log In with Facebook'}
          titleStyle={styles.login_face}
        />

        <MainButtonApp
          style={{
            backgroundColor: colors.white,
            marginBottom: Spacing.height16,
          }}
          socialIcon={<IconGoogle />}
          onPress={() => {}}
          title={'Log In with Facebook'}
          titleStyle={styles.login_google}
        />
      </View>
    </ScrollView>
  );
};
