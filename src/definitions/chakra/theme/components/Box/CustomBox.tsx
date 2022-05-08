/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'

export default function CustomBox(
  props: BoxProps & { variant?: string }
): JSX.Element {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Box', { variant })

  return <Box __css={styles} {...rest} />
}
