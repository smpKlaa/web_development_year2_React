import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Login() {
  const [formState, setFormState] = useState('login');

  return (
    <>
      {formState === 'login' ? <LoginForm /> : <RegisterForm />}
      <a
        onClick={() => {
          if (formState === 'login') {
            setFormState('register');
          } else {
            setFormState('login');
          }
        }}
      >
        {formState === 'login'
          ? "Don't have an account? Register."
          : 'Already have an account? Login.'}
      </a>
    </>
  );
}

export default Login;
