import React, { useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

// Переменные состояния (useState)
function App() {
  // PROFILE
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  // ADD_PHOTO
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  // AVATAR
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // FULLSCREEN
  const [selectedCard, setSelectedCard] = useState(null);
  // CARD_DELETE
  const [ isDeleteCardPopupOpen, setIsDeleteCardPopupOpen ] = useState(false);

  // Обработчик АВАТАР
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  // Обработчик ПРОФИЛЬ
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  // Обработчик ФОТО
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // Закрытие попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsDeleteCardPopupOpen(false);
  }
  // Клик на карточку
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleDeleteCardClick(card) {
  setIsDeleteCardPopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardDelete={ handleDeleteCardClick }
      />
      <Footer />

      {/* POPUP PROFILE */}
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить"
      >
        <div className="popup__input-container">
          <input
            id="username-input"
            className="popup__input popup__input_data_user-name"
            name="name"
            type="text"
            required
            autoFocus
            minLength="2"
            maxLength="40"
            placeholder="Имя"
          />
          <span className="username-input-error popup__input-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="userabout-input"
            className=" popup__input popup__input_data_user-about"
            name="about"
            type="text"
            required
            minLength="2"
            maxLength="200"
            placeholder="О себе"
          />
          <span className="userabout-input-error popup__input-error"></span>
        </div>
      </PopupWithForm>
      {/* POPUP ADD_CARD  */}
      <PopupWithForm
        name="add-photo"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить"
      >
        <div className="popup__input-container">
          <input
            id="title-photo-input"
            className="popup__input_data_title-photo popup__input"
            name="name"
            type="text"
            required
            autoFocus
            minLength="2"
            maxLength="30"
            placeholder="Название"
          />
          <span className="title-photo-input-error popup__input-error"></span>
        </div>
        <div className="popup__input-container">
          <input
            id="link-input"
            className="popup__input_data_link-to-pic popup__input"
            name="link"
            type="url"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="link-input-error popup__input-error"></span>
        </div>
      </PopupWithForm>
      {/* POPUP AVATAR  */}
      <PopupWithForm
        name="avatar"
        title="Обновить aватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить"
      >
        <div className="popup__input-container">
          <input
            id="avatar-input"
            className="popup__input_data_avatar popup__input"
            name="avatar"
            type="url"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="avatar-input-error popup__input-error"></span>
        </div>
      </PopupWithForm>
      {/* POPUP FULSCREEN  */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      {/* POPUP ARE_YOU_SURE  */}
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
        btnText="Да"
      ></PopupWithForm>
    </div>
  );
}

export default App;
