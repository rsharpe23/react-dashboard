/* eslint-disable import/order */
import React from 'react';
import PropTypes from 'prop-types';

import TemplModal from './TemplModal';
import { ModalBody, ModalFooter } from './Modal';
import Button from '@/Button';

const ConfirmModal = ({ onClose, children, ...rest }) => {
  const handleBtnClick = (e, result) => {
    e.preventDefault();
    onClose && onClose(result);
  };

  return (
    <TemplModal {...rest} onClose={onClose}>
      <ModalBody>
        {children}
      </ModalBody>

      <ModalFooter>
        <Button outlined onClick={e => handleBtnClick(e, false)}>
          Отмена
        </Button>

        <Button onClick={e => handleBtnClick(e, true)}>
          Применить
        </Button>
      </ModalFooter>
    </TemplModal>
  );
};

ConfirmModal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default ConfirmModal;