import React, { useRef, useState } from 'react'
import '../styles/LandingPage.css'
import About from './About'
import Athletes from './Athletes'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Navbar from './Navbar'

const LandingPage:React.FC = () => {
    const navigateAbout = useRef(null)
    const navigateContact = useRef(null)
    //TODO: 

    //UI -> Some horse racing background -> CSS popup fade in brand name on load. 
    //Check how loader.css works 
    //Get a glimpse of our horse racing athletes (random players) (3x3 grid card) -> Users can click on the athelete and that will lead to their profile -> onHover boxShadow delay

    const [isLoading, setIsLoading] = useState(false)

    return (
        <section>
            <section>
                <Navbar about={navigateAbout} contact={navigateContact}/>
            </section>

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