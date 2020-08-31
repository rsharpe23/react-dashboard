/* eslint-disable camelcase */
import Session from '../core/Session';

import LoginModel from './LoginModel';
import LogoutModel from './LogoutModel';

const Auth = (() => {
  const isLoggedIn = () => {
    // expires_at: '2020-08-14 09:49:51'
    const { expires_at } = Session.get();
    return Date.parse(expires_at) > Date.now();
  };

  const login = data => {
    return LoginModel.invoke(data)
      .then(result => {
        Session.set(result.data);
        return result;
      });
  };

  const logout = () => {
    return LogoutModel.invoke()
      .then(result => {
        Session.remove();
        return result;
      });
  };

  return { isLoggedIn, login, logout };
})();

export default Auth;