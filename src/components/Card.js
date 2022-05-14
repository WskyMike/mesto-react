function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <li className="elements__card">
      <button
        type="button"
        className="elements__trash"
        aria-label="Удалить карточку"
      ></button>
      <div className="elements__picture-container">
        <img
          className="elements__picture"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
      </div>
      <div className="elements__text-container">
        <h3 className="elements__text">{card.name}</h3>
        <div className="elements__like-container">
          <button
            type="button"
            className="elements__like-icon"
            aria-label="Оценить фото"
          ></button>
          <span className="elements__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
