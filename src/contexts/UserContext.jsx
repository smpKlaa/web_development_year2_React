import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      // post login credentials to API
      console.log('log in:', credentials);
      const {user, token} = await postLogin(credentials);

      // TODO: set token to local storage
      if (token) {
        localStorage.setItem('token', token);
      } else {
        console.log('Login failed: no token received');
        return false;
      }
      // TODO: set user to state
      setUser(user);
      // TODO: navigate to home
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      console.log('log out');
      // remove token from local storage
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
      } else {
        console.log('Unable to log out: no token found');
      }
      // set user to null
      setUser(null);
      // navigate to home or login page
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      console.log('autologin');
      // get token from local storage
      const token = localStorage.getItem('token');
      // if token exists, get user data from API
      if (token) {
        const result = await getUserByToken(token);
        // set user to state
        setUser(result);
        // navigate to home
        navigate('/');
      } else {
        console.log('Unable to autologin: no token found');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export {UserProvider, UserContext};
