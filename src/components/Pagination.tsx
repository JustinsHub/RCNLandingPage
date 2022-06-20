import React from "react";

interface PaginationProps {
    usersPerPage: number
    totalUsers: number
    paginate: (number: number) => void
 }


const Pagination:React.FC<PaginationProps> = ({usersPerPage, totalUsers, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="d-flex justify-content-center mb-5">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <div onClick={() => paginate(number)}  className="page-link" style={{cursor: 'pointer', color: '#2d3a8c'}}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination