import { Center } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from './Loading.json'

export default function LoadingScreen(): JSX.Element {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Center
      bg="darkBlueCustom"
      position="absolute"
      display="flex"
      flexDirection="column"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      zIndex={500}
      color="gray.300"
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </Center>
  )
}
