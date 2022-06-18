import React from "react";
import { Link } from "react-router-dom";

const ContactUs:React.FC = () => {
    return (
        <div className="m-5">
            <div className="Athlete-t d-flex justify-content-center">
                Contact Us
            </div>
            <div className="text-center m-2">
                <a href="mailto:info@rtn.tv" style={{textDecoration: 'none', color: '#2d3a8ccc'}}>info@rtn.tv</a>
            </div>
            <div className="text-center m-3">
            Racetrack Television Network, LLC<br/>
            4075 Volunteer Blvd.<br/>
            Henderson, NV  89044<br/>
            </div>
        </div>
    )
}

export default ContactUs