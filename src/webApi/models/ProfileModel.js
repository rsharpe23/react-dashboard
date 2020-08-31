import Route from '../core/Route';
import CRUDModel from './CRUDModel';

class ProfileModel extends CRUDModel {
  constructor() {
    super(new Route('api/profile'));
  }
}

export default new ProfileModel();