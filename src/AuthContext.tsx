import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

export const ContextAuth = React.createContext<AuthContextType | null>(null);

export const AuthContext = ({ children }: React.PropsWithChildren) => {
  const { state, setState } = useLocalStorage('username', '');
  const [isLogged, setIsLogged] = React.useState(false);
  const navigate = useNavigate();

  function logout() {
    setIsLogged(false);
    setState('');
  }

  React.useEffect(() => {
    if (state) setIsLogged(true);
  }, [state]);

  React.useEffect(() => {
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
