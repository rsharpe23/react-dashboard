import Model from '../core/Model';
import Route from '../core/Route';
import Http from '../core/Http';

import provideSession from '../provideSession';

class LogoutModel extends Model {
  constructor() {
    super(new Route('api/logout'));
  }

  invoke() {
    return Http.post(this.createURL())
      .middleware(provideSession);
  }
}

export default new LogoutModel();