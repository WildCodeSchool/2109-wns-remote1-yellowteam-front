import React, { ReactElement } from 'react'
import { Box, Text } from '@chakra-ui/react'

interface ICard {
  title: string
  photo: ReactElement
  tag: string
}

const Card = ({ photo, tag, title }: ICard): JSX.Element => (
  <Box
    backgroundColor="#FFFFFF"
    width={218}
    minHeight={78}
    borderRadius="10"
    border="1px solid black"
    padding="14px 9px 14px 9px"
  >
    <Text textStyle="h2">{title}</Text>
    <Box m="12px 4px">{photo}</Box>
    <Box>{tag}</Box>
  </Box>
)

export default Card
