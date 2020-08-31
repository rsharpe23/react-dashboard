import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Screen.scss';

const Screen = ({ mix, children }) => {
  const className = cx('Screen', mix);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Screen.propTypes = {
  mix: PropTypes.string,
};

export default Screen;