const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const formValidationConfig = {
  formSelector: ".card-form",
  inputSelector: ".card-form__input",
  errorClass: "card-form__input_type_error",
  buttonSelector: ".card-form__save",
  buttonDisabledClass: "card-form__save_disabled",
};

//находим формы
const formEdit = document.forms["edit-profile-form"];
const cardForm = document.forms["card-form"];
const formAvatar = document.forms["avatar-edit-form"];

//объявляем кнопки работы с попапами
const buttonEditProfile = document.querySelector(".profile-info__edit-button");
const buttonAddCard = document.querySelector(".add-button");
const buttonEditAvatar = document.querySelector(".button-edit-avatar");

//селектор куда вставляем карточки из темплейта
const elementsListSelector = ".elements";

export {
  initialCards,
  formValidationConfig,
  formEdit,
  cardForm,
  formAvatar,
  buttonEditProfile,
  buttonAddCard,
  elementsListSelector,
  buttonEditAvatar
};
