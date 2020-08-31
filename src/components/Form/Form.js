import React, { forwardRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Form = ({ isInline, children, ...rest }, ref) => {
  const className = cx('Form', {
    'form-inline': isInline,
  });

  return (
    <form {...rest} className={className} ref={ref}>
      {children}
    </form>
  );
};

// Form.propTypes = {
//   isInline: PropTypes.bool,
//   children: PropTypes.node,
// };

// =============

const FormField = ({ label, children }) => {
  return (
    <div className="form-group Form-Field">
      <label>{label}</label>
      {children}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
};

// =============

export default forwardRef(Form);
export { FormField };