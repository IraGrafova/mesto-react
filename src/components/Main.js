import React from "react";
import Card from "./Card";
import api from "./utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile-data">
          <button
            className="button-edit-avatar"
            type="button"
            onClick={props.onEditAvatar}
          >
            <img
              className="avatar"
              alt="Аватар пользователя"
              src={userAvatar}
            />
          </button>
          <div className="profile-info">
            <div className="profile-info__name">
              <h1 className="profile-info__title">{userName}</h1>
              <button
                className="profile-info__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile-info__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="snapshots">
        <ul className="elements">
          {props.cards.map((card) => (
            <Card key={card.id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
