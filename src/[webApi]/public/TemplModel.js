import CRUDModel from './CRUDModel';
import Auth from '../Auth';

class TemplModel extends CRUDModel {
  create(data) {
    return super.create(data)
      .middleware(Auth.setHeadersInRequest);
  }

  update(id, newData) {
    return super.update(id, newData)
      .middleware(Auth.setHeadersInRequest);
  }

  delete(id) {
    return super.delete(id)
      .middleware(Auth.setHeadersInRequest);
  }
}

export default TemplModel;