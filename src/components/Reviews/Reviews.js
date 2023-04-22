import React from "react";
import rev1 from "./images/rev1.jpg"
import rev2 from "./images/rev2.jpg"
import rev3 from "./images/rev3.jpg"
import "./Reviews.css"

const Reviews = () => {
    return (
        <div className="reviews-main-container">
            <div className="review-block">
                <p className="review-text"><span className="highlighting">ОТЗЫВЫ</span> С МОИХ ЛИЧНЫХ КОНСУЛЬТАЦИЙ</p>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className="container-img">
                    <div><img className="review-img" style={{marginLeft: "15px"}} alt="" src={rev1}></img></div>
                    <div><img className="review-img" alt="" src={rev2}></img></div>
                    <div><img className="review-img" alt="" src={rev3}></img></div>
                </div>
            </div>
        </div>
    )
}

export default Reviews