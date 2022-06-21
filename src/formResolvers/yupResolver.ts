/* eslint-disable no-useless-escape */
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
  confirmPassword: Yup.string().required(),
})

export const validationsProfilUpdate = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone_number: Yup.string().matches(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  ),
})

export const validationsCreateProject = Yup.object({
  title: Yup.string().required().min(4),
  description: Yup.string().required().min(10),
})

export const validationTaskUpdate = Yup.object({
  title: Yup.string().required().min(3),
  description: Yup.string().required().min(3),
})
