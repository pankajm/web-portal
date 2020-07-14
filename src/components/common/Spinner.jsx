/** 
 * Reusable Spinner component to indicate waiting action. Can also be changed
 * to higher order component depending upon the use case.
 */

import React from 'react';

/**
 * 
 * @param {Boolean} props 
 */
function Spinner(props) {
  const { showSpinner } = props;
  return (
    <div>
      {showSpinner &&
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    </div>
  );
}

export default Spinner;