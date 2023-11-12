
import * as yup from "yup";
export const loginSchema = yup.object({
    email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid mail').required('Mail is required'),
    password: yup.string().required('Password is a required').min(4).max(10),
  });
  export const registrationSchema = yup.object({
    name: yup.string().required('This field is a required').min(3).max(20),
    email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid mail').required('Mail is required'),
    password: yup.string().required('Password is a required').min(4).max(10),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match').required('Password confirmation is required')
  });