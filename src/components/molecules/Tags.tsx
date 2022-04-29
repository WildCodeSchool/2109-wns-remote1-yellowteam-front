import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Status } from 'src/generated/graphql'

interface ITag {
  text: string
  textColor: 'darkRed' | 'darkGreen' | 'darkBrown' | 'white'
  tagColor: TagColor
}

export enum TagColor {
  dimgray = 'dimgray',
  green = 'green',
  lightRed = 'lightRed',
  lightGreen = 'lightGreen',
  lightBrown = 'lightBrown',
  orange = 'orange',
}
export const tagColorSwitch = {
  [Status.Fihished]: TagColor.green,
  [Status.InProgress]: TagColor.orange,
  [Status.NotStarted]: TagColor.dimgray,
}

const Tag = ({ text, textColor, tagColor }: ITag): JSX.Element => (
  <Flex
    backgroundColor={tagColor}
    height={['18px', '22px']}
    minWidth={['22px', '22px']}
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
