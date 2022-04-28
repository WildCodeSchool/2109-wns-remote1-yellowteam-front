import React, { ReactElement } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import mainTheme from '../../definitions/chakra/theme/mainTheme'

interface IBoardTicketsStatus {
  numberOfTickets: number
  title: string
}

export const BoardTicketsStatus = ({
  title,
  numberOfTickets,
}: IBoardTicketsStatus): ReactElement => (
  <Flex alignItems="flex-start" width="210px">
    <Text
      textStyle="body"
      fontWeight="800"
      marginRight="12px"
      marginBottom="18px"
    >
      {title}
    </Text>
    <Text
      textStyle="numberTicket"
      backgroundColor={mainTheme.colors.superLightGrey}
      width="20px"
      height="20px"
      borderRadius="20px"
      textAlign="center"
      paddingTop="1px"
    >
      {numberOfTickets}
    </Text>
  </Flex>
)

export default BoardTicketsStatus
