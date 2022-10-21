import { ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'renderer/context/auth';

export default function withAuth(
  Component: ComponentType,
  redirectIfExist = false,
  redirectTo?: string,
  routename?: string
): React.FC {
  return () => {
    const { isAuth, loading } = useAuthContext();
    const route = useLocation();
    if (isAuth && redirectIfExist && typeof redirectTo !== 'undefined') {
      return <Navigate to={redirectTo} replace />;
    }
    if (loading && !isAuth) {
      return <div>loading</div>;
    }
    if (!loading && !isAuth && route.pathname !== routename) {
      return <Navigate to="/login" replace />;
    }
    return <Component />;
  };
}
