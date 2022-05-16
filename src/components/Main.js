import React, { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete }) {
  // Переменные состояния (useState)
  const [userName, setUserName] = useState("...");
  const [userDescription, setUserDescription] = useState("...");
  const [userAvatar, setUserAvatar] = useState("#");
  const [cards, setCards] = useState([]);
  //
  const cardsElements = cards.map((card) => (
    <Card 
    card={card} 
    key={card.id} 
    onCardClick={onCardClick} 
    onCardDelete={ onCardDelete } />
  ))

  // Обновление после каждого получения массива с данными
  useEffect(() => {
    // Получим данные с сервера
    api.getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));

    api.getInitialCards()
      .then((res) => {
        const cardsData = res.map((data) => {
          return {
            name: data.name,
            link: data.link,
            likes: data.likes,
            id: data._id,
            // userId: userId,
            ownerId: data.owner._id,
          };
        });
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      {/*PROFILE*/}
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            className="profile__avatar-src"
            src={userAvatar}
            alt="Аватар профиля"
          />
          <button
            type="button"
            className="profile__avatar-button"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__user-name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <h2 className="profile__user-about">{userDescription}</h2>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>
      {/*ELEMENTS*/}
      <section className="elements">
        <ul className="elements__container">{cardsElements}</ul>
      </section>
    </main>
  );
}

export default Main;
