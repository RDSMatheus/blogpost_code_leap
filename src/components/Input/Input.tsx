import styles from './Input.module.css';
import { InputProps } from '../../types/types';

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
