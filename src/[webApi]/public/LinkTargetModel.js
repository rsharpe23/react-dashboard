import Model from '../core/Model';
import Route from '../core/Route';
import Http from '../core/Http';

class LinkTargetModel extends Model {
  constructor() {
    super(new Route('api/link-targets'));
  }

  getAll() {
    return Http.get(this.route.buildURL());
  }
}

export default new LinkTargetModel();