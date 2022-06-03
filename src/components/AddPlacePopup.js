import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleNameChange(e) {
      setName(e.target.value);
    }

    function handleLinkChange(e) {
      setLink(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      props.onAddPlace({
        name: name,
        link: link,
      });
    }


  return (
    <PopupWithForm
      name="add-photo"
      title="Новое место"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          pattern="^[a-zA-Zа-яА-я-\s]+$"
          onChange={handleNameChange}
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
          onChange={handleLinkChange}
        />
        <span className="link-input-error popup__input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
