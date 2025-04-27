import {
  ButtonHTMLAttributes,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  TextareaHTMLAttributes,
} from 'react';

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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  titleEdit?: string;
  contentEdit?: string;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
}

export interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
  > {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
}

export interface AuthContextType {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
}

export interface ModalContextType {
  openEditModal: boolean;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  editingPostId: number | null;
  setEditingPostId: Dispatch<SetStateAction<number | null>>;
  openDeleteModal: boolean;
  setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
  deletePostId: number | null;
  setDeletePostId: Dispatch<SetStateAction<number | null>>;
}

export interface PostsContextType {
  createPost: (body: IPost) => Promise<boolean>;
  deletePost: (id: number) => Promise<boolean>;
  updatePost: (id: number, title: string, content: string) => Promise<boolean>;
  posts: IPosts | null;
  setPosts: Dispatch<SetStateAction<IPosts | null>>;
  getPosts: (url?: string) => Promise<void>;
  loading: boolean;
}
