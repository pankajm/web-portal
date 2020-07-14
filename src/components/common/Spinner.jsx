/** 
 * Spinner component to indicate waiting action. 
 */

import React from 'react';

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