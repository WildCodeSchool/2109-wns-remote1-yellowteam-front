/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FileValidated } from '@dropzone-ui/react/build/components/dropzone/components/utils/validation.utils'
import { useDisclosure, useToast } from '@chakra-ui/react'
import { avatar } from 'src/services/fetcher/api.fetcher'
import useAppState from './useAppState'

const useUpload = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState<FileValidated[]>([])
  const { user, dispatchUpdateUser } = useAppState()
  const toast = useToast()

  if (!user) {
    throw new Error('User not found')
  }

  useEffect(() => {
    if (file.length) {
      if (file.length > 1) {
        setFile((c) => [c[1]])
      }
      onOpen()
    }
  }, [file])

  const uploadProfilePicture = async (oneFile: FileValidated) => {
    const formData = new FormData()

    formData.append(
      'operations',
      JSON.stringify({
        query:
          'mutation upload($file: Upload!){\n uploadProfilePicture(file: $file){\n  avatar\n }\n}\n',
      })
    )
    formData.append('map', JSON.stringify({ '0': ['variables.file'] }))
    formData.append('0', file[0].file)

    const response = await avatar.upload({
      formData,
      userId: user.id,
      setProgress,
      size: oneFile.file.size,
    })

    if (response.uploadProfilePicture) {
      dispatchUpdateUser({
        ...user,
        avatar: response.uploadProfilePicture.avatar,
      })
      setProgress(0)
      setFile([])
      onClose()
      return toast({
        description: 'Avatar updated',
        position: 'bottom',
        status: 'success',
        title: 'Success',
      })
    }
    throw new Error('Error updating avatar')
  }

  return {
    uploadProfilePicture,
    progress,
    setFile,
    file,
    modal: { isOpen, onClose, onOpen },
  }
}

export default useUpload
