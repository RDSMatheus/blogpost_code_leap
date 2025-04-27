import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/forms/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>CodeLeap | Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
