import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { useSWRConfig } from 'swr';

import { useAuthContext } from 'renderer/context/auth';
import { useNavigate } from 'react-router-dom';
import withAuth from 'renderer/modules/shared/hoc/with-user';
import LoginForm from '../modules/auth/components/Login/LoginForm';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { revalidate } = useAuthContext();

  const onSuccess = () => {
    revalidate();
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm onSuccess={onSuccess} />
      </Box>
    </Container>
  );
};

export default withAuth(Login, true, '/', '/login');
