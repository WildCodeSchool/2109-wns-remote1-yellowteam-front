import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import mainTheme from '../theme/mainTheme'

interface IBacklogTicketsStatus {
  numberOfTickets: number
  title: string
}

const BacklogTicketsStatus = ({
  title,
  numberOfTickets,
}: IBacklogTicketsStatus): JSX.Element => (
  <Flex alignItems="flex-start">
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

export default BacklogTicketsStatus
