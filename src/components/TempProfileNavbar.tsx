import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css'
 
const TempProfileNavbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false)

    const changeOnScroll = () => {
        window.scrollY >= 1 ? setNavbar(true) : setNavbar(false)
        }
        
    window.addEventListener('scroll', changeOnScroll)

    return (
        <section className="Navbar">
            <nav className={navbar ? 'navbar active fixed-top' : 'navbar fixed-top'}>
                <div className="container">
                    <NavLink className="Navbar-hover Navbar-color" style={{fontSize:'1.5rem'}} to={-1 as any}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        <span className="m-3">Back</span>
                    </NavLink>
                </div>
            </nav>
        </section>
    )
}


export default TempProfileNavbar