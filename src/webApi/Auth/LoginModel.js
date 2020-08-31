import Model from '../core/Model';
import Route from '../core/Route';
import Http from '../core/Http';

class LoginModel extends Model {
  constructor() {
    super(new Route('api/login'));
  }

  invoke(data) {
    return Http.post(this.createURL(), data);
  }
}

export default new LoginModel();