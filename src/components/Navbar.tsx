import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

interface NavbarProps {
    about: any
    contact: any
}
const Navbar: React.FC<NavbarProps> = ({about, contact}) => {
    const [navbar, setNavbar] = useState(false)

    const changeOnScroll = () => {
        window.scrollY >= 1 ? setNavbar(true) : setNavbar(false)
        }
        
    window.addEventListener('scroll', changeOnScroll)

    const scrollAbout = () => about.current.scrollIntoView({behavior: "smooth"}) 
    const scrollContact = () => contact.current.scrollIntoView({behavior: "smooth"}) 

    return (
        <section className="Navbar">
            <nav className={navbar ? 'navbar active fixed-top' : 'navbar fixed-top'}>
                <div className="container">
                    <NavLink className="Navbar-hover Navbar-color" style={{fontSize:'1.5rem'}} to="/RCNLandingPage">RTNA</NavLink>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <div onClick={scrollAbout} className="Navbar-color Navbar-hover btn">
                                About
                            </div>
                        </li>

                        <li className="nav-item">
                            <div onClick={scrollContact} className="Navbar-color Navbar-hover btn">
                                Contact Us
                            </div>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="Navbar-hover btn btn-default" style={{color: 'white'}} to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}


export default Navbar