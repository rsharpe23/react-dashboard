import Route from '../core/Route';
import CRUDModel from './CRUDModel';

class WorkModel extends CRUDModel {
  constructor() {
    super(new Route('api/portfolio'));
  }
}

export default new WorkModel();