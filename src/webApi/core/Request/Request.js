import middleware from '../middleware';

class Request {
  constructor(url, options) {
    this.url = url;
    this.options = options;
    this.middleware = middleware.bind(this);
  }

  send() {
    return fetch(this.url, this.options)
      .then(response => {
        // if (!response.ok) {
        //   return response.text();
        // }

        return response.json();
      });
  }
}

export default Request;