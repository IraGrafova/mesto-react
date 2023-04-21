import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_open-picture > ${
        props.card ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__form-picture">
        <button
          className="popup__close popup__close_type_open-picture"
          onClick={props.onClose}
          type="button"
        ></button>
        <figure className="popup__image-open">
          <img
            className="popup__image"
            src={`${props.card ? props.card.link : ""}`}
            alt={`${props.card ? props.card.name : ""}`}
          />
          <figcaption className="popup__caption">{`${
            props.card ? props.card.name : ""
          }`}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
