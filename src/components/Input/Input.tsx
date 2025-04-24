import React from 'react';
import styles from './Input.module.css';

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

const Input = ({ value, setValue, label, ...props }: InputProps) => {
  return (
    <label className={styles.input}>
      <span>{label}</span>
      <input
        {...props}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </label>
  );
};

export default Input;
