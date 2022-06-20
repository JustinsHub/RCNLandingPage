import React from "react";

interface PaginationProps {
    usersPerPage: number
    totalUsers: number
 }


const Pagination:React.FC<PaginationProps> = ({usersPerPage, totalUsers}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination