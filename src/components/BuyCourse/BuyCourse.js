import React from "react";
import "./BuyCourse.css"
import photo from "./images/veta1.png"
import spot from "./images/spot.svg"
import BuyWindow from "../BuyWindow/BuyWindow";

const BuyCourse = (props) => {
    const {showBuyWindow, showWindow, closeBuyWindow} = props

    return (
        <div className="buy-course-main-container-with-spots">
            <div className="spot-buy-1"><img className="buycourse-spot" alt="" src={spot}></img></div>
            <div className="spot-buy-2"><img className="buycourse-spot" alt="" src={spot}></img></div>
            <div className="buy-course-main-container">
                <div>
                    <img className="photo-img" alt="" src={photo}></img>
                </div>
                <div style={{display: "flex", flexDirection: "column" ,alignItems: "center"}}>
                    <div className="buy-text-container">
                        <p className="text-buy"><span className="highlighting">КУПИТЬ КУРС</span></p>
                        <p className="text-buy">"ЗАРАБОТОК НА СТРИМАХ В TIK TOK"</p>
                    </div>
                    <div>
                        <button onClick={showBuyWindow}>Купить курс</button>
                    </div>
                    {showWindow && <BuyWindow closeBuyWindow={closeBuyWindow}></BuyWindow>}
                </div>
            </div>
        </div>
    )
}

export default BuyCourse