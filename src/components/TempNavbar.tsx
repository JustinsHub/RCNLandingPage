import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css'
 
const TempNavbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false)

    const changeOnScroll = () => {
        window.scrollY >= 1 ? setNavbar(true) : setNavbar(false)
        }
        
    window.addEventListener('scroll', changeOnScroll)

    return (
        <section className="Navbar">
            <nav className={navbar ? 'navbar active fixed-top' : 'navbar fixed-top'}>
                <div className="container">
                    <NavLink className="Navbar-hover Navbar-color" style={{fontSize:'1.5rem'}} to="/">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        <span className="m-3">Home</span>
                    </NavLink>
                </div>
            </nav>
        </section>
    )
}


export default TempNavbar