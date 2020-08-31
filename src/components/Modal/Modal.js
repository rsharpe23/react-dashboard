import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { ScrollbarUtil } from 'src/utils';
import './Modal.scss';

// TODO: Доделать скролл модального окна
const Modal = ({ size, children }) => {
  const ref = useRef();
  const container = document.getElementById('modal-root');

  const dialogClassName = cx('modal-dialog', {
    [`modal-${size}`]: size,
  });

  useEffect(() => {
    ScrollbarUtil.setActive(false);

    // XXX: Выполняем после завершения текущего кода, 
    // т.к. не всегда проигрывается анимация окна
    setTimeout(() => {
      const { classList } = ref.current;
      classList.add('show');
    });

    return () => ScrollbarUtil.setActive(true);
  }, []);

  const render = () => (
    <div className="modal fade Modal" ref={ref}>
      <div className={dialogClassName}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(render(), container);
};

Modal.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

// ===============

const ModalHeader = ({ children }) => {
  return (
    <div className="modal-header">
      {children}
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
};

// ===============

const ModalTitle = ({ children }) => {
  return (
    <h5 className="modal-title">
      {children}
    </h5>
  );
};

ModalTitle.propTypes = {
  children: PropTypes.node,
};

// ===============

const ModalBody = ({ children }) => {
  return (
    <div className="modal-body">
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

// ===============

const ModalFooter = ({ children }) => {
  return (
    <div className="modal-footer">
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
};

// ===============

export default Modal;
export { ModalHeader, ModalTitle, ModalBody, ModalFooter };