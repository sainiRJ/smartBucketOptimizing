import React, { useState, useEffect } from 'react';

const AlertMessage = ({ message, type, timeout }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  return (
    <>
      {visible && (
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      )}
    </>
  );
};

export default AlertMessage;
