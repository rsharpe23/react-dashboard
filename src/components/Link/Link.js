import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href = '#', target, children, ...rest }) => {
  return (
    <a
      {...rest}
      href={href}
      _target={target}
    >{children}</a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
};

export default Link;