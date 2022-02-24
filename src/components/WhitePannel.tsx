/* eslint-disable react/require-default-props */
import { Box, Flex, CloseButton, Text } from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import Header from 'src/molecules/Header'

interface IProps {
  children: ReactNode
  close: boolean
  title?: string
}

const WhitePannel = ({ children, close, title }: IProps): ReactElement => {
  const { user } = useAppState()
  const navigate = useNavigate()

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={user?.first_name ?? ''} />
      <Box
        backgroundColor="white"
        minHeight="75vh"
        mr={45}
        ml={45}
        pl={50}
        paddingRight="1rem"
        pb={30}
        borderRadius={12}
      >
        <Flex flexDirection="column" paddingTop="1rem">
          {close ? (
            <Flex justifyContent="flex-end" onClick={() => navigate(-1)}>
              <CloseButton />
            </Flex>
          ) : (
            <Box paddingTop={30} />
          )}
          <Text textStyle="h2" pb="10px">
            {title}
          </Text>
          {children}
        </Flex>
      </Box>
    </Box>
  )
}

export default WhitePannel
