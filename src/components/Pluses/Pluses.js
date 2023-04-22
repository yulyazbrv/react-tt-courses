import React from "react";
import "./Pluses.css"

const Pluses = () => {
    return(
        <div>
            <div className="nowater-container">
                <p className="text-nowater-container"><span className="highlighting">НА МОЁМ КУРСЕ НЕ БУДЕТ ВОДЫ!</span></p>
                <p className="text-nowater-container">ТОЛЬКО ЧЁТКАЯ ИНСТРУКЦИЯ, КАК ЗАРАБАТЫВАТЬ В TIK TOK</p>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", justifyContent: "space-between", width: "90%"}}>
                    <div className="pluses" >
                        <p className="text-pluses" style={{marginBottom: "8em", marginRight: "0em"}}>Удаленная работа</p>
                        <p className="text-pluses" style={{marginBottom: "8em"}}>Работа без вложений</p>
                        <p className="text-pluses">Свободный график</p>
                    </div>
                    <div className="pluses-container">
                        <p className="text-pluses">ПЛЮСЫ СТРИМИНГА</p>
                    </div>
                    <div className="pluses" style={{alignItems: "flex-start"}}>
                        <p className="text-pluses" style={{marginBottom: "8em"}}>Высокий заработок</p>
                        <p className="text-pluses" style={{marginBottom: "8em"}}>Работа в вашем ритме</p>
                        <p className="text-pluses">Полезные знакомства</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pluses