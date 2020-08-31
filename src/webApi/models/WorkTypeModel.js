import Route from '../core/Route';
import CRUDModel from './CRUDModel';

class WorkTypeModel extends CRUDModel {
  constructor() {
    super(new Route('api/work-types'));
  }
}

export default new WorkTypeModel();