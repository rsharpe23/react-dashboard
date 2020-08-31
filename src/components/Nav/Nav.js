import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Nav.scss';

const Nav = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const className = cx('col-md-3 col-xl-2 Nav', { 
    'Nav_active': isActive,
  });

  const handleBorderClick = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <nav className={className}>
      <div className="Nav-Area">
        {children}
      </div>

      <div
        className="Nav-Border"
        onClick={handleBorderClick}
      ></div>
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;