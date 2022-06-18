import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchRandomUser } from '../actions/actions-creators'
import '../styles/LandingPage.css'
import About from './About'
import Athletes from './Athletes'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Navbar from './Navbar'

const LandingPage:React.FC = () => {
    const navigateAbout = useRef(null)
    const navigateContact = useRef(null)

    const profile = useSelector((state: any) => state.profile, shallowEqual)
    const error = useSelector((state: any) => state.error)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(fetchRandomUser() as any)
    }, [dispatch])

    return (
        <section>
            <section>
                <Navbar about={navigateAbout} contact={navigateContact}/>
            </section>
            {/* <div>
                {profile?.results.map((res:any, i:number) =>  
                <div key={i}>
                    <div>
                        {res.name.first}
                    </div>
                    <img src={res.picture.large} alt="horse athlete"></img>
                </div>
            )}
            </div> */}
           <div className="LandingPage-bg"> 
                <div>
                    RACETRACK TELEVISION NETWORK ATHLETES
                </div>
           </div>

           <section ref={navigateAbout}>
               <About/>
           </section>

           <section>
               <Athletes/>
           </section>

           <section ref={navigateContact}>
               <ContactUs/>
           </section>

           <section>
               <Footer/>
           </section>
        </section>
    )
}

export default LandingPage