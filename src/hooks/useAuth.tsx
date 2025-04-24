import { useContext } from 'react';
import { ContextAuth } from '../AuthContext';

export const useAuth = () => {
  const context = useContext(ContextAuth);
  if (!context) throw new Error('UseData precisa estar dentro de um provider');
  return context;
};
