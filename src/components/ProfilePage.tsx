import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const ProfilePage:React.FC = () => {
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)
    // console.log(profile)

    return (
        <div>
            <div className="d-flex justify-content-center mt-2">
                {users?.results?.map((res:any, i:number) =>  
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
                            <div>
                                {console.log(res) as any}
                            </div>
                        </div>
                </div>
            )}
            </div> 
        </div>
    )
}

export default ProfilePage