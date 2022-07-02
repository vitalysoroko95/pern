import React from 'react'

const Paginator = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div><ul className="pagination">{
            pageNumbers.map(number => (
                <li className="page-item" key={number}><a href="#" className="page-link" onClick={() => paginate(number)}>{number}</a></li>
            ))
        }</ul></div>
    )
}

export default Paginator