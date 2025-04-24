export interface IPosts {
  count: number;
  next: null;
  previous: null;
  results: IPost[];
}

export interface IPost {
  username: string;
  title: string;
  content: string;
  id?: number;
  author_ip?: string;
  created_datetime?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  values: string[];
  textTransform: 'capitalize' | 'uppercase' | 'lowercase';
  buttonColor: '#fff' | '#FF5151' | '#47B960' | '#7695EC';
  borderColor: '#000' | '#FF5151' | '#47B960' | '#7695EC' | '#999999';
  fontColor: '#000' | '#fff';
  close?: () => void;
}

export interface FormProps {
  formTitle: string;
  inputLabel: string;
  textAreaLabel: string;
  handleSubmit: (title: string, content: string) => Promise<boolean>;
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

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
}

export interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
  > {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}
