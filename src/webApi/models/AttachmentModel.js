import Route from '../core/Route';
import CRUDModel from './CRUDModel';

class AttachmentModel extends CRUDModel {
  constructor() {
    super(new Route('api/attachments'));
  }
}

export default new AttachmentModel();