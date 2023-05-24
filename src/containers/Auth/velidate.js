import * as yup from 'yup';

export const resgistrationSchema = yup.object().shape({
  fname: yup.string().required('Firstname is required.').trim(),
  lname: yup.string().required('Lastname is required.').trim(),
  companyName: yup.string().required('Fullname is required.').trim(),
  email: yup
    .string()
    .email('Email must be vaild.')
    .required('Email is required.')
    .trim(),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
