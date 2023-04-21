import React from "react";
import api from "./utils/Api";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button className="element__trash"></button>
      <button className="button-image">
        <img
          className="element__picture"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />
      </button>
      <div className="element__label">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like">
          <button className="element__button-like" type="button"></button>
          <span className="element__like-sum">{props.card.likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
