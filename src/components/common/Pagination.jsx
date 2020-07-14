/** 
 * Pagination component to navigate between pages.
 */


import React from 'react';

function Pagination(props) {
  const { onPageChange, currentPage } = props;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={currentPage === 1 ? "page-item active" : "page-item"} onClick={() => onPageChange(1)}><span className="page-link">1</span></li>
          <li className={currentPage === 2 ? "page-item active" : "page-item"} onClick={() => onPageChange(2)}><span className="page-link">2</span></li>
        </ul>
      </nav>
    </div >
  );
}

export default Pagination;