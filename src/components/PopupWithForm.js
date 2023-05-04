import React from "react";

function PopupWithForm({title, name, children, isOpen, textButton, onClose}) { //title, name, children, isOpen, textButton, onClose

  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__form">
        <button
          className={`popup__close popup__close_type_${name}`}
          onClick={onClose}
          type="button"
        ></button>
        <form className="card-form" name={name} id={`${name}-form`}>
          <h2 className="card-form__title">{title}</h2>
          {children}
          <button
            className="card-form__save card-form__save_disabled"
            type="submit"
            disabled
          >
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
