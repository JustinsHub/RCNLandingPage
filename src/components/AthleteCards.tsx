import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchManyRandomUsers } from '../actions/actions-creators'
import '../styles/Athletes.css'


const AthleteCards:React.FC = () => {
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    //when card is clicked -> redirects to profile of the user... how to pass info to profile component?

    useEffect(() => {
        dispatch(fetchManyRandomUsers(3) as any)
        // setIsLoading(() => true)
    }, [dispatch])


    return (
        <div>
            <div className="d-flex justify-content-center mt-2">
                {users?.results?.map((user:any, i:number) =>  
                <div key={i}>
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
    )
}

export default AthleteCards