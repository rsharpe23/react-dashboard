import Model from '../core/Model';
import Http from '../core/Http';

class CRUDModel extends Model {
  create(data) {
    return Http.post(this.route.buildURL(), data);
  }

  getAll() {
    return this.get();
  }

  get(id) {
    return Http.get(this.route.buildURL(id));
  }

  update(id, newData) {
    return Http.put(this.route.buildURL(id), newData);
  }

  delete(id) {
    return Http.delete(this.route.buildURL(id));
  }
}

export default CRUDModel;