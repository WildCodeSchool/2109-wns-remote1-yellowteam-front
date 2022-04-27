/* eslint-disable react/jsx-props-no-spreading */
import { Box, Flex, Image } from '@chakra-ui/react'
import { ReactElement } from 'react'
import UserInfoCard from 'src/molecules/UserInfoCard'
import UserProfileForm from 'src/components/forms/UserProfile.form'

const Profile = (): ReactElement => {
  return (
    <Flex
      direction="column"
      bg="white"
      overflow="hidden"
      rounded={12}
      mt={10}
      flexGrow={1}
    >
      <Box bg="black" w="full" h="25%">
        <Image
          src="https://cdn.downtoearth.org.in/library/large/2018-12-31/0.42789400_1546247995_for-carousel.jpg"
          width="full"
          h="full"
        />
      </Box>
      <Flex direction="column" flexGrow={1} px={50}>
        <UserInfoCard />
        <UserProfileForm />
      </Flex>
    </Flex>
  )
}

export default Profile
