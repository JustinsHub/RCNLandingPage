import React from "react";
import '../styles/LandingPage.css'

interface TitleProps {
    about: any
}

const Title:React.FC<TitleProps> = ({about}) => {

    const scrollAbout = () => about.current.scrollIntoView({behavior: "smooth"}) 

    return (
        <header>
            <div className="container">
            <div className="row">
                <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>
                <div className="col-xs-1 col-sm-12 col-md-8 col-lg-8 col-xl-12 col-xxl-12">
                    <div className="Title text-center fw-bold">
                        <div className="Title-o-l">
                            RACETRACK TELEVISION NETWORK
                        </div> 
                        <span className="Title-s-t" style={{fontSize: '7rem'}}>
                            ATHLETES
                        </span>
                    </div>
                    <div className="text-center" style={{color: 'white'}}>
                        This is where jockeys are made.
                    </div>
                </div>
                <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                </div>
            </div>
            <div className="d-flex justify-content-center m-5">
                <button className="btn" style={{color:'white', backgroundColor: '#2d3a8c'}} onClick={scrollAbout}>Learn More</button>
            </div>
            </div>
        </header>
    )
}

export default Title