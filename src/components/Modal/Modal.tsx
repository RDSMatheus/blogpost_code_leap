import styles from './Modal.module.css';
import { ModalProps } from '../../types/types';
import { PropsWithChildren } from 'react';

const Modal = ({ isOpen, children }: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalChildren}>{children}</div>
    </div>
  );
};

export default Modal;
