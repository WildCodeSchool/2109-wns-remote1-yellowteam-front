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
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUserProjectsQuery } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import AddIcon from 'src/static/svg/AddIcon'
import Delete from 'src/static/svg/Delete'
import Edit from 'src/static/svg/Edit'
import mainTheme from 'src/theme/mainTheme'
import Header from '../molecules/Header'

const Project = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, userId } = useAppState()
  const { data } = useGetUserProjectsQuery({
    variables: { userId },
    skip: !userId,
  })

  if (!data || !data.projects)
    return (
      <Box marginLeft="69px" height="100%">
        <Header userName={user?.first_name ?? ''} />
        <Box
          backgroundColor="white"
          minHeight="75vh"
          mr={45}
          ml={45}
          p={50}
          borderRadius={12}
        >
          <Text textStyle="h2">Your projects</Text>
          <Text textStyle="h4">No project</Text>
        </Box>
      </Box>
    )

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={user?.first_name ?? ''} />
      <Box
        backgroundColor="white"
        minHeight="75vh"
        mr={45}
        ml={45}
        p={50}
        borderRadius={12}
      >
        <Text textStyle="h2" pb={15}>
          Your projects
        </Text>
        <Box height="20rem" overflow="auto">
          {data.projects.map((project) => (
            <Flex alignItems="center" justifyContent="space-between">
              <Flex>
                <Text textStyle="h3">{project.title} - </Text>
                <Text textStyle="h4">
                  &nbsp;{project.due_date.substring(0, 10)}
                </Text>
              </Flex>
              <Flex alignItems="center" ml={30}>
                <Button variant="ghost">
                  <Edit />
                </Button>
                <Button variant="ghost">
                  <Delete color={mainTheme.colors.mediumGreyText} />
                </Button>
              </Flex>
            </Flex>
          ))}
        </Box>
        <Flex mt={30} justifyContent="center">
          <Button variant="unstyled" onClick={onOpen}>
            <AddIcon />
          </Button>
          <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New project</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>coucou</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    </Box>
  )
}

export default Project
