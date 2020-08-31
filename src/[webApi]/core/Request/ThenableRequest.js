import Request from './Request';

class ThenableRequest extends Request {
  then(resolve, reject) {
    return this.send()
      .then(result => resolve(result));
  }
}

export default ThenableRequest;