import Model from '../core/Model';
import Http from '../core/Http';

import provideSession from '../provideSession';

class CRUDModel extends Model {
  getAll() {
    return this.get();
  }

  get(id) {
    return Http.get(this.createURL(id));
  }

  create(data) {
    return Http.post(this.createURL(), data)
      .middleware(provideSession);
  }

  update(id, newData) {
    return Http.put(this.createURL(id), newData)
      .middleware(provideSession);
  }

  delete(id) {
    return Http.delete(this.createURL(id))
      .middleware(provideSession);
  }
}

export default CRUDModel;