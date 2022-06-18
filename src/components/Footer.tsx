import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

const Footer:React.FC = () => {
    return (
        <div className="Footer" style={{textAlign: 'center'}}>
            <span className="text-muted">&copy; 2022 <Link className="Footer-l text-muted" to='/'>RCNA</Link> · All Rights Reserved.
            </span>
        </div>
    )
}

export default Footer