import { MotionBox, MotionButton } from '.'

interface IProps {
  progress: number
  onClick: () => void
}

export default function UploadButton({
  progress,
  onClick,
}: IProps): JSX.Element {
  return (
    <MotionButton
      my={2}
      overflow="hidden"
      py={4}
      position="relative"
      w="full"
      h="full"
      variant="action"
      onClick={onClick}
    >
      UPLOAD {progress}%
      <MotionBox
        left={0}
        zIndex={40}
        position="absolute"
        bottom={0}
        h="10px"
        w={`${progress}%`}
        bg="white"
      />
    </MotionButton>
  )
}
