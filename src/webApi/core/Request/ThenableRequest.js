import Request from './Request';

class ThenableRequest extends Request {
  then(resolve, reject) {
    return this.send().then(result => {
      if (result.message) {
        return reject(new Error(result.message));
      }

      return resolve(result);
    });
  }
}

export default ThenableRequest;