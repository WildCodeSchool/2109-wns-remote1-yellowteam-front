/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Tag,
  Text,
} from '@chakra-ui/react'

import React, { ReactElement, useEffect, useState } from 'react'
import useAppState from 'src/hooks/useAppState'
import mainTheme from 'src/theme/mainTheme'
import { FieldValues, useForm } from 'react-hook-form'
import Header from '../molecules/Header'
import { useMutationUpdateUserArgsMutation } from '../generated/graphql'

const Profile = (): ReactElement => {
  const { user } = useAppState()

  const { dispatchUpdateUser } = useAppState()
  const [isHidden, setHidden] = useState<boolean>(true)
  const [userUpdate] = useMutationUpdateUserArgsMutation({
    onCompleted: (data) => {
      dispatchUpdateUser(data.updateUser)
    },
  })

  const { handleSubmit, register } = useForm()

  useEffect(() => {}, [user])

  const onSubmit = async ({
    first_name,
    last_name,
    email,
    avatar,
  }: FieldValues): Promise<void> => {
    userUpdate({
      variables: {
        data: {
          first_name: { set: !first_name ? user?.first_name : first_name },
          last_name: { set: !last_name ? user?.last_name : last_name },
          email: { set: !email ? user?.email : email },
          avatar: { set: !avatar ? user?.avatar : avatar },
        },
        where: { id: user?.id },
      },
    })
  }

  return (
    <>
      <Box marginLeft="69px" height="100%">
        <Header userName={user?.first_name ?? ''} />
      </Box>
      <Box style={mainTheme.section.card}>
        <Box flexDirection="row" display="flex" alignItems="flex-start">
          <Text textStyle="h2" display="flex" flexDirection="column">
            Your profile
          </Text>
          {isHidden ? (
            <>
              <Button
                display="flex"
                flexDirection="column"
                marginLeft="200px"
                backgroundColor={mainTheme.colors.orange}
                color="#ffffff"
                onClick={() => setHidden(false)}
              >
                Modify
              </Button>
            </>
          ) : (
            <>
              <Button
                display="flex"
                flexDirection="column"
                marginLeft="200px"
                backgroundColor="white"
                variant="outline"
                borderWidth="3px"
                borderColor={mainTheme.colors.orange}
                _hover={{ bg: mainTheme.colors.orange, color: 'white' }}
                color={mainTheme.colors.orange}
                onClick={() => setHidden(true)}
              >
                Close
              </Button>
            </>
          )}
        </Box>

        <Box display="flex" flexDirection="row" marginTop={50}>
          <Image
            src={user?.avatar}
            display="flex"
            flexDirection="column"
            style={mainTheme.section.userAvatar}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginLeft="50px"
          >
            <Text
              display="flex"
              flexDirection="row"
              fontWeight="bold"
              fontSize="20"
            >
              {user?.first_name} {user?.last_name}
            </Text>
            <Box display="flex" flexDirection="row">
              {user?.role.map((elt, index) => (
                <Tag
                  key={+index}
                  backgroundColor={mainTheme.colors.orange}
                  color="white"
                  fontWeight="bold"
                  fontSize="12"
                  width="20"
                  justifyContent="center"
                  margin="1"
                >
                  {elt}
                </Tag>
              ))}
            </Box>
          </Box>
        </Box>
        {!isHidden && (
          <>
            <FormControl
              width="100%"
              height="100%"
              marginTop="10"
              padding="1"
              justifyContent="space-between"
            >
              <Box display="flex" flexDirection="row" marginBottom="50px">
                <Input
                  mx="10"
                  variant="flushed"
                  placeholder="Firstname"
                  flexDirection="column"
                  type="text"
                  {...register('first_name')}
                />
                <Input
                  mx="10"
                  variant="flushed"
                  placeholder="Lastname"
                  flexDirection="column"
                  type="text"
                  {...register('last_name')}
                />
                <Input
                  mx="10"
                  variant="flushed"
                  placeholder="Image url"
                  type="text"
                  flexDirection="column"
                  // type="image"
                  {...register('avatar')}
                />
                <Input
                  mx="10"
                  variant="flushed"
                  flexDirection="column"
                  placeholder="Email"
                  type="email"
                  {...register('email')}
                />
              </Box>

              {/* Autre logique avec endpoint différents */}
              {/* <Input
                  mx="10"
                  variant="flushed"
                  placeholder="Old password"
                  flexDirection="column"
                  value="old password"
                />
                <Input
                  mx="10"
                  variant="flushed"
                  flexDirection="column"
                  placeholder="New password"
                  value="new password"
                /> */}
            </FormControl>
            <Button
              width="20"
              mx="10"
              backgroundColor={mainTheme.colors.orange}
              color="#ffffff"
              // eslint-disable-next-line no-alert
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </Button>
          </>
        )}
      </Box>
    </>
  )
}

export default Profile
