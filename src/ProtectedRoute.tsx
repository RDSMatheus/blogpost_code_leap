import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { isLogged } = useAuth();
  console.log(isLogged);
  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
