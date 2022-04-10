import * as yup from 'yup';
export const validators = () => {
  return {
    email: yup
      .string()
      .required('Your email is invalid')
      .email('Your email is invalid'),
    password: yup
      .string()
      .required('Your password is invalid')
      .matches(
        /^(?=.{10,}$)(?=.*[a-zA-Z])(?=.*[0-9]).*$/,
        'More than 10 letters + numbers',
      ),
    confirm_password: yup
      .string()
      .required('Your confirm password is invalid')
      .oneOf(
        [yup.ref('password'), null],
        'Password confirmation does not match the password',
      ),
    full_name: yup
      .string()
      .required('You must enter your name')
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
        'Your name is invalid',
      ),
    mobile_number: yup
      .string()
      .required('You must enter your phone number')
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{3,8}$/,
        'Your phone number does not exist',
      ),
  };
};
