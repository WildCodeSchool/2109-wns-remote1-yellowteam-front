import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

interface ITag {
  text: string
  textColor: 'darkRed' | 'darkGreen' | 'darkBrown'
  tagColor: 'lightRed' | 'lightGreen' | 'lightBrown'
}

const Tag = ({ text, textColor, tagColor }: ITag): JSX.Element => (
  <Flex
    backgroundColor={tagColor}
    height={['18px', '22px']}
    minWidth={['22px', '32px']}
    borderRadius="15"
    justifyContent="center"
    alignItems="center"
  >
    <Text
      padding="5px"
      fontSize={['8px', '12px']}
      fontFamily="Avenir"
      fontWeight="600"
      color={textColor}
    >
      {text}
    </Text>
  </Flex>
)

export default Tag
