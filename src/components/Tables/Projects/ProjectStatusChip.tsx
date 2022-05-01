import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Status } from 'src/generated/graphql'

type Props = {
  status: Status
}

const StatusChipColor = {
  [Status.InProgress]: {
    text: 'In progress',
    color: 'orange',
  },
  [Status.Fihished]: {
    text: 'Finished',
    color: 'green',
  },
  [Status.NotStarted]: {
    text: 'Not started',
    color: 'dimGray',
  },
}

export default function ProjectStatusChip({ status }: Props): JSX.Element {
  return (
    <Box
      color="white"
      w={20}
      rounded="full"
      py={1}
      bg={StatusChipColor[status].color}
    >
      <Text fontSize={10} fontWeight="bold" textAlign="center">
        {StatusChipColor[status].text}
      </Text>
    </Box>
  )
}
