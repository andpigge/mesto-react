function Card({cards, onCardClick}) {
  return (
    <>
      {
        cards.length > 0 ?
          cards.map(({_id, link, name, likes}) => {
              return <li className="place__item" key={_id}>
                <div className="card-place">
                  <button className="card-place__delete-btn"></button>
                  <img src={link} alt={name} className="card-place__img" onClick={() => onCardClick(name, link)} />
                  <h2 className="card-place__title">
                  {name}
                  </h2>
                  <div className="card-place__likes">
                  <button className="card-place__like-btn" type="button"></button>
                  <span className="card-place__counter">{likes.length}</span>
                  </div>
                </div>
              </li>
            }) :
            <div className='plase__result'></div>
      }
    </>
    );
}

export default Card;
