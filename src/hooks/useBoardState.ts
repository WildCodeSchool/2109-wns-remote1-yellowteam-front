/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDispatch, useSelector } from 'react-redux'
import { Status } from 'src/generated/graphql'
import { setHoveredList } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useBoardState = () => {
  const dispatch = useDispatch()

  const { hoveredList } = useSelector((state: RootState) => state.board)

  const dispatchSetHoveredList = (status: Status) =>
    dispatch(setHoveredList(status))

  return { hoveredList, dispatchSetHoveredList }
}

export default useBoardState
