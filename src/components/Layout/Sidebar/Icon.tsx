import React from 'react'
import { RiMenuFoldFill, RiMenuUnfoldLine } from 'react-icons/ri'
import { Icon } from '@chakra-ui/react'

type Props = {
  isFold: boolean
  handleToggleFold: () => void
}

function SidebarIcon({ isFold, handleToggleFold }: Props): JSX.Element {
  return (
    <>
      {isFold ? (
        <Icon
          cursor="pointer"
          onClick={handleToggleFold}
          as={RiMenuFoldFill}
          size={10}
        />
      ) : (
        <Icon
          cursor="pointer"
          onClick={handleToggleFold}
          as={RiMenuUnfoldLine}
          size={10}
        />
      )}{' '}
    </>
  )
}

export default React.memo(SidebarIcon)
