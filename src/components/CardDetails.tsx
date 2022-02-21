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
  ButtonGroup,
  Textarea,
  Image,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import PlaceholderIcon from 'src/static/svg/PlaceholderIcon'
import { useGetSingleSelfTasksQuery } from 'src/generated/graphql'

const CardDetails = ({ taskId }: ICard): ReactElement => {
  const { data } = useGetSingleSelfTasksQuery({
    variables: { where: { id: taskId } },
  })
  console.log('data => ', data)

  const card: ICardDetails = {
    taskId,
  }

  if (data && data.task) {
    const taskData = data.task
    card.taskId = taskId
    card.title = taskData.title
    card.description = taskData.description
    card.user = {
      avatar: taskData.user.avatar,
    }
    card.comments = taskData.comments
  }

  console.log('card => ', card)

  if (!data) return <div>no data</div>

  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="10"
      padding="9px 14px 9px 14px"
      marginBottom="10px"
    >
      <ModalOverlay />
      <ModalContent maxHeight="90vh" p="25px">
        <ModalHeader>{card.title}</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          {/* Tag and photo */}
          <Flex alignItems="center">
            {/* <Box>{tag}</Box> */}
            <Box ml="12px">
              <Image src={card && card.user && card.user.avatar} />
            </Box>
          </Flex>

          {/* Description */}
          <Flex flexDirection="column" mt="12px">
            <Flex>
              <Text textStyle="titleTicket" mt="12px">
                Task description
              </Text>
              <IconButton
                variant="unstyled"
                aria-label=""
                icon={<EditIcon />}
                onClick={() => console.log('test')}
              />
            </Flex>
            <Text textStyle="body" mt="12px">
              {card.description}
            </Text>
          </Flex>

          {/* Task progress, details and attachments */}
          <Flex justifyContent="space-between" mt="24px" h="150px">
            {/* task progress */}
            <Flex flexDirection="column">
              <Text textStyle="titleTicket">Task progress</Text>
              <CircularProgress
                value={40}
                color="orange"
                mt="12px"
                size="120px"
              >
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </Flex>
            {/* task details */}
            <Flex flexDirection="column">
              <Text textStyle="titleTicket">Task progress details</Text>
              <Flex
                mt="12px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text textStyle="body" mr="5px">
                  {' '}
                  Initial time spend estime
                </Text>
                <Select placeholder="Select option" width="150px" h="25px">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Flex
                mt="12px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text textStyle="body" mr="5px">
                  {' '}
                  Total time spent
                </Text>
                <Select placeholder="Select option" width="150px" h="25px">
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
          <Flex flexDirection="column" mt="24px">
            <Flex>
              <Text textStyle="titleTicket">Comments</Text>
            </Flex>
            <Flex justifyContent="space-between">
              {/* List of comments */}
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                width="50%"
              >
                {card.comments?.map((comment) => (
                  <Flex key={comment.id} flexDirection="column" mt="12px">
                    <Flex>
                      <Image
                        borderRadius="full"
                        boxSize="24px"
                        m="12px 4px"
                        src={comment.user_task_comments.avatar}
                      />
                      <Flex flexDirection="column" ml="12px">
                        <Text textStyle="body">
                          {comment.user_task_comments.first_name}{' '}
                          {comment.user_task_comments.last_name} - Developper
                        </Text>
                        <Text textStyle="body">
                          {comment.user_task_comments.created_at}
                        </Text>
                      </Flex>
                    </Flex>
                    <Text textStyle="body" mt="12px">
                      {comment.content}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              {/* Add new comment */}
              <Flex alignItems="center" width="45%" flexDirection="column">
                <Textarea
                  textStyle="body"
                  mt="12px"
                  placeholder="Add a new comment"
                />
                <Button
                  colorScheme="green"
                  size="xs"
                  alignSelf="flex-end"
                  mt="12px"
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
        {/* Footer Buttons */}
        <ModalFooter borderTop="1px" borderColor="gray.200" paddingBottom="0">
          <Button variant="outline" colorScheme="green">
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Box>
  )
}
export default CardDetails
