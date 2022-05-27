/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import {
  GetTasksByProjectDocument,
  GetTasksByProjectQuery,
  Status,
  useCreateTaskMutation,
} from 'src/generated/graphql'
import { DateTime } from 'luxon'
import useBoardState from 'src/hooks/useBoardState'

interface IProps {
  status: Status
  isCreatingTask: boolean
  setIsCreatingTask: (isCreatingTask: boolean) => void
}

export default function NewTaskCard({
  status,
  isCreatingTask,
  setIsCreatingTask,
}: IProps): JSX.Element {
  const { selectedProject } = useBoardState()
  const { register, handleSubmit, setValue } = useForm({
    criteriaMode: 'all',
  })

  const [createTask] = useCreateTaskMutation()

  const onSubmit = async (data: FieldValues): Promise<void> => {
    createTask({
      notifyOnNetworkStatusChange: true,
      variables: {
        data: {
          title: data.title,
          description: data.description,
          private: false,
          is_disabled: false,
          status_task: status as Status,
          total_time_spent: 0,
          start_date: DateTime.fromMillis(Date.now()),
          end_date: DateTime.fromMillis(Date.now()).plus({ days: 10 }),
          project: {
            connect: {
              id: selectedProject,
            },
          },
        },
      },

      optimisticResponse: {
        __typename: 'Mutation',
        createTask: {
          __typename: 'Task',
          id: 'temporary-id',
          title: data.title,
          description: data.description,
          status_task: status as Status,
          user: {
            __typename: 'User',
            id: 'temporary-id',
            avatar: '',
            first_name: '',
          },
        },
      },
      update: (store, response) => {
        // read data from cache for this query
        const queryData: GetTasksByProjectQuery | null = store.readQuery({
          query: GetTasksByProjectDocument,
          variables: {
            where: {
              project_id: {
                equals: selectedProject,
              },
            },
          },
        })

        // add the new data to the list

        const newTask = {
          ...response.data?.createTask,
          user: {
            id: '',
            avatar: '',
            first_name: '',
          },
        }

        const newArray = [newTask, ...(queryData ? queryData.tasks : [])]

        // write data back to cache
        store.writeQuery({
          query: GetTasksByProjectDocument,
          variables: {
            where: {
              project_id: {
                equals: selectedProject,
              },
            },
          },
          data: {
            tasks: newArray,
          },
        })
      },
    })
    setValue('title', '')
    setValue('description', '')
    setIsCreatingTask(false)
  }

  return (
    <>
      {isCreatingTask && (
        <CustomBox variant="navBar" rounded={10} w="full" p={4}>
          <FormLabel mt={2}>Title</FormLabel>
          <Input
            py={1}
            px={2}
            size="sm"
            color="black"
            my={1}
            variant="card"
            type="text"
            {...register('title')}
          />
          <FormLabel mt={2}>Description</FormLabel>
          <Textarea
            py={1}
            px={2}
            size="sm"
            h="50px"
            my={1}
            color="black"
            variant="card"
            {...register('description')}
          />
          <Button
            size="xs"
            rounded={2}
            w="full"
            onClick={handleSubmit(onSubmit)}
            variant="action"
          >
            SUBMIT
          </Button>
        </CustomBox>
      )}
    </>
  )
}
