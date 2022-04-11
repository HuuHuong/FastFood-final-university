import React from 'react';
import auth from '@react-native-firebase/auth';

export const LoginWithPhone = async (phoneNumber: string) => {
  const response = await auth().signInWithPhoneNumber(phoneNumber);
  return response;
};
