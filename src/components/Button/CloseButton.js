import React from 'react';

const CloseButton = props => {
  return (
    <button 
      {...props} 
      className="close"
    ><span>&times;</span></button>
  );
};

export default CloseButton;