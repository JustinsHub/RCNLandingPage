import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false)

    const changeOnScroll = () => {
        window.scrollY >= 1 ? setNavbar(true) : setNavbar(false)
        }
    
    window.addEventListener('scroll', changeOnScroll)

    return (
        <section className="Navbar">
            <nav className={navbar ? 'navbar active fixed-top' : 'navbar fixed-top'}>
                <div className="container">
                    <NavLink className="Navbar-hover Navbar-color" style={{fontSize:'1.5rem'}} to="/">RCNA</NavLink>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <NavLink className="Navbar-color Navbar-hover btn" to="/about">
                                About
                            </NavLink>
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