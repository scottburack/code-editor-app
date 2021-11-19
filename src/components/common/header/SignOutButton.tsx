import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const SignOutStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}))

const SignOutButton = () => {
  const { logout } = useAuth0();

  const onSignOut = () => {
    logout({ returnTo: window.location.origin })
  }

  return (
    <SignOutStyledButton onClick={onSignOut}>Sign Out</SignOutStyledButton>
  )
}

export default SignOutButton
