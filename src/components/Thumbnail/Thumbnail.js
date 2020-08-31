import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Image from '@/Image';
import './Thumbnail.scss';

const Thumbnail = ({ isActive, onClick, ...rest }) => {
  const className = cx('Thumbnail', {
    'Thumbnail_active': isActive,
  });

  return (
    <div className={className}>
      <a href="#" onClick={onClick}>
        <Image {...rest} filled />
      </a>
    </div>
  );
};

Thumbnail.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Thumbnail;