import React from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
  > {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

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
