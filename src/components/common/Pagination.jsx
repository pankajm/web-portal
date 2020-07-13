import React from 'react';

function Pagination(props) {
  const { onPageChange, currentPage } = props;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={currentPage === 1 ? "page-item active" : "page-item"} onClick={() => onPageChange(1)}><a className="page-link" href="#">1</a></li>
          <li className={currentPage === 2 ? "page-item active" : "page-item"} onClick={() => onPageChange(2)}><a className="page-link" href="#">2</a></li>
        </ul>
      </nav>
    </div >
  );
}

export default Pagination;