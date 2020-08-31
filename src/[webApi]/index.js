// // WorkModel.create(newData)
// //   .then(result => console.log(result.success));

// // WorkModel.getAll()
// //   .then(result => setEntries(result.data));

// // WorkModel.get(10)
// //   .then(result => setEntry(result.data));

// // WorkModel.update(10, data)
// //   .then(result => console.log(result.success));

// // WorkModel.remove(10)
// //   .then(result => console.log(result.success));

// function middleware(closure) {
//   return closure.call(this);
// }

// class Request {
//   constructor(url, options, responseBodyType = 'json') {
//     this.url = url;
//     this.options = options;
//     this.responseBodyType = responseBodyType;
//     this.middleware = middleware.bind(this);
//   }

//   send() {
//     return fetch(this.url, this.options)
//       .then(response => response[this.responseBodyType]());
//   }
// }

// class ThenableRequest extends Request {
//   then(resolve, reject) {
//     return this.send()
//       .then(result => resolve(result));
//   }
// }

// // class ThenableRequest {
// //   constructor(url, options) {
// //     this.url = url;
// //     this.options = options;
// //   }

// //   middleware(closure) {
// //     return closure.call(this);
// //   }

// //   then(resolve, reject) {
// //     return fetch(this.url, this.options)
// //       .then(response => response.json())
// //       .then(result => resolve(result));
// //   }
// // }

// const Http = (() => {
//   const sendRequest = (...args) => {
//     return new ThenableRequest(...args);
//   };

//   const that = {};
//   const methods = ['GET', 'POST', 'PUT', 'DELETE'];

//   const getDataOptions = data => {
//     const options = { body: data };

//     if (typeof data === 'object' && data instanceof FormData === false) {
//       options.body = JSON.stringify(data);
//       options.headers = { 
//         'Content-Type': 'application/json',
//       };
//     }

//     return options;
//   };

//   methods.forEach(method => {
//     that[method.toLowerCase()] = (url, data, options) => {
//       const dataOptions = getDataOptions(data);

//       return sendRequest(url, { 
//         ...options, 
//         ...dataOptions,
//         method,
//       });
//     };
//   });

//   return { sendRequest, ...that };
// })();

// // Маршрут не должен быть со слешем на конце. 
// // Это приведет к некорректному ответу сервера.
// // Так например POST-запрос http://site/users/ 
// // вернет ответ как для GET-запроса
// class Route {
//   constructor(name) {
//     this.url = new URL(name, `${Route.PROTOCOL}//${Route.HOST}`);
//   }

//   getURL(arg) {
//     return arg ? new URL(arg, this.url) : this.url;
//   }
// }

// Route.PROTOCOL = 'http:';
// Route.HOST = 'laravel-example.loc';

// class Model {
//   constructor(route) {
//     this.route = route;
//   }
// }

// class LoginModel extends Model {
//   constructor() {
//     super(new Route('api/login'));
//   }

//   invoke(email, password) {
//     return Http.post(this.route.getURL(), {
//       email,
//       password,
//     });
//   }
// }

// class LogoutModel extends Model {
//   constructor() {
//     super(new Route('api/logout'));
//   }

//   invoke() {
//     return Http.get(this.route.getURL());
//   }
// }

// export const Auth = (() => {
//   let token = null;
//   const loginModel = new LoginModel();

//   const login = (email, password) => {
//     return loginModel.invoke(email, password)
//       .then(result => {
//         return result.data && (token = result.data);
//       });
//   };

//   const logout = () => {
//     return LogoutModel.invoke()
//       .then(result => {
//         result.success && (token = null);
//       });
//   };

//   function setHeadersInRequest() {
//     if (token) {
//       const { headers } = this.options.headers;
//       headers.Accept = 'application/json';
//       headers.Authorization = token.token_type + token.access_token;
//     }

//     return this;
//   }

//   return {
//     getToken: () => token,
//     setHeadersInRequest,
//     login,
//     logout,
//   };
// })();

// class CRUDModel extends Model {
//   create(data) {
//     return Http.post(this.route.getURL(), data);
//   }

//   getAll() {
//     return this.get();
//   }

//   get(id) {
//     return Http.get(this.route.getURL(id));
//   }

//   update(id, newData) {
//     return Http.put(this.route.getURL(id), newData);
//   }

//   remove(id) {
//     return Http.delete(this.route.getURL(id));
//   }
// }

// class TemplModel extends CRUDModel {
//   create(data) {
//     return super.create(data)
//       .middleware(Auth.setHeadersInRequest);
//   }

//   update(id, newData) {
//     return super.update(id, newData)
//       .middleware(Auth.setHeadersInRequest);
//   }

//   remove(id) {
//     return super.remove(id)
//       .middleware(Auth.setHeadersInRequest);
//   }
// }

// class WorkModel extends TemplModel {
//   constructor() {
//     super(new Route('api/portfolio'));
//   }
// }

// export const workModel = new WorkModel();

export { default as Auth } from './Auth';
export { default as ProfileModel } from './public/ProfileModel';
export { default as WorkModel } from './public/WorkModel';
export { default as WorkTypeModel } from './public/WorkTypeModel';
export { default as LinkTargetModel } from './public/LinkTargetModel';