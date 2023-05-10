import React from "react";
import payment from "./images/paymentnew.jpg";
import "./PaymentInfo.css";

const PaymentInfo = () => {
  return (
    <div className="main-payment-container">
      <div className="about-IP-container">
        <p>
          <span className="highlighting">
            После приобретения данного курса возврат денежных средств не
            предусмотрен
          </span>
          <br />
          ИП «Логишинец А.В» Юридический адрес: 222160, г. Жодино, ул 50 лет,9А,
          <br />
          Почтовый адрес: 222160, г. Жодино, ул 50 лет,9А, Контактные телефоны:
          +375 (25) 7345208 e-mail: dsgdfgdsfgdsf231@mail.ru
          <br />
          Режим работы: онлайн-заказ: круглосуточно, оператор: 10.00-20.00
          Пн-Вс. Свидетельство о государственной регистрации выдано Жодинским
          гориполкомом от 05.10.2021 УНП 693231984 Индивидуальный
          предприниматель Логишинец Алексей Владимирович Зарегистрирован
          Жодинским гориполкомом 05.10.2021 УНП 693231984
          <br />
          Адрес: 222160, г. Жодино, ул 50 лет,9А, Контактный телефон: +375 (25)
          7345208
          <br />
          e-mail: dsgdfgdsfgdsf231@mail.ru Режим работы: онлайн-заказ:
          круглосуточно, оператор: 10.00-20.00 Пн-Вс.
        </p>
      </div>
      <div>
        <img className="payment-img" alt="" src={payment}></img>
      </div>
    </div>
  );
};

export default PaymentInfo;
