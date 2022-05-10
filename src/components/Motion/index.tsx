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
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'

export const MotionFlex: CustomDomComponent<FlexProps> = motion(Flex)

export const MotionBox: CustomDomComponent<BoxProps & ThemingProps> =
  motion(CustomBox)

export const MotionCardBox: CustomDomComponent<BoxProps> = motion(Box)

export const MotionButton: CustomDomComponent<ButtonProps> = motion(Button)
