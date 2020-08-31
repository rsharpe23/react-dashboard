import Route from '../core/Route';
import CRUDModel from './CRUDModel';

class LinkTargetModel extends CRUDModel {
  constructor() {
    super(new Route('api/link-targets'));
  }
}

export default new LinkTargetModel();