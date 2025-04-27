import { useContext } from 'react';
import { ContextAuth } from '../components/context/AuthContext';

export const useAuth = () => {
  const context = useContext(ContextAuth);
  if (!context) throw new Error('useAuth precisa estar dentro de um provider');
  return context;
};
