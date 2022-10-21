import React, { createContext, useContext, useEffect, useState } from 'react';
import { AUTH_USER_FETCH_KEY } from 'renderer/modules/auth/lib';
import { useSWRConfig } from 'swr';
import { useUser } from '../modules/auth/hooks';

type AuthContextType = {
  isAuth: boolean;
  loading: boolean;
  revalidate: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  loading: false,
  revalidate: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

function useProvideAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const { loading, data } = useUser();
  const { mutate } = useSWRConfig();

  const revalidate = () => {
    console.log('revalidating...');
    mutate(AUTH_USER_FETCH_KEY);
  };

  useEffect(() => {
    console.log('data', data);
    if (data && !loading) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [data, loading]);

  useEffect(() => {
    console.log('isAuth', isAuth);
  }, [isAuth]);

  return {
    isAuth,
    loading,
    revalidate,
  };
}

const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
