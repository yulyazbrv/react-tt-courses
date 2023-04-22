import React from "react";
import "./Welcome.css"
import girl from "./images/veta1.png"
import noMoney from "./images/noMoney.svg"
import spot from "./images/spot.svg"
import money from "./images/money.png"
import BuyWindow from "../BuyWindow/BuyWindow";

const Welcome = (props) => {
    const {showBuyWindow, showWindow, closeBuyWindow} = props

    return(
        <div className="main-welcome-container">
            <div className="container-about">
                <div style={{marginBottom: "25px"}}>
                    <p className="about-me">Виолетта Васкабович<br /> ЗАРАБОТАЛА НА СТРИМАХ 9,540$ <span className="highlighting">ЗА ТРИ МЕСЯЦА</span></p>
                </div>
                <div>
                    <p className="about-course">Курс</p>
                    <p className="about-course">"Заработок на <span className="highlighting">стримах в Tik Tok"</span></p>
                    <img alt="" className="nomoney-img" src={noMoney}></img>
                </div>
                <div style={{cursor: "pointer"}}>
                    <button onClick={showBuyWindow}>Купить курс</button>
                </div>
                {showWindow && <BuyWindow closeBuyWindow={closeBuyWindow}></BuyWindow>}
                <div className="spot-1">
                    <img alt="" className="spot-img" src={spot}></img>
                </div>
                <div className="spot-2">
                    <img alt="" className="spot-img" src={spot}></img>
                </div>
                <div className="money-spot">
                    <img alt="" className="spot-money-img" src={money}></img>
                </div>
                <div className="money-spot-2">
                    <img alt="" className="spot-money-img" src={money}></img>
                </div>
            </div>
            <div>
                <img alt="" className="girl-img" src={girl}></img>
            </div>
        </div>
    )
}

export default Welcome