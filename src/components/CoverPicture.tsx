import { Box, Button, Image } from '@chakra-ui/react'
import { useRef } from 'react'
import useAppState from 'src/hooks/useAppState'
import useUpload from 'src/hooks/useUpload'
import EditIcon from 'src/static/svg/Edit'
import MyDropzone from './DropZone'
import UploadProfilePictureModal from './Modals/UploadProfilePicture'

export default function CoverPicture(): JSX.Element {
  const { user } = useAppState()
  const { uploadCoverPicture, setFile, file, modal, progress } = useUpload()
  const uploadButtonRef = useRef<HTMLButtonElement>(null)

  const handleUpload = async () => {
    await uploadCoverPicture(file[0])
  }

  return (
    <Box position="relative" bg="black" w="full" h="25%">
      <Image
        src={user.cover_picture}
        fallbackSrc="https://www.weareavp.com/wp-content/uploads/2017/07/Header-Image-Placeholder.jpg"
        width="full"
        h="full"
        objectFit="cover"
      />
      <Button
        position="absolute"
        bottom={3}
        right={3}
        bg="white"
        px={0}
        py={0}
        variant="ghost"
      >
        <EditIcon />
        <MyDropzone file={file} setFile={setFile} />
      </Button>
      <UploadProfilePictureModal
        progress={progress}
        buttonRef={uploadButtonRef}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        file={file}
      />
      <Button ref={uploadButtonRef} visibility="hidden" onClick={handleUpload}>
        UPLOAD
      </Button>
    </Box>
  )
}
