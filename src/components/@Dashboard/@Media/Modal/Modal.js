/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

import { useRequest } from 'src/hooks';
import { TemplModal, ModalBody } from '@/Modal';
import Menu, { MenuItem } from '@/Menu';
import Input from '@/Input';
import Link from '@/Link';

// Для модальных окон стилизация обычным образом (через контекст классов) 
// не подойдет, т.к. они рендерятся через портал в отдельном месте.
const DashboardMediaModal = ({ value, deleteOne, onClose, ...rest }) => {
  const { id, src, name, mimeType, size, date } = value;
  const [deleteRequest, canDelete] = useRequest();

  const deleteSelf = () => {
    deleteRequest.bind(deleteOne(id))
      .then(() => {
        onClose && onClose(false);
      });
  };

  const handleDeleteLinkClick = e => {
    e.preventDefault();

    if (!canDelete) {
      return;
    }

    if (!confirm('Do you want to delete this file?')) {
      return;
    }

    deleteSelf();
  };

  return (
    <TemplModal {...rest} onClose={onClose}>
      <ModalBody>
        <div className="row">
          <div className="col-md-8">
            <div className="text-center mb-5">
              <img
                className="mw-100"
                style={{ maxHeight: '70vh' }}
                src={src}
              />
            </div>
          </div>

          <div className="col-md-4" style={{ borderLeft: '1px solid #dee2e6' }}>
            <p><Input readOnly value={src} /></p>

            <Menu>
              <MenuItem>Навазние файла: {name}</MenuItem>
              <MenuItem>MIME-type: {mimeType}</MenuItem>
              <MenuItem>Размер: {size}</MenuItem>
              <MenuItem>Дата создания: {date}</MenuItem>
            </Menu>

            <div className="mt-2 mb-5">
              <Link onClick={handleDeleteLinkClick}>
                Удалить файл
              </Link>
            </div>
          </div>
        </div>
      </ModalBody>
    </TemplModal>
  );
};

DashboardMediaModal.propTypes = {
  value: PropTypes.object,
  deleteOne: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default DashboardMediaModal;