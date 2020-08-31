import TemplModel from './TemplModel';
import Route from '../core/Route';

class WorkModel extends TemplModel {
  constructor() {
    super(new Route('api/portfolio'));
  }
}

export default new WorkModel();