import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { AuthContextType } from '../../types/types';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

export const ContextAuth = createContext<AuthContextType | null>(null);

export const AuthContext = ({ children }: PropsWithChildren) => {
  const { state, setState } = useLocalStorage('username', '');
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  function logout() {
    setIsLogged(false);
    setState('');
  }

  useEffect(() => {
    if (state) setIsLogged(true);
  }, [state]);

  useEffect(() => {
    if (isLogged) navigate('/feed');
  }, [isLogged, navigate]);

  return (
    <ContextAuth.Provider
      value={{
        state,
        setState,
        isLogged,
        setIsLogged,
        logout,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
