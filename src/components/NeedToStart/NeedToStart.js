import React from "react";
import "./NeedToStart.css"
import spot from "./images/spot.svg"

const NeedToStart = () => {
    return(
        <div className="need-to-start-main-container">
            <div className="program-container">
                <p className="text-program"><span className="highlighting">ПРОГРАММА ОБУЧЕНИЯ</span> НА МОЕМ НЕДЕЛЬНОМ КУРСЕ (длительность урока 20 мин)</p>
            </div>
            <div className="spot-program-1"><img style={{height: "120vw"}} alt="" src={spot}></img></div>
            <div className="spot-program-2"><img style={{height: "120vw"}} alt="" src={spot}></img></div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className="items-container">
                    <div className="item-block">
                        <p className="digit">01</p>
                        <p className="text-paragraph">ЧТО НУЖНО ДЛЯ НАЧАЛА</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">02</p>
                        <p className="text-paragraph">ВАШ ОБРАЗ</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">03</p>
                        <p className="text-paragraph">ИНТЕРФЕЙС СТРИМОВ</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">04</p>
                        <p className="text-paragraph">ЧТО ЗАПРЕЩЕНО ДЕЛАТЬ НА СТРИМЕ</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">05</p>
                        <p className="text-paragraph">ПОИСК И ОБЩЕНИЕ С ДОНАТЕРАМИ</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">06</p>
                        <p className="text-paragraph">КАК ПОЛЬЗОВАТЬСЯ VPN</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">07</p>
                        <p className="text-paragraph">ВАШ СТРИМ</p>
                    </div>
                    <div className="item-block">
                        <p className="digit">08</p>
                        <p className="text-paragraph">ВЫВОД ДЕНЕГ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NeedToStart