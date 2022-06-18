import React from "react";
import AthleteCards from "./AthleteCards";
import '../styles/Athletes.css'

const Athletes:React.FC = () => {
    return (
        <div className="container">
            <div className="Athlete-t d-flex justify-content-center">
                Meet Some of Our Athletes!
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                   <AthleteCards/>
                </div>
            </div>
        </div>
    )
}

export default Athletes