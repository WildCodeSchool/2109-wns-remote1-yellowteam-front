/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup'

export const validationsLogin = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})
