import { useContext } from 'react';
import { ContextModal } from '../components/context/ModalContext';

export const useModal = () => {
  const context = useContext(ContextModal);
  if (!context) throw new Error('useModal precisa estar dentro de um provider');
  return context;
};
