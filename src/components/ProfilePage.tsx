import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import '../styles/Profile.css'
import TempProfileNavbar from './TempProfileNavbar'

const ProfilePage:React.FC = () => {
    const { userName } = useParams()
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)

    return (
        <div>
            <section>
                <TempProfileNavbar/>
            </section>
            <div>
                {users?.results
                .filter((user:any) => user.name.first === userName)
                .map((profile:any, i:number) => (
                        
                <div key={i}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                                <div className="card user-card-full">
                                    <div className="row">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="" style={{marginBottom: '25%'}}>
                                                    <img src={profile.picture.large} className="Profile-pfp" alt="User Face Profile"/>
                                                </div>
                                                <p className="Profile-f-n fw-bold">{profile.name.title} {profile.name.first} {profile.name.last}</p>
                                                <p className="Profile-f">DOB: {new Date(profile.dob.date).toLocaleString('en-us',{month:'long', day: "numeric", year:'numeric'})}</p>
                                                <p className="Profile-f">Age: {profile.dob.age}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="Profile-t b-b-default fw-bold">Information</h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="Profile-t fw-bold">Email</p>
                                                        <h6 className="text-muted">{profile.email}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="Profile-t fw-bold">Phone Number</p>
                                                        <h6 className="text-muted">{profile.cell}</h6>
                                                    </div>
                                                </div>
                                                <h6 className="Profile-t b-b-default fw-bold">Location</h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="Profile-t fw-bold">Address</p>
                                                        <h6 className="text-muted">{profile.location.street.name}</h6>
                                                        <h6 className="text-muted">{profile.location.city}, {profile.location.state}, {profile.location.postcode}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="Profile-t fw-bold">Coordinates</p>
                                                        <h6 className="text-muted">Latitude: {profile.location.coordinates.latitude}</h6>
                                                        <h6 className="text-muted">Longitude: {profile.location.coordinates.longitude}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    ))}
            </div> 
        </div>
    )
}

export default ProfilePage