import React from "react";
import AthleteCards from "./AthleteCards";
import '../styles/Athletes.css'

const Athletes:React.FC = () => {
    return (
        <div className="container">
            <div className="Athlete-t d-flex justify-content-center">
                Meet Some of Our Athletes!
            </div>
            <div className="d-flex justify-content-center mt-2" style={{color: "rgb(149, 159, 207)"}}>
                <span className="fw-bold">Best&nbsp;</span> of the <span className="fw-bold">&nbsp;best&nbsp;</span> jockeys around the world.
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