import {validators} from '@utils';
import * as yup from 'yup';
import {useState} from 'react';
import {ConfirmOTPCodeApi, SignUpApi} from '@services/Networks';
import {Value} from 'react-native-reanimated';

interface SignUpProps {
  onSubmit: (value: any) => void;
  verifyCode: (Value: any) => void;
  isVisible: boolean;
  setIsVisible: any;
  signInFacebook: () => void;
  signInGoogle: () => void;
}

export const useFunctions = (props: SignUpProps) => {
  const {
    onSubmit,
    verifyCode,
    isVisible,
    setIsVisible,
    signInFacebook,
    signInGoogle,
  } = props;
  const initialValues = {
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  const validationSchema = yup.object().shape({
    full_name: validators().full_name,
    email: validators().email,
    password: validators().password,
    confirm_password: validators().confirm_password,
  });

  return {
    initialValues,
    validationSchema,
    onSubmit,
    verifyCode,
    isVisible,
    setIsVisible,
    signInFacebook,
    signInGoogle,
  };
};
