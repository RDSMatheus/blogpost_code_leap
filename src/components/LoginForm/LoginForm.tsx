import React from 'react';
import styles from './LoginForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { UseData } from '../../Context';

const LoginForm = () => {
  const [name, setName] = React.useState('');
  const { setState } = UseData();
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setState(name);
    navigate('/feed');
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <h1>Welcome to CodeLeap network!</h1>
        <form onSubmit={handleSubmit}>
          <Input
            value={name}
            setValue={setName}
            label="Please enter your username"
            placeholder="Jhon Doe"
          />
          <Button
            borderColor="#7695EC"
            fontColor="#fff"
            buttonColor="#7695EC"
            textTransform="uppercase"
            values={[name]}
          >
            enter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
