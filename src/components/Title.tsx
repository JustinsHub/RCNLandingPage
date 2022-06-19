import React from "react";
import '../styles/LandingPage.css'

const Title:React.FC = () => {
    return (
        <header>
            <div className="container">
            <div className="row">
                <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>
                <div className="col-xs-1 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-10">
                    <div className="Title text-center fw-bold">
                    RACETRACK TELEVISION NETWORK <span className="Title-s-t" style={{fontSize: '7rem'}}>ATHLETES</span>
                    </div>
                    <div className="text-center">
                        Where the best Jockeys are made.
                    </div>
                </div>
                <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>
            </div>
            <div>
                <button className="">Learn More</button>
            </div>
            </div>
        </header>
    )
}

export default Title