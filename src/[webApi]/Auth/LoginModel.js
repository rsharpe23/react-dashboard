import Model from '../core/Model';
import Route from '../core/Route';
import Http from '../core/Http';

class LoginModel extends Model {
  constructor() {
    super(new Route('api/login'));
  }

  invoke(email, password) {
    return Http.post(this.route.buildURL(), {
      email,
      password,
    });
  }
}

export default new LoginModel();