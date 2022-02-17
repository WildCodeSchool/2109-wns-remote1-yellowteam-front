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
  IconButton,
  Select,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
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
    <ModalContent height="90vh" m="50px">
      <ModalHeader>{title}</ModalHeader>

      <ModalCloseButton />
      <ModalBody>
        {/* Tag and photo */}
        <Flex alignItems="center">
          <Box>{tag}</Box>
          <Box ml="12px">{photo}</Box>
        </Flex>

        {/* Description */}
        <Flex flexDirection="column">
          <Text textStyle="titleTicket" mt="12px">
            Task Description
            <IconButton
              variant="unstyled"
              aria-label=""
              icon={<EditIcon />}
              onClick={() => console.log('test')}
            />
          </Text>
          <Text textStyle="body" mt="12px">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </Text>
        </Flex>

        {/* Task progress, details and attachments */}
        <Flex justifyContent="space-between" mt="12px">
          {/* task progress */}
          <Flex flexDirection="column">
            <Text textStyle="titleTicket">Task progress</Text>
            <CircularProgress value={40} color="orange" mt="12px" size="120px">
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
          {/* task details */}
          <Flex flexDirection="column">
            <Text textStyle="titleTicket">Task progress details</Text>
            <Flex mt="12px" justifyContent="space-between">
              Initial time spend estime
              <Select placeholder="Select option" width="150px">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
            <Flex mt="12px" justifyContent="space-between">
              Total time spent
              <Select placeholder="Select option" width="150px">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </Flex>
          {/* attachment */}
          <Text textStyle="titleTicket">Attachments</Text>
        </Flex>

        {/* Comments */}
        <Flex>
          <Flex flexDirection="column" mt="12px">
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
