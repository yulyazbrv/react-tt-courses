import React from "react";
import "./BuyWindow.css"
import close from "./images/close.png"

const BuyWindow = (props) => {
    const {closeBuyWindow} = props

    return (
        <div className="main-buywindow-container">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <div className="window-container">
                    <div className="image-container">
                        <img onClick={closeBuyWindow} className="close-img" alt="" src={close}></img>
                    </div>
                    <div className="buycourse-text-container">
                        <p className="buy-text">ПОКУПКА КУРСА</p>
                    </div>
                    <p style={{fontSize: "1vw", textAlign: "center"}}>После оплаты на указанный e-mail поступит сообщение с ссылкой на наш курс</p>

                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="name" placeholder="" />
                        <label className="text-field__label" htmlFor="name">Имя</label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="email" placeholder="" />
                        <label className="text-field__label" htmlFor="email">Почта</label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="text" />
                        <label className="text-field__label" htmlFor="text">Телефон</label>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <button style={{width: "36.5vw", height: "8vw"}}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyWindow