/* eslint-disable camelcase */
import Session from './core/Session';

export default function provideSession() {
  const { headers } = this.options;
  const { access_token } = Session.get();

  // Создаем заново весь объект, т.к. 
  // свойство headers может отсутствовать изначально.
  this.options.headers = {
    ...headers,
    'Accept': 'application/json',
    'Authorization': `Bearer ${access_token}`,
  };

  return this;
}