import React, { ReactElement, useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import PlaceholderIcon from 'src/static/svg/PlaceholderIcon'
import { ICard } from 'src/types/ICard'

const CardDetails = ({
  title,
  tag,
  photo = <PlaceholderIcon />,
}: ICard): ReactElement => (
  <Box
    backgroundColor="#FFFFFF"
    borderRadius="10"
    padding="9px 14px 9px 14px"
    marginBottom="10px"
  >
    <ModalOverlay />
    <ModalContent height="90vh">
      <ModalHeader>{title}</ModalHeader>

      <ModalCloseButton />
      <ModalBody>
        {/* Tag and photo */}
        <Flex alignItems="center" justifyContent="" height="24px" mt="12px">
          <Box>{tag}</Box>
          <Box m="12px 4px">{photo}</Box>
        </Flex>

        {/* Description */}
        <Flex flexDirection="column">
          <Text textStyle="titleTicket" mt="12px">
            Task Description
          </Text>
          <Text textStyle="body" mt="12px">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </Text>
        </Flex>

        {/* Task progress, details and attachments */}
        <Flex>
          {/* task progress */}
          <Flex flexDirection="column">
            <Text textStyle="titleTicket">Task progress</Text>
            <CircularProgress value={40} color="green.400">
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
          {/* task details */}
          <Text textStyle="titleTicket">Task progress details</Text>
          {/* attachment */}
          <Text textStyle="titleTicket">Attachments</Text>
        </Flex>

        {/* Comments */}
        <Flex>
          <Flex flexDirection="column">
            <Text textStyle="titleTicket">Comments</Text>
            <Flex>
              <Box m="12px 4px">{photo}</Box>
              <Flex flexDirection="column">
                <Text textStyle="body">Gina Johns - Developper</Text>
                <Text textStyle="body">12h09 - 01/02/2021</Text>
              </Flex>
            </Flex>
            <Text textStyle="body" mt="12px">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            {/* <Flex></Flex> */}
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Box>
)

export default CardDetails
