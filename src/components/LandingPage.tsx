import React, { useEffect, useState } from 'react'
import RandomUser from '../api/randomUserAPI'

const LandingPage:React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const findRandomUser = async() => {
            try {
                const findRandom = await RandomUser.findRandomUser()
                console.log(findRandom)
            } catch (error) {
                return error
            }
        }
        const pageLoad = setTimeout(()=> {
            //have global UI loading for this
            setIsLoading(true)
        }, 500)
        findRandomUser()
        return () => clearTimeout(pageLoad)
    })

    return (
        <div className="h1">
            LandingPage
        </div>
    )
}

export default LandingPage