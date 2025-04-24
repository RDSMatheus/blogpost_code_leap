import styles from './TextArea.module.css';
import { TextAreaProps } from '../../types/types';

const TextArea = ({ label, setValue, value, ...props }: TextAreaProps) => {
  return (
    <div className={styles.textArea}>
      <label htmlFor="content">{label}</label>
      <textarea
        id="content"
        {...props}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      ></textarea>
    </div>
  );
};

export default TextArea;
