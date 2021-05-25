function Card({card, onCardClick}) {
  return (
    <>
      <li className="place__item">
        <div className="card-place">
          <button className="card-place__delete-btn"></button>
          <img src={card.link} alt={card.name} className="card-place__img" onClick={() => onCardClick(card.name, card.link)} />
          <h2 className="card-place__title">
          {card.name}
          </h2>
          <div className="card-place__likes">
          <button className="card-place__like-btn" type="button"></button>
          <span className="card-place__counter">{card.likes.length}</span>
          </div>
        </div>
      </li>
    </>
    );
}

export default Card;
