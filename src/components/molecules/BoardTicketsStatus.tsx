import React, { ReactElement } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import mainTheme from '../../definitions/chakra/theme/mainTheme'

interface IBoardTicketsStatus {
  numberOfTickets: number
  title: string
}

const BoardTicketsStatus = ({
  title,
  numberOfTickets,
}: IBoardTicketsStatus): ReactElement => (
  <Flex alignItems="center" justifyContent="flex-start" width="210px">
    <Text mr={2} fontWeight="800">
      {title}
    </Text>
    <Text
      textStyle="numberTicket"
      backgroundColor={mainTheme.colors.superLightGrey}
      width="20px"
      height="20px"
      borderRadius="20px"
      textAlign="center"
    >
      {numberOfTickets}
    </Text>
  </Flex>
)

export default BoardTicketsStatus
