/* eslint-disable import/order */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Modal, { ModalHeader, ModalTitle } from './Modal';
import { CloseButton } from '@/Button';

const TemplModal = ({ title, onClose, children, ...rest }) => {
  const handleBtnClick = useCallback(e => {
    e.preventDefault();
    onClose && onClose(false);
  }, [onClose]);

  return (
    <Modal {...rest}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <CloseButton onClick={handleBtnClick} />
      </ModalHeader>

      {children}
    </Modal>
  );
};

TemplModal.propTypes = {
  title: PropTypes.node,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default TemplModal;