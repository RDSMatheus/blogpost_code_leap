import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
