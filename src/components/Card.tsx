import React, { ReactElement } from 'react'
import { Box, Text, Flex, useDisclosure, Modal } from '@chakra-ui/react'
import PlaceholderIcon from '../static/svg/PlaceholderIcon'
import CardDetails from './CardDetails'

/* eslint-disable react/require-default-props */
interface ICard {
  title: string
  photo?: ReactElement
  tag: ReactElement
}

const Card = ({
  photo = <PlaceholderIcon />,
  tag,
  title,
}: ICard): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      backgroundColor="#FFFFFF"
      width="218px"
      // minHeight="78px"
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginBottom="10px"
      onClick={onOpen}
    >
      <Text noOfLines={2} textStyle="titleTicket">
        {title}
      </Text>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        height="24px"
        mt="12px"
      >
        <Box>{tag}</Box>
        <Box m="12px 4px">{photo}</Box>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        scrollBehavior="inside"
      >
        <CardDetails title={title} tag={tag} photo={photo} />
      </Modal>
    </Box>
  )
}

export default Card
