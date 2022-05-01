import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { FileValidated } from '@dropzone-ui/react'
import UploadButton from '../Motion/UploadButton'

interface IProps {
  isOpen: boolean
  onClose: () => void
  file: FileValidated[]
  buttonRef: React.RefObject<HTMLButtonElement>
  progress: number
}

export default function UploadProfilePictureModal({
  isOpen,
  onClose,
  file,
  buttonRef,
  progress,
}: IProps): JSX.Element {
  return (
    <Modal
      variant="solid"
      isCentered
      size="4xl"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          borderTopRadius={5}
          display="flex"
          justifyContent="space-between"
          backgroundColor="orange"
        >
          <Text color="white">Upload files for this ticket</Text>

          <Button
            backgroundColor="red"
            borderRadius={2}
            color="white"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalHeader>
        <ModalBody>
          {file.length && (
            <Image src={URL.createObjectURL(file[0].file as File)} />
          )}
          <UploadButton
            onClick={() => buttonRef.current?.click()}
            progress={progress}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
