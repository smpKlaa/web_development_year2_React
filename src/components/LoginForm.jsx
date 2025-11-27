// import {useAuthentication} from '../hooks/apiHooks';
import {func} from 'prop-types';
import {useUserContext} from '../hooks/contextHooks';
import useForm from '../hooks/formHooks';
// import {useNavigate} from 'react-router';

function LoginForm() {
  const initValues = {
    username: '',
    password: '',
  };
  const {handleLogin} = useUserContext();
  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  async function doLogin() {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={(e) => {
              handleInputChange(e);
            }}
            autoComplete="username"
            value={inputs.username}
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={(e) => {
              handleInputChange(e);
            }}
            autoComplete="current-password"
            value={inputs.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
