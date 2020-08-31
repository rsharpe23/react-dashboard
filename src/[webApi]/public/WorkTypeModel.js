import TemplModel from './TemplModel';
import Route from '../core/Route';

class WorkTypeModel extends TemplModel {
  constructor() {
    super(new Route('api/work-types'));
  }
}

export default new WorkTypeModel();