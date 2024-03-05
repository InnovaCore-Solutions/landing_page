import React, { useState } from 'react';

const Alert = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className={`alert alert-${type}`}>
          <button onClick={handleClose}>&times;</button>
          {message}
        </div>
      )}
    </div>
  );
};

export default Alert;
