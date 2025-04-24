import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import styles from './Form.module.css';

interface FormProps {
  formTitle: string;
  inputLabel: string;
  textAreaLabel: string;
  handleSubmit: (title: string, content: string) => Promise<boolean | null>;
  showCancel: boolean;
  cancelBtnTxt?: string;
  btnCancelTxtTransform?: 'capitalize' | 'uppercase' | 'lowercase';
  btnCancelColor?: '#fff' | '#FF5151' | '#47B960' | '#7695EC';
  btnCancelBorder?: '#000' | '#FF5151' | '#47B960' | '#7695EC' | '#999999';
  fontColorCancel?: '#000' | '#fff';
  confirmBtnTxt: string;
  btntextTransform: 'capitalize' | 'uppercase' | 'lowercase';
  buttonColor: '#fff' | '#FF5151' | '#47B960' | '#7695EC';
  borderColor: '#000' | '#FF5151' | '#47B960' | '#7695EC' | '#999999';
  fontColor: '#000' | '#fff';
  closeModal?: () => void;
}

const Form = ({
  formTitle,
  handleSubmit,
  inputLabel,
  textAreaLabel,
  showCancel,
  confirmBtnTxt,
  cancelBtnTxt = 'Cancel',
  btnCancelTxtTransform = 'capitalize',
  btnCancelColor = '#fff',
  btnCancelBorder = '#000',
  fontColorCancel = '#000',
  borderColor,
  buttonColor,
  btntextTransform,
  fontColor,
  closeModal,
}: FormProps) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const response = await handleSubmit(title, content);
    if (response) {
      setTitle('');
      setContent('');
    }
  }

  return (
    <section className={styles.form}>
      <h2>{formTitle}</h2>
      <form onSubmit={onSubmit}>
        <Input
          label={inputLabel}
          value={title}
          setValue={setTitle}
          placeholder="Hello world"
        />
        <TextArea
          value={content}
          setValue={setContent}
          label={textAreaLabel}
          placeholder="Content here"
        />
        <div className={styles.btnWrapper}>
          {showCancel && (
            <Button
              type="button"
              borderColor={btnCancelBorder}
              buttonColor={btnCancelColor}
              textTransform={btnCancelTxtTransform}
              values={[title, content]}
              fontColor={fontColorCancel}
              close={closeModal}
            >
              {cancelBtnTxt}
            </Button>
          )}
          <Button
            type="submit"
            borderColor={borderColor}
            buttonColor={buttonColor}
            textTransform={btntextTransform}
            fontColor={fontColor}
            values={[title, content]}
          >
            {confirmBtnTxt}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
