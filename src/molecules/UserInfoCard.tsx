import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import useAppState from 'src/hooks/useAppState'

const MotionImage = motion(Image)

export default function UserInfoCard(): JSX.Element {
  const { user } = useAppState()

  return (
    <Flex
      transform="translateY(-20px)"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box
        backgroundColor="white"
        cursor="pointer"
        rounded="full"
        w={130}
        h={130}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text textAlign="center" textStyle="h1" position="absolute">
          EDIT
        </Text>
        <MotionImage
          top={0}
          left={0}
          position="absolute"
          src={user?.avatar}
          rounded="full"
          w={130}
          h={130}
          objectFit="cover"
          whileHover={{ opacity: 0.8 }}
        />
      </Box>
      <Flex mx={5} direction="column">
        <Text textAlign="left" fontWeight="bold">
          {user?.first_name} {user?.last_name}
        </Text>
        <Text>{user?.email}</Text>
      </Flex>
    </Flex>
  )
}
