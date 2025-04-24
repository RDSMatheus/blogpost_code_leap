import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
}

const Modal = ({ isOpen, children }: React.PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return <div className={styles.modalWrapper}>{children}</div>;
};

export default Modal;
