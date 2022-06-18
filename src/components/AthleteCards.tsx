import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchRandomUser } from '../actions/actions-creators'
import '../styles/Athletes.css'


const AthleteCards:React.FC = () => {
    const profile = useSelector((state: any) => state.profile, shallowEqual)
    // const error = useSelector((state: any) => state.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRandomUser() as any)
    }, [dispatch])

    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                {profile?.results.map((res:any, i:number) =>  
                <div key={i}>
                        <div className="card" style={{width: "18rem"}}>
                            <div className="d-flex justify-content-center m-3">
                                <img src={res.picture.large} className="AthleteCards-pfp card-img-top" alt="..."/>
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">{res.name.first}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            )}
            </div> 
        </div>
    )
}

export default AthleteCards