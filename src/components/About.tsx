import React from "react";
import AboutImage from '../styles/images/AboutImage.jpeg'
import '../styles/About.css'

const About:React.FC = () => {
    return (
        <div className="container" style={{marginTop:'10rem'}}>
            <div className="row">
                <div className="col-xs-6 col-md-7 col-lg-6 d-flex justify-content-center">
                    <img src={AboutImage} alt="About RTNA" className="About-img"></img>
                </div>
                <div className="col-xs-6 col-md-5 col-lg-4">
                    <div className="About-t">
                        About Us
                    </div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    )
}

export default About