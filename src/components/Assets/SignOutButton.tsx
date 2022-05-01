import { Box } from '@chakra-ui/react'
import customProperties from 'src/definitions/chakra/theme/mainTheme'
import { useMutateLogoutMutation } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import SignOutIcon from 'src/static/svg/SignOutIcon'

export default function SignOutButton(): JSX.Element {
  const { dispatchLogout } = useAppState()

  const [mutateLogout] = useMutateLogoutMutation({
    onCompleted: () => dispatchLogout(),
    // eslint-disable-next-line no-console
    onError: (err) => console.log('error', err),
  })

  return (
    <Box
      as="button"
      data-testid="sign-out-button"
      onClick={() => mutateLogout()}
    >
      <SignOutIcon color={customProperties.colors.deactivatedGrey} />
    </Box>
  )
}
