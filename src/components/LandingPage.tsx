import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchRandomUser } from '../state/actions-creators'

const LandingPage:React.FC = () => {

    
    const profile = useSelector((state: any) => state.profile, shallowEqual)
    const error = useSelector((state: any) => state.error)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(fetchRandomUser() as any)
    }, [dispatch])

    return (
        <div className="h1">
            <div>{profile.results.map((res:any) => res.name.first)}</div>
        </div>
    )
}

export default LandingPage