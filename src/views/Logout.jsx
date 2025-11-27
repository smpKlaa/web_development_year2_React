import {useEffect} from 'react';
import {useUserContext} from '../hooks/contextHooks';

function Logout() {
  const {handleLogout} = useUserContext();

  useEffect(() => {
    handleLogout();
  }, []);
  return <></>;
}

export default Logout;
