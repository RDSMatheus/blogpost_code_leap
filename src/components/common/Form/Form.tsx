import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import styles from './Form.module.css';
import { FormProps } from '../../../types/types';
import Input from '../Input/Input';
import { FormEvent, useState } from 'react';

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
  contentEdit = '',
  titleEdit = '',
}: FormProps) => {
  const [title, setTitle] = useState(titleEdit);
  const [content, setContent] = useState(contentEdit);

  async function onSubmit(event: FormEvent) {
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
