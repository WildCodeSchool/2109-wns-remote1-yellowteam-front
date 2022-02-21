import { Box, Button, Image, Tag, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useAppState from 'src/hooks/useAppState'
import mainTheme from 'src/theme/mainTheme'
import Header from '../molecules/Header'

const Profile = (): ReactElement => {
  const { user } = useAppState()

  console.log('debug', user)

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
          <Button
            display="flex"
            flexDirection="column"
            marginLeft="200px"
            backgroundColor={mainTheme.colors.orange}
            color="#ffffff"
            // eslint-disable-next-line no-alert
            onClick={() => alert('sdfd')}
          >
            Modify
          </Button>
        </Box>

        <Box display="flex" flexDirection="row" marginTop="50px">
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
            <Text fontWeight="bold" fontSize="20">
              {user?.first_name} {user?.last_name}
            </Text>
            <Box>
              {user?.role.map((elt) => (
                <Tag
                  backgroundColor={mainTheme.colors.orange}
                  color="white"
                  fontWeight="bold"
                  fontSize="12"
                  width="20"
                  justifyContent="center"
                  marginX="1"
                >
                  {elt}
                </Tag>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Profile