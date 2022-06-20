import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchManyRandomUsers } from '../actions/actions-creators'
import useFormData from './hooks/useFormData'
import '../styles/DashboardPage.css'
import { Link } from 'react-router-dom'
import TempNavbar from './TempNavbar'

const DashboardPage:React.FC = () => {
    const INITIAL_DATA = {
        fullName: ''
    }
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const [searchUser, handleChange] = useFormData(INITIAL_DATA)

    useEffect(() => {
        dispatch(fetchManyRandomUsers(12) as any)
        setIsLoading(() => true)
    }, [dispatch])


    const SearchBar = 
    <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                  <form>
                    <div className="form">
                        <input 
                            type="text" 
                            name="fullName"
                            className="form-control form-input" 
                            placeholder="Search Athlete"
                            value={searchUser.fullName}
                            onChange={handleChange}
                        />
                    <span className="left-pan"><i className="fa fa-microphone"></i></span>
                    </div>
                  </form>
              </div>
            </div>
          </div>

    const Users = 
    <div>
        <div className="d-flex justify-content-center mt-2">
            <div className='container-fluid' >
                <div className='row'>
            {users?.results?.filter((users: any) => {
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

    return (
        <div>
            <section>
                <TempNavbar/>
            </section>
            <div className="d-flex justify-content-center m-5">
                <div className="DashboardPage-t">
                    Learn more about our athletes!
                </div>
            </div>
            <div>
                {SearchBar}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {Users}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage