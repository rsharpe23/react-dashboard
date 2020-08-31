import Model from '../core/Model';
import Route from '../core/Route';
import Http from '../core/Http';

class ProfileModel extends Model {
  constructor() {
    super(new Route('api/profile'));
  }

  get() {
    return Http.get(this.route.buildURL());
  }

  update(newData) {
    return Http.put(this.route.buildURL(), newData);
  }
}

export default new ProfileModel();