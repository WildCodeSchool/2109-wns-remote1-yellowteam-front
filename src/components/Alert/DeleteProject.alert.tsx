import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
  Input,
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  cancelRef: React.RefObject<HTMLButtonElement>
  onOpen: () => void
  onSubmit: () => void
  loading: boolean
}

export default function DeleteProjectAlert({
  onOpen,
  onSubmit,
  loading,
  isOpen,
  cancelRef,
  onClose,
}: Props): JSX.Element {
  const [verificationText, setVerificationText] = useState<string>('')
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationText(e.target.value)
  }

  const handleDelete = async () => {
    if (verificationText === 'Delete websites now') {
      onSubmit()
      await setVerificationText('')
      return onClose()
    }
    return setError('Please type "Delete websites now" to confirm')
  }

  return (
    <>
      <Button
        backgroundColor="#24323F"
        color="white"
        w="full"
        my={2}
        onClick={onOpen}
      >
        Delete Websites
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Websites
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>
                Are you sure? You can&apos;t undo this action afterwards .
                <br /> If you know what you are doing, type the verification
                text in the input below.
              </Text>
              <Text fontWeight="bold" mt={2}>
                Verifiation text :
              </Text>
              <Text>Delete project now</Text>
              <Input
                onChange={handleChange}
                value={verificationText}
                placeholder="Type here"
              />
              <Text color="red">{error}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={loading}
                colorScheme="red"
                onClick={handleDelete}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
