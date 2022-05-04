import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {AppInput, AppText, DebounceButton, MainButtonApp} from '@components';
import FastImage from 'react-native-fast-image';
import {Images} from '@assets';
import {styles} from './styles';
import {deviceWidth, Nunitos, Spacing} from '@theme';
import isEqual from 'react-fast-compare';
import {Formik} from 'formik';
import {useFunctions} from './useFunctions';
import {ModalVerifyCode} from './ModalVerifyCode';
import strings from '@assets/trans';
import trans from '@assets/trans';

export const TabSignUp = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    verifyCode,
    isVisible,
    setIsVisible,
  } = useFunctions();
  const SocialLogin = React.memo(() => {
    return (
      <View style={{flexDirection: 'row'}}>
        <DebounceButton
          activeOpacity={0.5}
          onPress={() => {}}
          style={styles.logo_social}>
          <FastImage
            source={Images.img_google_logo}
            style={{width: Spacing.width28, height: Spacing.width28}}
          />
        </DebounceButton>
        <DebounceButton
          activeOpacity={0.5}
          onPress={() => {}}
          style={styles.logo_social}>
          <FastImage
            source={Images.img_facebook_logo}
            style={{width: Spacing.width28, height: Spacing.width28}}
          />
        </DebounceButton>
      </View>
    );
  });
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginHorizontal: Spacing.width48,
          marginVertical: Spacing.height28,
        }}>
        <View style={styles.header_signup}>
          <AppText style={styles.header_content}>{trans().register}</AppText>
          <SocialLogin />
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={values => onSubmit(values)}
          validationSchema={validationSchema}
          // validateOnChange={true}
        >
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <AppInput
                onValueChange={handleChange('full_name')}
                value={values.full_name}
                placeholder={trans().full_name}
                error={errors.full_name}
                // maxLength={LENGTH_TEXT.MAX_255}
                containerStyle={styles.form_input}
              />
              <AppInput
                onValueChange={handleChange('mobile_number')}
                value={values.mobile_number}
                placeholder={trans().phone_number}
                error={errors.mobile_number}
                // maxLength={LENGTH_TEXT.MAX_255}
                containerStyle={styles.form_input}
              />
              <AppInput
                onValueChange={handleChange('password')}
                value={values.password}
                placeholder={trans().password}
                error={errors.password}
                // maxLength={LENGTH_TEXT.MAX_255}
                containerStyle={styles.form_input}
              />
              <AppInput
                onValueChange={handleChange('confirm_password')}
                value={values.confirm_password}
                placeholder={trans().confirm_password}
                error={errors.confirm_password}
                // maxLength={LENGTH_TEXT.MAX_255}
                containerStyle={styles.form_input}
              />
              <MainButtonApp
                style={{width: '55%'}}
                onPress={handleSubmit}
                title={trans().sign_up}
              />
            </>
          )}
        </Formik>
      </View>
      <ModalVerifyCode
        isVisible={isVisible}
        verifyCode={verifyCode}
        close={() => setIsVisible(false)}
      />
    </ScrollView>
  );
};
