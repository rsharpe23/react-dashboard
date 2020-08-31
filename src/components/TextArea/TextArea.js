import React from 'react';

const TextArea = props => {
  return (
    <textarea 
      {...props} 
      className="form-control TextArea" 
    />
  );
};

export default TextArea;