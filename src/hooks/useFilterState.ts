/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Status } from 'src/generated/graphql'
import { setStatus, setOwned } from 'src/redux/actions'
import { RootState } from 'src/redux/reducers'

const useFilterState = () => {
  const dispatch = useDispatch()
  const { status, owned } = useSelector((state: RootState) => state.filter)

  const dispatchStatus = useCallback(
    (payload: Status) => dispatch(setStatus(payload)),
    [status]
  )

  const dispatchOwned = useCallback(
    (payload: boolean) => dispatch(setOwned(payload)),
    [owned]
  )

  return { dispatchStatus, dispatchOwned, status, owned }
}

export default useFilterState
