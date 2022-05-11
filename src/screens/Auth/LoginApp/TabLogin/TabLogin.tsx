import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors, Spacing} from '@theme';
import {AppInput, AppText, DebounceButton, MainButtonApp} from '@components';
import {useFunctions} from '../useFunctions';
import {LENGTH_TEXT} from '@utils';
import {styles} from './styles';
import R, {IconFacebook, IconGoogle} from '@assets';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import trans from '@assets';

export const TabLogin = (props: any) => {
  const {formik} = useFunctions();
  const {signInFacebook, signInGoogle} = props;
  return (
    <ScreenWrapper unsafe scroll>
      <View
        style={{
          marginHorizontal: Spacing.width48,
          marginVertical: Spacing.height28,
        }}>
        <AppInput
          onValueChange={formik.handleChange('email')}
          value={formik.values.email}
          placeholder={trans().email}
          error={formik.errors.email}
          maxLength={LENGTH_TEXT.MAX_255}
          containerStyle={styles.form_input}
        />
        <AppInput
          onValueChange={formik.handleChange('password')}
          value={formik.values.password}
          placeholder={trans().password}
          // error={formik.errors.password}
          maxLength={LENGTH_TEXT.MAX_30}
          containerStyle={styles.form_input}
        />
        <DebounceButton activeOpacity={0.5} onPress={() => {}}>
          <AppText style={styles.forgot_password}>
            {trans().forgot_password}
          </AppText>
        </DebounceButton>
        <MainButtonApp
          onPress={() => formik.handleSubmit()}
          title={trans().login}
        />
        <AppText style={styles.or}>{trans().or}</AppText>
        <MainButtonApp
          style={{
            backgroundColor: colors.blue,
            marginBottom: Spacing.height16,
          }}
          socialIcon={<IconFacebook />}
          onPress={signInFacebook}
          title={trans().login_facebook}
          titleStyle={styles.login_face}
        />
        <MainButtonApp
          style={{
            backgroundColor: colors.white,
            marginBottom: Spacing.height16,
          }}
          socialIcon={<IconGoogle />}
          onPress={signInGoogle}
          title={trans().login_google}
          titleStyle={styles.login_google}
        />
      </View>
    </ScreenWrapper>
  );
};
