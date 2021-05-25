import React, {useState, useEffect} from 'react';
import Api from '../utils/Api.js';

import Card from './Card.js';

import profileEditImg from '../images/icons/profile-btn-edit.svg';
import gifPreloader from '../images/gif/preloaderProfileImg.gif';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  // const [userData, setUserData] = React.useState({about: 'Загрузка...', name: 'Пожалуйста подождите', avatar: gifPreloader});
  // const {avatar, about, name} = userData;

  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Пожалуйста подождите');
  const [userAvatar, setUserAvatar] = useState(gifPreloader);

  const [cards, setCards] = useState([]);

  useEffect(() => {

    Promise.all([Api.getInitialUser(), Api.getInitialCards()])
      .then(([{about, avatar, name}, cardsData]) => {

        setUserName(about);
        setUserDescription(name);
        setUserAvatar(avatar);

        setCards(cardsData);

      });

  }, []);

  return (
    <main className="content">
      <section className="profile content__position-center content__profile">
        <div className="profile__img-container">
          <img src={userAvatar} alt="Портрет" className="profile__img" style={{backgroundImage: `url(${userAvatar})`}} />
          <img src={profileEditImg} alt="Кнопка редактирования" className="profile__edit-img" onClick={onEditAvatar} />
        </div>
        <div className="profile__about">
          <div className="profile__container-text">
            <h1 className="profile__title-name">{userName}</h1>
            <p className="profile__subtitle-does">{userDescription}</p>
          </div>
          <button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-card-place" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="place content__position-center content__place">
        <ul className="place__list">
          {
            cards.length > 0 ?
            cards.map(card => {
              // Передаю уникальный ключ, React сам подставит его.
              return <Card card={card} key={card._id} onCardClick={onCardClick} />
            }) :
            <div className='plase__result'></div>
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
