import { Portal } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { MotionBox, MotionFlex } from 'src/components/Motion'

export default function EditPannelPortal({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <Portal>
      <MotionFlex position="absolute" top={0} left={0} w="100vw" h="100vh">
        <MotionBox
          animate={{ opacity: 0.6 }}
          initial={{ opacity: 0 }}
          bg="black"
          flexGrow={1}
        />
        <MotionFlex
          animate={{ x: 0 }}
          initial={{ x: 400 }}
          bg="white"
          w="25%"
          h="100vh"
        >
          {children}
        </MotionFlex>
      </MotionFlex>
    </Portal>
  )
}
