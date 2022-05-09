import { Flex, Button, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function ProjectsDeleteButton({
  onClick,
}: {
  onClick: () => void
}): JSX.Element {
  return (
    <Flex w="full" justifyContent="flex-end" alignItems="center">
      <Button px={1} py={0.5} onClick={onClick} variant="delete">
        <Icon mx={1} w={3} h={3} as={FaTrashAlt} />
        <Text fontSize={12}>Delete projects</Text>
      </Button>
    </Flex>
  )
}
