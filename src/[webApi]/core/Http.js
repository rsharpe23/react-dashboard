import { ThenableRequest } from './Request';

const Http = (() => {
  const sendRequest = (...args) => {
    return new ThenableRequest(...args);
  };

  const that = {};
  const methods = ['GET', 'POST', 'PUT', 'DELETE'];

  const getDataOptions = data => {
    const options = { body: data };

    if (typeof data === 'object' && data instanceof FormData === false) {
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

      return sendRequest(url, {
        ...options,
        ...dataOptions,
        method,
      });
    };
  });

  return { sendRequest, ...that };
})();

export default Http;