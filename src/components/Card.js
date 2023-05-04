import React from "react";
import { useContext } from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onClick}) {

  const currentUser = useContext(CurrentUserContext);

  console.log(card)

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner === `${currentUser?._id}`;

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = (
  `card__like-button ${isLiked && 'card__like-button_active'}`
);;



  function handleCardClick() {
    onCardClick(card);
  }

//onClick={handleDeleteClick}

  return (
    <li className="element">
      /* Далее в разметке используем переменную для условного рендеринга */
      {isOwn && <button className="element__trash" ></button>}
      <button className="button-image">
        <img
          className="element__picture"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
      </button>
      <div className="element__label">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button className="element__button-like" type="button"></button>
          <span className="element__like-sum">{card.likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
