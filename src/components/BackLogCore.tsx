import React from 'react'
import { Flex } from '@chakra-ui/react'
import BacklogTicketsStatus from '../molecules/BacklogTicketsStatus'
import Card from './Card'
import Tag from '../molecules/Tags'

const BackLogCore = (): JSX.Element => (
  <Flex justifyContent="space-between" mt="48px" ml="72px" mr="172px" mb="10px">
    <Flex flexDirection="column">
      <BacklogTicketsStatus title="Queue" numberOfTickets={2} />
      <Card
        tag={<Tag textColor="darkGreen" tagColor="lightGreen" text="feature" />}
        title="coucou"
      />
    </Flex>
    <Flex>
      <BacklogTicketsStatus title="In Progress" numberOfTickets={2} />
    </Flex>
    <Flex>
      <BacklogTicketsStatus title="Done" numberOfTickets={2} />
    </Flex>
  </Flex>
)

export default BackLogCore
