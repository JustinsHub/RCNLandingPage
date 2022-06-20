import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchManyRandomUsers } from '../actions/actions-creators'
import TempNavbar from './TempNavbar'
import useFormData from './hooks/useFormData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/DashboardPage.css'
import Pagination from './Pagination'

const DashboardPage:React.FC = () => {
    const INITIAL_DATA = {
        fullName: ''
    }
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)
    const dispatch = useDispatch()

    const [searchUser, handleChange] = useFormData(INITIAL_DATA)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(12)
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        dispatch(fetchManyRandomUsers(96) as any)
        const pageLoad = setTimeout(() => {
            setIsLoading(() => true)
        }, 400)
        return () => clearTimeout(pageLoad)
    }, [dispatch])


    //Get current posts
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage

    //slices/renders the amount we input in usersPerPage state
    const currentUsers = users?.results?.slice(indexOfFirstUser, indexOfLastUser)

    const paginate = (number: number) => setCurrentPage(() => number)


    const SearchBar = 
    <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                  <form>
                    <div className="form">
                        <FontAwesomeIcon icon={faSearch} className="fa-search"/>
                        <input 
                            type="text" 
                            name="fullName"
                            className="form-control form-input" 
                            placeholder="Search Athlete"
                            value={searchUser.fullName}
                            onChange={handleChange}
                        />
                    </div>
                  </form>
              </div>
            </div>
          </div>

    const Users = 
    <div>
        <div className="d-flex justify-content-center mt-2">
            <div className='container-fluid'>
                <div className='row'>
                    {currentUsers?.filter((users: any) => {
                        if(searchUser.fullName === '') {
                            return users
                        }else if (users.name.first.toLowerCase().includes(searchUser.fullName.toLowerCase()) || users.name.last.toLowerCase().includes(searchUser.fullName.toLowerCase())) {
                            return users
                        }
                    }).map((user:any, i:number) => 
                        <div key={i} className="col">
                            <div className="card m-5" style={{width: "18rem"}}>
                                <Link to={'/profile'} className="AthleteCards-l">
                                    <div className="d-flex justify-content-center m-3">
                                        <img src={user.picture.large} className="AthleteCards-pfp m-4" alt="Random Athletes of RTNA"/>
                                    </div>
                                <div className="card-body">
                                    <div className="AthleteCards-f-n card-title d-flex justify-content-center">{user.name.first}</div>
                                    <div className="text-center">
                                        <div><span className="AthleteCards-f">Current Location:</span> {user.location.city}</div>
                                        <div><span className="AthleteCards-f">Current Team:</span> {user.location.country}</div>
                                        <div><span className="AthleteCards-f">Horse Name:</span> {user.location.street.name}</div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                         </div>
                     )}
                </div>
            </div>
        </div>
    </div>


    if(!isLoading) return <div>Loading...</div>
    
    return (
        <div className="DashboardPage-bg">
            <section>
                <TempNavbar/>
            </section>
            <div className="d-flex justify-content-center mt-5">
                <div className="DashboardPage-t">
                    <span className="DashboardPage-o-l">Learn more about our</span> <span className="DashboardPage-s-t">athletes!</span>
                </div>
            </div>
            <div>
                {SearchBar}
            </div>
            <div>
               {Users}
               <Pagination 
               usersPerPage={usersPerPage} 
               totalUsers={users.results.length} 
               paginate={paginate}/>
            </div>
        </div>
    )
}

export default DashboardPage