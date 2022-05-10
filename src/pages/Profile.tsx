/* eslint-disable react/jsx-props-no-spreading */
import { Flex } from '@chakra-ui/react'
import { ReactElement } from 'react'
import UserInfoCard from 'src/components/molecules/UserInfoCard'
import UserProfileForm from 'src/components/forms/UserProfile.form'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'
import CoverPicture from 'src/components/CoverPicture'

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
      <CoverPicture />

      <Flex direction="column" flexGrow={1} px={50}>
        <UserInfoCard />
        <UserProfileForm />
      </Flex>
    </CustomBox>
  )
}

export default Profile
