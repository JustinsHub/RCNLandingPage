import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchRandomUser } from '../actions/actions-creators'

const LandingPage:React.FC = () => {


    const profile = useSelector((state: any) => state.profile, shallowEqual)
    const error = useSelector((state: any) => state.error)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(fetchRandomUser() as any)
    }, [dispatch])

    return (
        <section>
        <div>
            {profile?.results.map((res:any, i:number) =>  
            <div key={i}>
                <div>
                    {res.name.first}
                </div>
                <img src={res.picture.large} alt="horse athlete"></img>
            </div>
        )}
        </div>
    </section>
    )
}

export default LandingPage