/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axiosInstance from './axiosInstance'

interface UploadProfilePicture {
  userId: string
  size: number
  formData: FormData
  setProgress: (progress: number) => void
}

export const avatar = {
  upload: async ({
    userId,
    size,
    formData,
    setProgress,
  }: UploadProfilePicture) =>
    (
      await axiosInstance.post(`?userId=${userId}&size=${size}`, formData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          setProgress((loaded / total) * 100)
        },
      })
    ).data.data,
}
