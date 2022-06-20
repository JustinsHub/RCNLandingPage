import React, { useRef, useState } from 'react'
import '../styles/LandingPage.css'
import About from './About'
import Athletes from './Athletes'
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import Title from './Title'

const LandingPage:React.FC = () => {
    const navigateAbout = useRef(null)
    const navigateContact = useRef(null)

    const [isLoading, setIsLoading] = useState(false)

    return (
        <section>
            <section>
                <Navbar about={navigateAbout} contact={navigateContact}/>
            </section>

           <div className="LandingPage-bg"> 
                <Title about={navigateAbout}/>
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

        </section>
    )
}

export default LandingPage