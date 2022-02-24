import React, { ReactElement } from 'react'
import { Text } from '@chakra-ui/react'
import WhitePannel from 'src/components/WhitePannel'

const Notifications = (): ReactElement => (
  <WhitePannel close={false}>
    <Text>Notifications</Text>
  </WhitePannel>
)

export default Notifications
