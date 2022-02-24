/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
  Image,
} from '@chakra-ui/react'
import WhitePannel from 'src/components/WhitePannel'
import { useParams } from 'react-router-dom'
import useManagerProjects from 'src/hooks/useManagerProjects'
import AddIcon from 'src/static/svg/AddIcon'
import mainTheme from 'src/theme/mainTheme'
import { FieldValues, useForm } from 'react-hook-form'
import Edit from 'src/static/svg/Edit'
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
} from 'src/generated/graphql'
import convertHoursToDays from 'src/utils/convertHoursToDays'

const ModifyProject = (): ReactElement => {
  const { projectId } = useParams()
  const { data, refetch, loading } = useGetProjectQuery({
    variables: { id: projectId! },
    skip: projectId === undefined,
  })
  const [isFormAddUserVisible, setIsFormAddUserVisible] = useState(false)
  const [
    isDescriptionModificationVisible,
    setIsDescriptionModificationVisible,
  ] = useState(false)
  const [
    isTimeOnProjectModificationVisible,
    setIsTimeOnProjectModificationVisible,
  ] = useState(false)
  const { handleSubmit, register, reset } = useForm()
  const [uptadeproject, { loading: updateProjectLoading }] =
    useUpdateProjectMutation()

  const onSubmitAddUser = async ({ email }: FieldValues): Promise<void> => {
    try {
      uptadeproject({
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

  const onSubmitDescription = async ({
    description,
  }: FieldValues): Promise<void> => {
    try {
      uptadeproject({
        variables: {
          data: { description: { set: description } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error changing project description', e)
    }
    setIsDescriptionModificationVisible(false)
    reset()
  }

  const onSubmitChangeTimeSpent = async ({
    total_time_spent,
  }: FieldValues): Promise<void> => {
    const nbTime = parseInt(total_time_spent, 10)
    try {
      uptadeproject({
        variables: {
          data: { total_time_spent: { set: nbTime } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      console.log('error changing project description', e)
    }
    setIsTimeOnProjectModificationVisible(false)
    reset()
  }

  useEffect(() => {
    refetch()
  }, [onSubmitAddUser, onSubmitDescription, onSubmitChangeTimeSpent])

  if (loading)
    return (
      <WhitePannel close={false}>
        <Spinner />
      </WhitePannel>
    )

  if (!data) return <WhitePannel close={false}>Aucun projet</WhitePannel>

  return (
    <WhitePannel close title={`Modify: ${data.project?.title}`}>
      <Box overflow="auto" height="22rem">
        <Box pt={5} pr={5} maxWidth="90%">
          <Flex alignItems="center">
            <Text textStyle="titleWhiteBoard">Project description</Text>
            <Button
              variant="ghost "
              onClick={() => setIsDescriptionModificationVisible(true)}
            >
              <Edit />
            </Button>
          </Flex>
          {isDescriptionModificationVisible ? (
            <FormControl>
              <Flex alignItems="center">
                <FormLabel htmlFor="description" />
                <Textarea
                  id="description"
                  type="text"
                  width="70%"
                  defaultValue={data.project?.description}
                  {...register('description')}
                />
                <Button
                  ml={3}
                  backgroundColor={mainTheme.colors.orange}
                  color="white"
                  isLoading={updateProjectLoading}
                  type="submit"
                  height="30px"
                  width="auto"
                  onClick={handleSubmit(onSubmitDescription)}
                >
                  Validate
                </Button>
              </Flex>
            </FormControl>
          ) : (
            <Text textStyle="body">{data.project?.description}</Text>
          )}
          <Flex>
            <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
              <Text mb={3} textStyle="titleWhiteBoard">
                Team members
              </Text>
              <Box overflow="auto" height="6rem">
                {data.project?.users.map((u) => (
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
                      isLoading={updateProjectLoading}
                      type="submit"
                      height="30px"
                      width="auto"
                      onClick={handleSubmit(onSubmitAddUser)}
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
                    <AddIcon
                      width="30"
                      height="32"
                      color={mainTheme.colors.mediumGreyText}
                    />
                  </Button>
                </Flex>
              ) : null}
            </Box>
            <Box pt={5} pr={5} minWidth={['5rem', '10rem', '20rem', '27rem']}>
              <Flex alignItems="center">
                <Text textStyle="titleWhiteBoard">Project details</Text>
                <Button
                  variant="ghost "
                  onClick={() => setIsTimeOnProjectModificationVisible(true)}
                >
                  <Edit />
                </Button>
              </Flex>
              {isTimeOnProjectModificationVisible ? (
                <FormControl>
                  <Flex paddingTop={3}>
                    <FormLabel htmlFor="total_time_spent" />
                    <Input
                      id="total_time_spent"
                      type="text"
                      height="30px"
                      width="40%"
                      placeholder="Enter hours"
                      {...register('total_time_spent')}
                    />
                    <Button
                      ml={3}
                      backgroundColor={mainTheme.colors.orange}
                      color="white"
                      isLoading={updateProjectLoading}
                      type="submit"
                      height="30px"
                      width="auto"
                      onClick={handleSubmit(onSubmitChangeTimeSpent)}
                    >
                      Ok
                    </Button>
                  </Flex>
                </FormControl>
              ) : (
                <Flex alignItems="center">
                  <Text textStyle="body">Total time spent:</Text>
                  <Text textStyle="bodyGreenBold" ml={2}>
                    {convertHoursToDays(data.project?.total_time_spent)}
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
    </WhitePannel>
  )
}

export default ModifyProject
