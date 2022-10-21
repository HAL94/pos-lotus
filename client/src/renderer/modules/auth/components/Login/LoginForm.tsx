import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import { useMutation } from '@apollo/client';
import { Alert, CircularProgress } from '@mui/material';

import { AiFillCloseCircle } from 'react-icons/ai';
import React, { useEffect } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
import { CredentialsInput, LoginDocument } from '../../../../graphql/generated';

interface Props {
  onSuccess: () => void;
}

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [login, { data, loading, reset }] = useMutation(LoginDocument);
  // const navigate = useNavigate();

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      username: { value: string };
      password: { value: string };
    };
    const username = formElements['username'].value;
    const password = formElements['password'].value;
    const input: CredentialsInput = {
      username,
      password,
    };
    if (username && password && username.length > 0 && password.length > 0) {
      login({
        variables: {
          loginInput: input,
        },
      });
    }
  };

  useEffect(() => {
    if (!loading && data?.login.success) {
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [loading, data?.login.success, onSuccess]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!loading && data?.login.success) {
    return (
      <div>
        <p>{data.login.message}</p>
      </div>
    );
  }

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
      {!loading && data?.login.success === false && (
        <Alert
          severity="error"
          action={
            <AiFillCloseCircle
              className="cursor-pointer"
              size={25}
              onClick={() => reset()}
            />
          }
        >
          {data?.login.message}
        </Alert>
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="username"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={
          <Checkbox name="rememberMe" value="remember" color="primary" />
        }
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Don\&apos\t have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
