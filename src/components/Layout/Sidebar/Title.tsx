import { Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  isFold: boolean
}

function Title({ isFold }: Props): JSX.Element {
  return (
    <>
      {isFold && (
        <Text fontSize={12} fontWeight="bold" whiteSpace="nowrap">
          Y TASK MANAGER
        </Text>
      )}
    </>
  )
}

export default React.memo(Title)
