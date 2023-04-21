import React from "react";

function PopupWithForm(props) { //title, name, children, isOpen, textButton, onClose

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__form">
        <button
          className={`popup__close popup__close_type_${props.name}`}
          onClick={props.onClose}
          type="button"
        ></button>
        <form className="card-form" name={props.name} id={`${props.name}-form`}>
          <h2 className="card-form__title">{props.title}</h2>
          {props.children}
          <button
            className="card-form__save card-form__save_disabled"
            type="submit"
            disabled
          >
            {props.textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
