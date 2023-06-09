import "./App.css";
import React, { useState } from "react";
import Welcome from "./components/Welcome/Welcom";
import AboutCourse from "./components/AboutCourse/AboutCourse";
import Pluses from "./components/Pluses/Pluses";
import NeedToStart from "./components/NeedToStart/NeedToStart";
import Reviews from "./components/Reviews/Reviews";
import BuyCourse from "./components/BuyCourse/BuyCourse";
import PaymentInfo from "./components/PaymentInfo/PaymentInfo";
import Policy from "./components/Policy/Policy";

function App() {
  const [showWindow, setShowWindow] = useState(false);
  const [isShowPolicy, setIsShowPolicy] = useState(false);
  const showBuyWindow = () => {
    setShowWindow(true);
  };

  const closeBuyWindow = () => {
    setShowWindow(false);
  };

  return (
    <div style={{ overflowX: "clip" }}>
      <Welcome
        closeBuyWindow={closeBuyWindow}
        showWindow={showWindow}
        showBuyWindow={showBuyWindow}
      ></Welcome>
      <AboutCourse></AboutCourse>
      <Pluses></Pluses>
      <NeedToStart></NeedToStart>
      <Reviews></Reviews>
      <BuyCourse
        closeBuyWindow={closeBuyWindow}
        showWindow={showWindow}
        showBuyWindow={showBuyWindow}
      ></BuyCourse>

      <PaymentInfo setIsShowPolicy={setIsShowPolicy}></PaymentInfo>
      {isShowPolicy && <Policy setIsShowPolicy={setIsShowPolicy} />}
    </div>
  );
}

export default App;
