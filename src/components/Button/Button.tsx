import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../../types/types';



const Button = ({
  children,
  values,
  textTransform,
  borderColor,
  buttonColor,
  fontColor,
  close,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const hasClose = typeof close === 'function';
  const isDisabled = hasClose
    ? !close
    : values.some((v) => v.trim().length === 0);

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={styles.button}
      onClick={close}
      style={{
        textTransform: textTransform,
        borderColor: borderColor,
        background: buttonColor,
        color: fontColor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
