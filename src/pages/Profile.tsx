/* eslint-disable react/jsx-props-no-spreading */
import { Box, Flex, Image } from '@chakra-ui/react'
import { ReactElement } from 'react'
import UserInfoCard from 'src/components/molecules/UserInfoCard'
import UserProfileForm from 'src/components/forms/UserProfile.form'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'

const Profile = (): ReactElement => {
  return (
    <CustomBox
      variant="navBar"
      flexDirection="column"
      display="flex"
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
    </CustomBox>
  )
}

export default Profile
