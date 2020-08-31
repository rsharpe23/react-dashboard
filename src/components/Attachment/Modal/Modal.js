import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useDepState, useAttachmentApi } from 'src/hooks';
import { ConfirmModal } from '@/Modal';
import Search from '@/Search';
import Thumbnail from '@/Thumbnail';
import Attachment from '../Attachment';
// import fakeData from './fakeData.json';

// TODO: Доделать поиск
const AttachmentModal = ({ initialValue, onClose }) => {
  const api = useAttachmentApi();

  const [data, setData] = useState([]);
  const [value, setValue] = useDepState(initialValue);

  const handleClose = useCallback(result => {
    onClose && onClose(result && value);
  }, [onClose, value]);

  const handleThumbnailClick = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
  };

  const receiveData = useCallback(() => {
    api.getAll().then(result => {
      const newData = result.data
        .map(item => ({
          id: item.id,
          src: item.src,
        }));

      setData(newData);
    });
  }, [api]);

  useEffect(() => receiveData(), [receiveData]);

  return (
    <ConfirmModal
      title="Выбрать изображение"
      size="lg"
      onClose={handleClose}
    >
      <div className="d-flex mb-3">
        <Search />
      </div>

      <hr style={{ marginBottom: '1.1rem' }} />

      <div className="row">
        {data.map(item => (
          <div key={item.id} className="col-md-2 mb-3">
            <Thumbnail
              src={item.src}
              alt={item.name}
              isActive={item.id === value.id}
              onClick={e => handleThumbnailClick(e, item)}
            />
          </div>
        ))}
      </div>
    </ConfirmModal>
  );
};

AttachmentModal.propTypes = {
  initialValue: PropTypes.object,
  onClose: PropTypes.func,
};

export default AttachmentModal;