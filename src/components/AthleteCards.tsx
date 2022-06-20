import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchManyRandomUsers } from '../actions/actions-creators'
import '../styles/Athletes.css'


const AthleteCards:React.FC = () => {
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)
    const dispatch:any = useDispatch()
    // const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(fetchManyRandomUsers(3) as any)
        // setIsLoading(() => true)
    }, [dispatch])


    return (
        <div>
            <div className="d-flex justify-content-center mt-2">
                <div className='container-fluid' >
                    <div className='row'>
                    {users?.results?.map((user:any, i:number) =>  
                        <div key={i} className="col">
                                <div className="card m-5" style={{width: "18rem"}}>
                                    <Link to={`/profile/${user.name.first}`} className="AthleteCards-l">
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
    )
}

export default AthleteCards