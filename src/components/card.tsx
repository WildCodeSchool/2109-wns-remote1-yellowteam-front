import React, { ReactElement } from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

interface ICard {
  title: string
  photo: ReactElement
  tag: ReactElement
}

const Card = ({ photo, tag, title }: ICard): JSX.Element => (
  <Box
    backgroundColor="#FFFFFF"
    width="218px"
    minHeight="78px"
    borderRadius="10"
    padding="9px 14px 9px 14px"
  >
    <Text textStyle="h2">{title}</Text>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      height="24px"
      mt="12px"
    >
      <Box>{tag}</Box>
      <Box m="12px 4px">{photo}</Box>
    </Flex>
  </Box>
)

export default Card
