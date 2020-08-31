import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ filled, src, alt = '' }) => {
  const className = cx('Image', {
    'Image_filled': filled,
  });
  
  return (
    <img 
      className={className} 
      src={src} 
      alt={alt} 
    />
  );
};

Image.propTypes = {
  filled: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;