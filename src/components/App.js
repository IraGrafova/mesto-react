import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import api from "./utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  //состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  //открытие попапов
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    // document.addEventListener("keydown", this._escClose);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  //закрытие всех попапов
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    api.getAllCards().then((data) => {
      //console.log(data)
      setCards(
        data.map((item) => ({
          // создаем новый массив карточек и передаем в него данные, полученные от сервера
          id: item._id,
          link: item.link,
          name: item.name,
          likes: item.likes.length,
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="page">
        <>
          <Header />
          <Main
            cards={cards}
            onCardClick={setSelectedCard}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          />

          <Footer />
          <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={isEditProfilePopupOpen}
            textButton="Сохранить"
            onClose={closeAllPopups}
          >
            <input
              className="card-form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="error" id="name-error"></span>
            <input
              className="card-form__input"
              type="text"
              name="description"
              id="job"
              placeholder="О себе"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="error" id="job-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title="Новое место"
            name="add-picture"
            isOpen={isAddPlacePopupOpen}
            textButton="Создать"
            idButton="create-card"
            onClose={closeAllPopups}
          >
            <input
              className="card-form__input"
              type="text"
              name="name"
              id="place"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="error" id="place-error"></span>
            <input
              className="card-form__input"
              type="url"
              name="link"
              id="place-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="error" id="place-link-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isEditAvatarPopupOpen}
            textButton="Сохранить"
            idButton="edit-avatar"
            onClose={closeAllPopups}
          >
            <input
              className="card-form__input"
              type="url"
              name="avatar"
              id="avatar-link"
              placeholder="Ссылка на изображение"
              required
            />
            <span className="error" id="avatar-link-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title="Вы уверены?"
            name="delete-card"
            textButton="Да"
            idButton="delete-card"
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </>
      </div>
    </div>
  );
}

export default App;
