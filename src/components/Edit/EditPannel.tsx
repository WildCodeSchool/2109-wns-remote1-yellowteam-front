/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Flex,
  FormLabel,
  forwardRef,
  Input,
  Portal,
  Text,
  useOutsideClick,
  Textarea,
  useColorMode,
  Button,
} from '@chakra-ui/react'
import { RefObject, useEffect, useRef } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import {
  GetTasksByProjectQuery,
  Status,
  useGetAllFillesFromTaskQuery,
  useUpdateTaskMutation,
} from 'src/generated/graphql'
import FileIcon from 'src/static/svg/FileIcon'
import customScrollbar from 'src/styles/customScrollbar'
import { MotionBox } from '../Motion'

interface IProps {
  task: GetTasksByProjectQuery['tasks'][number]
  setIsEdit: (isEditOpen: boolean) => void
}

const EditPannel = forwardRef(({ task, setIsEdit }: IProps, ref) => {
  const { register, handleSubmit, setValue } = useForm()
  const { data } = useGetAllFillesFromTaskQuery({
    variables: {
      where: {
        id: task.id,
      },
    },
  })

  const [updateTask] = useUpdateTaskMutation()

  const { colorMode } = useColorMode()

  const handleClosePannel = () => {
    setValue('title', '')
    setValue('description', '')
    setIsEdit(false)
  }

  useOutsideClick({
    ref: ref as unknown as RefObject<HTMLElement>,
    handler: handleClosePannel,
  })

  useEffect(() => {
    setValue('title', task.title)
    setValue('description', task.description)
  }, [task])

  const onSubmit = async (taskData: FieldValues) => {
    updateTask({
      variables: {
        where: {
          id: task.id,
        },
        data: {
          title: {
            set: taskData.title,
          },
          description: {
            set: taskData.description,
          },
        },
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateTask: {
          __typename: 'Task',
          ...task,
          status_task: task.status_task as Status,
          title: taskData.title,
          description: taskData.description,
        },
      },
    })
    handleClosePannel()
  }

  const bodyRef = useRef(document.getElementById('layout-id'))

  return (
    <Portal containerRef={bodyRef}>
      <Box
        position="absolute"
        top={0}
        left={0}
        display="flex"
        justifyContent="flex-end"
        w="full"
        h="full"
        bg="blackAlpha.800"
      >
        <MotionBox
          bg={colorMode === 'dark' ? '#24323F' : 'white'}
          ref={ref}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          h="100vh"
          w="20%"
          flexDirection="column"
        >
          <Flex
            w="full"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Editor</Text>
            <FormLabel mt={3} w="full">
              Title
            </FormLabel>
            <Input {...register('title')} variant="filled" />
            <FormLabel mt={3} w="full">
              Description
            </FormLabel>
            <Textarea {...register('description')} variant="filled" />
            <FormLabel mt={3} w="full">
              Attachments
            </FormLabel>
            <CustomBox
              bg={colorMode === 'dark' ? 'whiteAlpha.50' : 'gray.100'}
              p={3}
              justifyContent="flex-start"
              alignItems="start"
              overflowY="scroll"
              sx={customScrollbar}
              w="full"
              minH="300px"
              maxH="300px"
              display="flex"
              flexDirection="column"
              variant="navBar"
              rounded={5}
            >
              {data?.task?.files.map((file) => (
                <Flex
                  w="full"
                  justifyContent="center"
                  alignItems="center"
                  key={file.id}
                >
                  <FileIcon />
                  <Text
                    cursor="pointer"
                    _hover={{ textDecoration: 'underline' }}
                    isTruncated
                    w="full"
                    fontSize={18}
                    mx={2}
                  >
                    {file.name}
                  </Text>
                </Flex>
              ))}
            </CustomBox>
          </Flex>
          <Flex w="full" justifyContent="space-between">
            <Button
              mr={1}
              onClick={handleSubmit(onSubmit)}
              w="full"
              variant="action"
            >
              SUBMIT
            </Button>
            <Button
              ml={1}
              onClick={handleClosePannel}
              w="full"
              variant="delete"
            >
              CANCEL
            </Button>
          </Flex>
        </MotionBox>
      </Box>
    </Portal>
  )
})

export default EditPannel
