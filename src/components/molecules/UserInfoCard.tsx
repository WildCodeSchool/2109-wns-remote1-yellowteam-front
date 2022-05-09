import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useAppState from 'src/hooks/useAppState'
import useUpload from 'src/hooks/useUpload'
import MyDropzone from '../DropZone'
import UploadProfilePictureModal from '../Modals/UploadProfilePicture'

const MotionImage = motion(Image)

export default function UserInfoCard(): JSX.Element {
  const { user } = useAppState()
  const { uploadProfilePicture, setFile, file, modal, progress } = useUpload()
  const uploadButtonRef = useRef<HTMLButtonElement>(null)

  const handleUpload = async () => {
    await uploadProfilePicture(file[0])
  }

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
        <Box
          textAlign="center"
          overflow="hidden"
          textStyle="h1"
          position="absolute"
        >
          EDIT
          <MyDropzone file={file} setFile={setFile} />
        </Box>

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
      <UploadProfilePictureModal
        progress={progress}
        buttonRef={uploadButtonRef}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        file={file}
      />
      <Flex mx={5} direction="column">
        <Button
          ref={uploadButtonRef}
          visibility="hidden"
          onClick={handleUpload}
        >
          UPLOAD
        </Button>
        <Text textAlign="left" fontWeight="bold">
          {user?.first_name} {user?.last_name}
        </Text>
        <Text>{user?.email}</Text>
      </Flex>
    </Flex>
  )
}
