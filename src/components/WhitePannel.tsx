/* eslint-disable react/require-default-props */
import { Box, Flex, CloseButton, Text } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomBox from 'src/definitions/chakra/theme/components/Box/CustomBox'

interface IProps {
  children: ReactNode
  close: boolean
  title?: string
}

const WhitePannel = ({ children, close, title }: IProps): ReactElement => {
  const navigate = useNavigate()

  return (
    <CustomBox
      flexDirection="column"
      variant="rounded"
      display="flex"
      w="full"
      h="full"
      p={10}
      mt={10}
      borderRadius={12}
    >
      <Flex flexDirection="column" flexGrow={1}>
        {close ? (
          <Flex justifyContent="flex-end" onClick={() => navigate(-1)}>
            <CloseButton />
          </Flex>
        ) : (
          <Box data-testid="box-with-padding" />
        )}
        <Text textStyle="h2" mb="10px">
          {title}
        </Text>
        {children}
      </Flex>
    </CustomBox>
  )
}

export default WhitePannel
