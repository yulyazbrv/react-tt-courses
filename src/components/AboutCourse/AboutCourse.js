import React from "react";
import "./AboutCourse.css"
import firstPres from "./images/first-present.PNG"
import secondPres from "./images/second-present.PNG"
import fourthPres from "./images/fourth-present.JPG"
import fifthPres from "./images/fifth-present.PNG"
import spot from "./images/spot.svg"

const AboutCourse = () => {
    return (
        <div className="main-aboutcourse-container">
            <div><img className="spot-1" src={spot} alt=""></img></div>
            <div><img className="spot-2" src={spot} alt=""></img></div>
            <div className="stream-going-container">
                <p className="text-stream-going"><span className="highlighting">КАЖДЫЙ МОЙ СТРИМ</span> ПРОХОДИТ ТАК</p>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <div className="stream-images-container">
                    <div>
                        <img alt="" className="present-img" src={firstPres} style={{marginLeft: "5px"}}></img>
                        <p className="cost-text">30038 алмазов = 150.19$</p>
                    </div>
                    <div>
                        <img alt="" className="present-img" src={secondPres}></img>
                        <p className="cost-text">15028 алмазов = 75.14$</p>
                    </div>
                    <div>
                        <img alt="" className="present-img" src={fourthPres}></img>
                        <p className="cost-text">22015 алмазов = 110.07$</p>
                    </div>
                    <div>
                        <img alt="" className="present-img" src={fifthPres}></img>
                        <p className="cost-text">14097 алмазов = 70.48$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCourse