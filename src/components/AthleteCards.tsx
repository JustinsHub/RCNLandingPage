import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchManyRandomUsers } from '../actions/actions-creators'
import '../styles/Athletes.css'


const AthleteCards:React.FC = () => {
    const profile = useSelector((state: any) => state.profile, shallowEqual)
    // const error = useSelector((state: any) => state.error)
    const dispatch = useDispatch()
    console.log(profile)

    useEffect(() => {
        dispatch(fetchManyRandomUsers(3) as any)
    }, [dispatch])

    return (
        <div>
            <div className="d-flex justify-content-center mt-2">
                {profile?.results.map((res:any, i:number) =>  
                <div key={i}>
                        <div className="card m-5" style={{width: "18rem"}}>
                            <div className="d-flex justify-content-center m-3">
                                <img src={res.picture.large} className="AthleteCards-pfp m-4" alt="Random Athletes of RTNA"/>
                            </div>
                        <div className="card-body">
                            <div className="AthleteCards-f-n card-title d-flex justify-content-center">{res.name.first}</div>
                            <div className="text-center">
                                <div><span className="AthleteCards-f">Current Location:</span> {res.location.city}</div>
                                <div><span className="AthleteCards-f">Current Team:</span> {res.location.country}</div>
                                <div><span className="AthleteCards-f">Horse Name:</span> {res.location.street.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div> 
        </div>
    )
}

export default AthleteCards