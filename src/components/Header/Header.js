import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ fixed, children }) => {
  const className = cx('Header', {
    'Header_fixed': fixed,
  });

  return (
    <header className={className}>
      <div className="Header-Inner">
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  fixed: PropTypes.bool,
  children: PropTypes.node,
};

export default Header;