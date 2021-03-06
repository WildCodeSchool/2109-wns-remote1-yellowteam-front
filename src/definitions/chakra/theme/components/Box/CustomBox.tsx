/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, BoxProps, ThemingProps, useStyleConfig } from '@chakra-ui/react'
import { ForwardedRef } from 'react'

type TProps = BoxProps & ThemingProps & { ref?: ForwardedRef<HTMLDivElement> }

export default function CustomBox(props: TProps): JSX.Element {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Box', { variant })

  return <Box __css={styles} {...rest} />
}
