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
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <div onClick={() => paginate(number)}  className="page-link">
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination