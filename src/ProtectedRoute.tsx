import React from 'react';
import { Navigate } from 'react-router-dom';
import { UseData } from './Context';

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { isLogged } = UseData();
  console.log(isLogged);
  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
