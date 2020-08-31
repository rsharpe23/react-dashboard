// Использовать input:hidden с атрибутом readOnly
// См. https://til.hashrocket.com/posts/dvqhfc5r0y-read-only-input-elements-with-react

import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { isNullOrEmpty } from 'src/utils';
import { useDepState } from 'src/hooks';

import Icon from '@/Icon';
import Button from '@/Button';
import Thumbnail from '@/Thumbnail';
import Link from '@/Link';
import AttachmentModal from './Modal';
import './Attachment.scss';

// eslint-disable-next-line import/order
// import fakeThumbnail from 'public/img/avatar.png';

// XXX: Поле attachment, получаемое из БД, может быть null, 
// а параметры по умолчанию задаются только для значений undefined.
// Мемоизированный объект emptyObj нужен, чтобы небыло зацикливания 
// в хуке useDepState. (См. строгое сравнение между объектами)
const Attachment = ({ initialValue, name = 'attachment' }) => {
  const emptyObj = useMemo(() => ({}), []);
  const _initialValue = initialValue || emptyObj;

  const [value, setValue] = useDepState(_initialValue);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleBrowseBtnClick = useCallback(e => {
    e.preventDefault();
    setIsOpenModal(true);
  }, []);

  const handleDeleteLinkClick = useCallback(e => {
    e.preventDefault();
    setValue(emptyObj);
    // ======
  }, [emptyObj, setValue]);

  const handleModalClose = useCallback(newValue => {
    newValue && setValue(newValue);
    setIsOpenModal(false);
  }, [setValue]);

  return (
    <>
      <div className="Attachment">
        {isNullOrEmpty(value) ? (
          <p>
            <Button outlined onClick={handleBrowseBtnClick}>
              Выбрать изображение
            </Button>
          </p>
        ) : (
          <figure>
            <Thumbnail src={value.src} alt={value.name} />

            <figcaption>
              <Link onClick={handleBrowseBtnClick}>
                <Icon glyph="edit-2" />
              </Link>

              <Link onClick={handleDeleteLinkClick}>
                <Icon glyph="trash" />
              </Link>
            </figcaption>
          </figure>
        )}

        <input
          readOnly
          type="hidden"
          name={`${name}_id`}
          value={value.id || ''}
        />
      </div>

      {isOpenModal && (
        <AttachmentModal
          initialValue={value}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

Attachment.propTypes = {
  initialValue: PropTypes.object,
  name: PropTypes.string,
};

export default Attachment;