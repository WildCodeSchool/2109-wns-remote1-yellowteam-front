/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Spinner,
  Text,
  Image,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React, { ReactElement, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import WhitePannel from 'src/components/WhitePannel'
import { useAddUserToProjectMutation } from 'src/generated/graphql'
import useManagerProjects from 'src/hooks/useManagerProjects'
import AddIcon from 'src/static/svg/AddIcon'
import mainTheme from 'src/theme/mainTheme'

const ProjectDetails = (): ReactElement => {
  const { projects, refetch, loading } = useManagerProjects()
  const { projectId } = useParams()
  const [isFormAddUserVisible, setIsFormAddUserVisible] =
    useState<boolean>(false)
  const { handleSubmit, register, reset } = useForm()
  const [addUser, { loading: addUserLoading }] = useAddUserToProjectMutation()

  const onSubmit = async ({ email }: FieldValues): Promise<void> => {
    try {
      addUser({
        variables: {
          data: { users: { connect: [{ email: email as string }] } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error adding user to project', e)
    }
    setIsFormAddUserVisible(false)
    reset()
  }

  useEffect(() => {
    refetch()
  }, [onSubmit])

  if (loading)
    return (
      <WhitePannel close={false}>
        <Spinner />
      </WhitePannel>
    )

  const project = projects?.find((p) => p.id === projectId)

  return (
    <WhitePannel close title={project?.title}>
      <Image
        src={project?.owner.avatar}
        display="flex"
        flexDirection="column"
        style={mainTheme.section.userSmallAvatar}
      />
      <Box overflow="auto" height="22rem">
        <Box pt={5} pr={5} maxWidth="90%">
          <Text mb={3} textStyle="titleWhiteBoard">
            Project description
          </Text>
          <Text textStyle="body">{project?.description}</Text>
        </Box>
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Team members
            </Text>
            <Box>
              {project?.users.map((u) => (
                <Flex key={u.id} alignItems="center">
                  <Image
                    src={u.avatar}
                    display="flex"
                    flexDirection="column"
                    style={mainTheme.section.userSmallAvatar}
                    mr={5}
                  />
                  <Text textStyle="body">
                    {u.first_name} {u.last_name}
                  </Text>
                </Flex>
              ))}
            </Box>
            {isFormAddUserVisible ? (
              <FormControl>
                <Flex paddingTop={3}>
                  <FormLabel htmlFor="email" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    height="30px"
                    width="60%"
                    {...register('email')}
                  />
                  <Button
                    ml={3}
                    backgroundColor={mainTheme.colors.orange}
                    color="white"
                    isLoading={addUserLoading}
                    type="submit"
                    height="30px"
                    width="50px"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Add
                  </Button>
                </Flex>
              </FormControl>
            ) : null}
            {!isFormAddUserVisible ? (
              <Flex justifyContent="center">
                <Button
                  variant="unstyled"
                  onClick={() => setIsFormAddUserVisible(true)}
                >
                  <AddIcon width="30" height="32" />
                </Button>
              </Flex>
            ) : null}
          </Box>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Project details
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Time spent on project
            </Text>
          </Box>
          <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
            <Text mb={3} textStyle="titleWhiteBoard">
              Tasks accomplished
            </Text>
          </Box>
        </Flex>
      </Box>
    </WhitePannel>
  )
}

export default ProjectDetails
