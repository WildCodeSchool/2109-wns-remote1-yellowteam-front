/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup'

export const validationsLogin = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})

export const validationsRegister = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})
