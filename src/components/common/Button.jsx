/**
 * Simple reusable Button component
 */

import React from 'react';

/**
 * @param {Function, string, boolean} props 
 */
function Button(props) {
  const { onButtonClick, label, isDisabled } = props;
  return (
    <button
      disabled={isDisabled}
      onClick={onButtonClick}
      className="btn btn-info mb-3">
      {label}
    </button>
  );
}

export default Button;