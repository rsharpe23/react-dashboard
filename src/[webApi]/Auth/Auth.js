import LoginModel from './LoginModel';
import LogoutModel from './LogoutModel';

// Попробовать использовать freshApiToken 
// вместо явной передачи токена
const Auth = (() => {
  let token = null;

  // TODO: Токен нужно сохранять в localStorage либо через React Router
  // Для работы с токеном возможно понадобится отдельный класс
  const login = (email, password) => {
    return LoginModel.invoke(email, password)
      .then(result => {
        result.data && (token = result.data);
        return result;
      });
  };

  const logout = () => {
    return LogoutModel.invoke()
      .then(result => {
        result.success && (token = null);
        return result;
      });
  };

  function setHeadersInRequest() {
    if (token) {
      const { headers } = this.options;

      this.options.headers = { 
        ...headers, 
        'Accept': 'application/json', 
        'Authorization': `${token.token_type} ${token.access_token}`,
      };
    }

    return this;
  }

  return {
    getToken: () => token,
    getLoginStatus: () => !!token,
    setHeadersInRequest,
    login,
    logout,
  };
})();

export default Auth;