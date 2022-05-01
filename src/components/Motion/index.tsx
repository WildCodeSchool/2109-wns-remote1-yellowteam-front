import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
} from '@chakra-ui/react'
import { CustomDomComponent, motion } from 'framer-motion'

export const MotionFlex: CustomDomComponent<FlexProps> = motion(Flex)

export const MotionBox: CustomDomComponent<BoxProps> = motion(Box)

export const MotionButton: CustomDomComponent<ButtonProps> = motion(Button)
