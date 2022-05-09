/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react'
import {
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import { GetProjectQuery } from 'src/generated/graphql'
import Edit from 'src/static/svg/Edit'
import convertHoursToDays from 'src/utils/convertHoursToDays'

interface IProps {
  totalHoursAvailableOnProject: number
  isTimeOnProjectModificationVisible: boolean
  handleSubmit: UseFormHandleSubmit<FieldValues>
  register: UseFormRegister<FieldValues>
  updateProjectLoading: boolean
  onSubmitChangeTimeSpent: ({ total_time_spent }: FieldValues) => Promise<void>
  data: GetProjectQuery
  showTimeOnProjectModificationVisible: (value: boolean) => void
  hideModifyTimeButton: (value: boolean) => void
  isError: boolean
}

const ProjectDetails = ({
  totalHoursAvailableOnProject,
  isTimeOnProjectModificationVisible,
  handleSubmit,
  register,
  updateProjectLoading,
  onSubmitChangeTimeSpent,
  showTimeOnProjectModificationVisible,
  data,
  hideModifyTimeButton,
  isError,
}: IProps): React.ReactElement => {
  return (
    <Box pr={5} flex={1} ml={5}>
      <Flex mb={3} alignItems="center">
        <Text textStyle="titleWhiteBoard">Project details</Text>
        <Button
          height={0}
          variant="ghost "
          onClick={() => showTimeOnProjectModificationVisible(true)}
        >
          <Edit />
        </Button>
      </Flex>

      <Flex alignItems="center">
        <Text textStyle="body">Initial time spent estimee:</Text>
        <Text textStyle="bodyGreenBold" ml={2}>
          {convertHoursToDays(totalHoursAvailableOnProject)}
        </Text>
      </Flex>
      {isTimeOnProjectModificationVisible ? (
        <FormControl isInvalid={isError}>
          <Flex paddingTop={3}>
            <FormLabel htmlFor="total_time_spent" />
            <Box>
              <Input
                id="total_time_spent"
                type="text"
                height="30px"
                width="60%"
                placeholder="Enter hours"
                {...register('total_time_spent')}
              />
              {isError ? (
                <FormErrorMessage>Invalid time</FormErrorMessage>
              ) : null}
            </Box>
            <Button
              ml={3}
              backgroundColor={mainTheme.colors.orange}
              color="white"
              isLoading={isError ? false : updateProjectLoading}
              type="submit"
              height="30px"
              width="auto"
              onClick={handleSubmit(onSubmitChangeTimeSpent)}
            >
              Ok
            </Button>
            <Button
              ml={3}
              backgroundColor="white"
              border={`1px ${mainTheme.colors.orange}`}
              color={mainTheme.colors.orange}
              type="submit"
              height="30px"
              width="auto"
              onClick={() => hideModifyTimeButton(false)}
            >
              Cancel
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
  )
}

export default ProjectDetails
