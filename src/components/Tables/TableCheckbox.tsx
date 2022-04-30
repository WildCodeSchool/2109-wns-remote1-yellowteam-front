/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from '@chakra-ui/react'
import { LegacyRef, useEffect, useRef } from 'react'

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef(null)
  const resolvedRef = (ref as unknown as any) || defaultRef

  useEffect(() => {
    if (typeof resolvedRef.current !== 'undefined') {
      resolvedRef!.current.indeterminate = indeterminate
    }
  }, [resolvedRef, indeterminate])

  return (
    <input
      type="checkbox"
      ref={resolvedRef as LegacyRef<HTMLInputElement>}
      {...rest}
    />
  )
})
export default IndeterminateCheckbox
