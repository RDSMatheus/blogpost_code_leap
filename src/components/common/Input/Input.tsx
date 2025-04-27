import { InputProps } from '../../../types/types';
import styles from './Input.module.css';

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
