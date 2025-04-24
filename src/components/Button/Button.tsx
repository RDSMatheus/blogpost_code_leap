import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  values: string[];
  textTransform: 'capitalize' | 'uppercase' | 'lowercase';
  buttonColor: '#fff' | '#FF5151' | '#47B960' | '#7695EC';
  borderColor: '#000' | '#FF5151' | '#47B960' | '#7695EC' | '#999999';
  fontColor: '#000' | '#fff';
  close?: () => void;
}

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
