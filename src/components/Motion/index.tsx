import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  ThemingProps,
} from '@chakra-ui/react'
import { CustomDomComponent, motion } from 'framer-motion'

export const MotionFlex: CustomDomComponent<FlexProps> = motion(Flex)

export const MotionBox: CustomDomComponent<BoxProps & ThemingProps> =
  motion(Box)

export const MotionCardBox: CustomDomComponent<BoxProps> = motion(Box)

export const MotionButton: CustomDomComponent<ButtonProps> = motion(Button)
