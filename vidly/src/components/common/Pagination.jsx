import React, { Component } from 'react';
import lodash from 'lodash';

const Pagination = (props) => {

    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    const pageCount = Math.ceil(itemsCount / pageSize); //返回最小整数
    if (pageCount == 1)
        return null
    const pages = lodash.range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className='page-link' onClick={() => onPageChange(page)} style={{cursor : "pointer"}}>{page}</a>
                    </li>
                ))}
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
     );
}

export default Pagination;