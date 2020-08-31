/* eslint-disable brace-style */
import { ThenableRequest as Request } from './Request';

const Http = (() => {
  const that = {
    createRequest: (...args) => new Request(...args),
  };

  const methods = [
    'GET', 
    'POST', 
    'PUT', 
    'DELETE',
  ];

  const getDataOptions = data => {
    const options = { body: data };

    if (typeof data === 'object'
      && data instanceof FormData === false) 
    {
      options.body = JSON.stringify(data);
      options.headers = {
        'Content-Type': 'application/json',
      };
    }

    return options;
  };

  methods.forEach(method => {
    that[method.toLowerCase()] = (url, data, options) => {
      const dataOptions = getDataOptions(data);

      return that.createRequest(url, {
        ...options,
        ...dataOptions,
        method,
      });
    };
  });

  return that;
})();

export default Http;