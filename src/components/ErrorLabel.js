import React from 'react';

const ErrorLabel = ({error, touched, warning}) => {
  return (
    <div className="error-container">
      {touched && error &&
      <div>
          <span className="warning text">{touched && ((error && <span>{error}</span>) || (warning &&
          <span>{warning}</span>))}</span>
      </div>
      }
    </div>
  )
};

export default ErrorLabel;
