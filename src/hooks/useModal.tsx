import { useContext } from 'react';
import { ContextModal } from '../components/ModalContext';

export const useModal = () => {
  const context = useContext(ContextModal);
  if (!context) throw new Error('UseData precisa estar dentro de um provider');
  return context;
};
