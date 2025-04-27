import styles from './LoginForm.module.css';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Input from '../../common/Input/Input';
import { FormEvent, useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('');
  const { setState } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
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
