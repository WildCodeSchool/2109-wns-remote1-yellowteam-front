/* eslint-disable react/jsx-props-no-spreading */
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  Image,
} from '@chakra-ui/react'
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
} from 'react-hook-form'
import mainTheme from 'src/definitions/chakra/theme/mainTheme'
import { GetProjectQuery } from 'src/generated/graphql'
import AddIcon from 'src/static/svg/AddIcon'

interface IProps {
  data: GetProjectQuery
  deleteUser: (user: string) => void
  isFormAddUserVisible: boolean
  isError: boolean
  register: UseFormRegister<FieldValues>
  updateProjectLoading: boolean
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onSubmitAddUser: ({ email }: FieldValues) => Promise<void>
  setIsFormAddUserVisible: (value: boolean) => void
  hideAddUserButton: (value: boolean) => void
}

const TeamMembers = ({
  data,
  deleteUser,
  isError,
  isFormAddUserVisible,
  register,
  updateProjectLoading,
  handleSubmit,
  onSubmitAddUser,
  setIsFormAddUserVisible,
  hideAddUserButton,
}: IProps): React.ReactElement => {
  return (
    <Box mr={5} flex={1}>
      <Text mb={3} textStyle="titleWhiteBoard">
        Team members
      </Text>
      <Box maxWidth="20rem" alignItems="center">
        {data.project?.users.map((u) => (
          <Flex key={u.id} justifyContent="space-between">
            <Flex mt={2}>
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
            <Button
              variant="unstyled"
              height={0}
              onClick={() => deleteUser(u.id)}
            >
              <DeleteIcon />
            </Button>
          </Flex>
        ))}
      </Box>
      {isFormAddUserVisible ? (
        <FormControl isInvalid={isError}>
          <Flex paddingTop={3} alignItems="center">
            <Box>
              <FormLabel htmlFor="email" />
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                height="30px"
                width="90%"
                {...register('email')}
              />
              {isError ? (
                <FormErrorMessage>Invalid email address</FormErrorMessage>
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
              onClick={handleSubmit(onSubmitAddUser)}
            >
              Add
            </Button>
            <Button
              ml={3}
              backgroundColor="white"
              border={`1px ${mainTheme.colors.orange}`}
              color={mainTheme.colors.orange}
              type="submit"
              height="30px"
              width="auto"
              onClick={() => hideAddUserButton(false)}
            >
              Cancel
            </Button>
          </Flex>
        </FormControl>
      ) : null}
      {!isFormAddUserVisible ? (
        <Flex justifyContent="center">
          <Button
            height={0}
            variant="unstyled"
            onClick={() => setIsFormAddUserVisible(true)}
          >
            <AddIcon width="30" height="32" color={mainTheme.colors.darkGrey} />
          </Button>
        </Flex>
      ) : null}
    </Box>
  )
}

export default TeamMembers
