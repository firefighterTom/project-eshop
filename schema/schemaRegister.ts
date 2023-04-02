
import * as yup from "yup";
export const loginSchema = yup.object({
    email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid mail').required('Required'),
    password: yup.string().required().min(4).max(10),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
  });