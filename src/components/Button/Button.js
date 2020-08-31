import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

// Текст внутри ссылок и кнопок не должен разрываться 
// переносом на новую строку, иначе появятся лишние пробелы
const Button = ({ size, outlined, children, ...rest }) => {
  const className = cx('btn btn-success Button', {
    [`btn-${size}`]: size,
    'Button_outlined': outlined,
  });

  return (
    <button
      {...rest}
      className={className} 
    >{children}</button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  outlined: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;