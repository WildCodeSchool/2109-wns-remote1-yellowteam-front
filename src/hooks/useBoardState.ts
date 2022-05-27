/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Status } from 'src/generated/graphql'
import { setHoveredList, setSelectedProject } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useBoardState = () => {
  const dispatch = useDispatch()

  const { hoveredList, selectedProject } = useSelector(
    (state: RootState) => state.board
  )

  const dispatchSetHoveredList = useCallback(
    (status: Status) => dispatch(setHoveredList(status)),
    []
  )

  const dispatchsetSelectedProject = useCallback(
    (projectId: string) => dispatch(setSelectedProject(projectId)),
    []
  )

  return {
    hoveredList,
    dispatchSetHoveredList,
    selectedProject,
    dispatchsetSelectedProject,
  }
}

export default useBoardState
