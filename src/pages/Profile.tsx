import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Tag,
  Text,
} from '@chakra-ui/react'

import React, { ReactElement, useState } from 'react'
import useAppState from 'src/hooks/useAppState'
import mainTheme from 'src/theme/mainTheme'
import Header from '../molecules/Header'

const Profile = (): ReactElement => {
  const { user } = useAppState()

  const [isHidden, setHidden] = useState<boolean>(true)

  // const [user] = ''

  console.warn('user:', user)

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
              {user?.role.map((elt) => (
                <Tag
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
                  value={user?.first_name}
                  {...register('first_name')}
                />
                <Input
                  mx="10"
                  variant="flushed"
                  placeholder="Firstname"
                  flexDirection="column"
                  value={user?.last_name}
                />
                <Input
                  mx="10"
                  variant="flushed"
                  placeholder="image url"
                  flexDirection="column"
                  type="url"
                  // type="image"
                  value={user?.avatar}
                />
              </Box>
              <Box display="flex" flexDirection="row" marginBottom="50px">
                <Input
                  mx="10"
                  variant="flushed"
                  flexDirection="column"
                  placeholder="Firstname"
                  type="email"
                  value={user?.email}
                />
                <Input
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
                />
              </Box>
            </FormControl>
            <Button
              width="20"
              mx="10"
              backgroundColor={mainTheme.colors.orange}
              color="#ffffff"
              // eslint-disable-next-line no-alert
              onClick={() => alert('sdfd')}
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
