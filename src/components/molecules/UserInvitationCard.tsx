import { Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { UserFragment } from 'src/generated/graphql'
import { CgTrash } from 'react-icons/cg'
import { Dispatch, SetStateAction } from 'react'
import { MotionFlex } from '../Motion'

interface IProps {
  user: UserFragment
  setInvitedUsers: Dispatch<SetStateAction<UserFragment[]>>
}

export default function UserInvitationCard({
  user,
  setInvitedUsers,
}: IProps): JSX.Element {
  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      my={2}
      rounded={5}
      border="1px solid #E3E3E3"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      w="full"
      h="60px"
    >
      <Flex w="full" h="full" alignItems="center" flexGrow={1}>
        <Image
          src={user.avatar}
          h="full"
          w="40px"
          objectFit="cover"
          rounded={5}
        />
        <Flex
          p={1}
          direction="column"
          justifyContent="flex-start"
          display="flex"
          textAlign="left"
        >
          <Text fontWeight="bold">
            {user.first_name} {user.last_name}
          </Text>
          <Text color="gray.400">{user.email}</Text>
        </Flex>
      </Flex>
      <Button
        variant="ghost"
        border="1px solid #E3E3E3"
        rounded={5}
        color="#E3E3E3"
        onClick={() => {
          setInvitedUsers((c) => c.filter((u) => u.id !== user.id))
        }}
      >
        <Icon as={CgTrash} w={5} h={5} />
      </Button>
    </MotionFlex>
  )
}
