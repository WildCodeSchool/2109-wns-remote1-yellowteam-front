/* eslint-disable react/jsx-props-no-spreading */

import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react'
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import { GetProjectQuery } from 'src/generated/graphql'
import Edit from 'src/static/svg/Edit'

interface IProps {
  showDescriptionModificationVisible: (value: boolean) => void
  hideDescriptionModificationVisible: (value: boolean) => void
  isDescriptionModificationVisible: boolean
  isError: boolean
  data: GetProjectQuery
  updateProjectLoading: boolean
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onSubmitDescription: ({ description }: FieldValues) => Promise<void>
  register: UseFormRegister<FieldValues>
}

const ProjectDescription = ({
  showDescriptionModificationVisible,
  hideDescriptionModificationVisible,
  isDescriptionModificationVisible,
  isError,
  data,
  updateProjectLoading,
  handleSubmit,
  onSubmitDescription,
  register,
}: IProps): React.ReactElement => {
  return (
    <Box flex={1}>
      <Flex mb={3} alignItems="center">
        <Text textStyle="titleWhiteBoard">Project description</Text>
        <Button
          height={0}
          variant="ghost "
          onClick={() => showDescriptionModificationVisible(true)}
        >
          <Edit />
        </Button>
      </Flex>
      {isDescriptionModificationVisible ? (
        <FormControl isInvalid={isError}>
          <Flex alignItems="center">
            <FormLabel htmlFor="description" />
            <Textarea
              id="description"
              width="70%"
              defaultValue={data.project?.description}
              {...register('description')}
            />
            {isError ? (
              <FormErrorMessage>Error in message</FormErrorMessage>
            ) : null}
            <Button
              ml={3}
              backgroundColor={mainTheme.colors.orange}
              color="white"
              isLoading={isError ? false : updateProjectLoading}
              type="submit"
              height="30px"
              width="auto"
              onClick={handleSubmit(onSubmitDescription)}
            >
              Validate
            </Button>
            <Button
              ml={3}
              backgroundColor="white"
              border={`1px ${mainTheme.colors.orange}`}
              color={mainTheme.colors.orange}
              type="submit"
              height="30px"
              width="auto"
              onClick={() => hideDescriptionModificationVisible(false)}
            >
              Cancel
            </Button>
          </Flex>
        </FormControl>
      ) : (
        <Text textStyle="body">{data.project?.description}</Text>
      )}
    </Box>
  )
}

export default ProjectDescription
