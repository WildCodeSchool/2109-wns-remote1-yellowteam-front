/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement, useState } from 'react'
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
  useToast,
} from '@chakra-ui/react'
import WhitePannel from 'src/components/WhitePannel'
import { useParams } from 'react-router-dom'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import { FieldValues, useForm } from 'react-hook-form'
import Edit from 'src/static/svg/Edit'
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
} from 'src/generated/graphql'
import convertHoursToDays from 'src/utils/convertHoursToDays'
import InvitePeopleModal from 'src/components/Modals/InvitePeopleModal'

const ModifyProject = (): ReactElement => {
  const toast = useToast()

  const { projectId } = useParams()
  const { data, loading } = useGetProjectQuery({
    variables: { id: projectId || '' },
    skip: projectId === undefined,
  })
  const [
    isDescriptionModificationVisible,
    setIsDescriptionModificationVisible,
  ] = useState(false)
  const [
    isTimeOnProjectModificationVisible,
    setIsTimeOnProjectModificationVisible,
  ] = useState(false)
  const { handleSubmit, register, reset } = useForm()
  const [updateproject, { loading: updateProjectLoading }] =
    useUpdateProjectMutation()

  const onSubmitDescription = async ({
    description,
  }: FieldValues): Promise<void> => {
    try {
      await updateproject({
        variables: {
          data: { description: { set: description } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      toast({
        title: 'error changing project description',
      })
    }
    setIsDescriptionModificationVisible(false)
    reset()
  }

  const onSubmitChangeTimeSpent = async ({
    total_time_spent,
  }: FieldValues): Promise<void> => {
    const nbTime = parseInt(total_time_spent, 10)
    try {
      await updateproject({
        variables: {
          data: { total_time_spent: { set: nbTime } },
          projectId: { id: projectId },
        },
      })
    } catch (e) {
      toast({
        title: 'error changing project description',
      })
    }
    setIsTimeOnProjectModificationVisible(false)
    reset()
  }

  if (loading)
    return (
      <WhitePannel close={false}>
        <Spinner />
      </WhitePannel>
    )

  if (!data) return <WhitePannel close={false}>No project here</WhitePannel>

  return (
    <WhitePannel close title={`Modify: ${data.project?.title}`}>
      <Box overflow="auto" height="full">
        <Box pt={5} pr={5} w="full">
          <Flex alignItems="center" justifyContent="space-between" w="full">
            <Flex alignItems="center">
              <Text textStyle="titleWhiteBoard">Project description</Text>
              <Button
                variant="ghost "
                onClick={() => setIsDescriptionModificationVisible(true)}
              >
                <Edit />
              </Button>
            </Flex>
            <InvitePeopleModal />
          </Flex>
          {isDescriptionModificationVisible ? (
            <FormControl>
              <Flex alignItems="center">
                <FormLabel htmlFor="description" />
                <Textarea
                  id="description"
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
