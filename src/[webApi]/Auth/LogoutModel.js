import Model from '../core/Model';
import Route from '../core/Route';
import Http from '../core/Http';

class LogoutModel extends Model {
  constructor() {
    super(new Route('api/logout'));
  }

  invoke() {
    return Http.get(this.route.buildURL());
  }
}

export default new LogoutModel();