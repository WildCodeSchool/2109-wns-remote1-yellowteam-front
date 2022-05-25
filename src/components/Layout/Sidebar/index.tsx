/* eslint-disable no-nested-ternary */
import { Box, Flex, Image, Text, useColorMode } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import navLinks from 'src/config/navLinks'
import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useAppState from 'src/hooks/useAppState'
import mainTheme from '../../../definitions/chakra/theme/mainTheme'
import SignOutButton from '../../Assets/SignOutButton'
import { MotionFlex } from '../../Motion'
import Title from './Title'
import SidebarIcon from './Icon'

const CustomNavBar = motion(Box)

const UserNavBar = (): JSX.Element => {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()
  const [isFold, setIsFold] = useState<boolean>(
    localStorage.getItem('isFold') === 'true' && true
  )
  const { user } = useAppState()

  const location = useLocation()

  const variants = {
    open: { width: '300px', minWidth: '300px' },
    closed: { width: '66px', minWidth: '66px' },
  }

  useEffect(() => {
    localStorage.setItem('isFold', isFold ? 'true' : 'false')
  }, [isFold])

  const handleToggleFold = useCallback(() => setIsFold((c) => !c), [isFold])

  return (
    <CustomNavBar
      bg={colorMode === 'light' ? 'white' : '#24323F'}
      height="100vh"
      display="flex"
      z-index="1"
      alignItems="center"
      variants={variants}
      justifyContent="space-between"
      flexDirection="column"
      initial={isFold ? 'fold' : 'unfold'}
      animate={isFold ? 'open' : 'closed'}
      px={!isFold ? '2' : '1rem'}
      py={10}
    >
      <Flex direction="column" w="full">
        <Flex
          w="full"
          alignItems="center"
          justifyContent={isFold ? 'space-between' : 'center'}
        >
          <Title isFold={isFold} />
          <SidebarIcon isFold={isFold} handleToggleFold={handleToggleFold} />
        </Flex>
        <Flex my={10} w="full" direction="column">
          {navLinks.map((link) => (
            <MotionFlex
              my={4}
              key={link.name}
              py={2}
              rounded={5}
              px={2}
              w="full"
              justifyContent={isFold ? 'flex-start' : 'center'}
              as="button"
              initial={{ backgroundColor: 'transparent' }}
              animate={{
                backgroundColor: location.pathname.includes(link.name)
                  ? mainTheme.colors.orange
                  : colorMode === 'light'
                  ? 'white'
                  : '#24323F',
              }}
              data-testid={link['data-testid']}
              onClick={() => navigate(link.link)}
              bg={
                location.pathname.includes(link.name)
                  ? mainTheme.colors.orange
                  : colorMode === 'light'
                  ? 'white'
                  : '#24323F'
              }
            >
              <link.icon
                color={
                  location.pathname.includes(link.name) ? 'white' : 'orange'
                }
              />
              {isFold && (
                <Text
                  color={
                    location.pathname.includes(link.name) ? 'white' : 'gray'
                  }
                  ml={4}
                  fontWeight="bold"
                  fontSize={18}
                >
                  {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </Text>
              )}
            </MotionFlex>
          ))}
        </Flex>
      </Flex>

      <>
        {isFold ? (
          <Box
            h="80px"
            p={2}
            display="flex"
            bg={colorMode === 'light' ? '#EFEFEF' : 'gray.600'}
            w="full"
            rounded={4}
            justifyContent="space-between"
            flexDirection="row"
            fontSize={13}
            fontWeight="bold"
          >
            <Image rounded={4} src={user.avatar} h="full" />
            <Flex
              mx={1}
              alignItems="start"
              justifyContent="space-around"
              direction="column"
            >
              <Flex
                cursor="pointer"
                onClick={() => navigate('/profile')}
                alignItems="center"
                justifyContent="flex-start"
              >
                <Text>{user.first_name}</Text>
                <Text whiteSpace="nowrap">{user.last_name}</Text>
              </Flex>
              <Text fontSize={10} fontWeight="normal">
                {user.email}
              </Text>
            </Flex>
            <SignOutButton />
          </Box>
        ) : (
          <SignOutButton />
        )}
      </>
    </CustomNavBar>
  )
}

export default UserNavBar
