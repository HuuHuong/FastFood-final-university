import {validators} from '@utils';
import {useFormik} from 'formik';
import * as yup from 'yup';

export const useFunctions = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object().shape({
    email: validators().email,
    password: validators().password,
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: values => {
      console.log(values);
    },
  });
  return {formik};
};
