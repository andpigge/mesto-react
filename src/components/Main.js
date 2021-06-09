import React, { useContext } from 'react';

import Card from './Card.js';

import profileEditImg from '../images/icons/profile-btn-edit.svg';

// Контекст
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/cardListContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, setCardList, onCardLike, onCardDelete}) {

  // Контекст
  const { avatar, about, name } = useContext(CurrentUserContext);
  // В будущем возможно карточки будут выводиться еще куда-нибудь
  const cardList = useContext(CardListContext);

  // const handleCardLike = card => {
  //   // true лайк стоит
  //   const isLiked = card.likes.some(like => like._id === user._id);

  //   isLiked ? deleteLike(card._id) : addLike(card._id);
  // };

  // const handleCardDelete = card => {
  //   Api.deleteCard(card._id)
  //     .then(newCard => {
  //       setCardList(state => {
  //         return state.filter(previousСard => {
  //           return previousСard._id !== card._id;
  //         });
  //       });
  //   });
  // };

  return (
    <main className="content">
      <section className="profile content__position-center content__profile">
        <div className="profile__img-container">
          <img src={avatar} alt="Портрет" className="profile__img" style={{backgroundImage: `url(${avatar})`}} />
          <img src={profileEditImg} alt="Кнопка редактирования" className="profile__edit-img" onClick={onEditAvatar} />
        </div>
        <div className="profile__about">
          <div className="profile__container-text">
            <h1 className="profile__title-name">{about}</h1>
            <p className="profile__subtitle-does">{name}</p>
          </div>
          <button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-card-place" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="place content__position-center content__place">
        <ul className="place__list">
          {
            cardList.length > 0 ?
            cardList.map(card => {
              // Передаю уникальный ключ, React сам подставит его.
              return <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
            }) :
            // Это прелоадер
            <div className='plase__result'></div>
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
