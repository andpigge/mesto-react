import React, {useState, useEffect} from 'react';
import Api from '../utils/Api.js';

import Card from './Card.js';

import profileEditImg from '../images/icons/profile-btn-edit.svg';
import gifPreloader from '../images/gif/preloaderProfileImg.gif';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  // Не понимаю зачем нужно для отдельных данных разбивать state, ведь удобнее передавать объект.
  // const [userData, setUserData] = React.useState({about: 'Загрузка...', name: 'Пожалуйста подождите', avatar: gifPreloader});
  // И с помощью деструктуризации можно разбивать. Пладить state не лучшая идея.
  // const {avatar, about, name} = userData;

  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Пожалуйста подождите');
  const [userAvatar, setUserAvatar] = useState(gifPreloader);

  // Использовать state лучше в Card.js, но пока не знаю как поднять state. Promise.all необходим чтобы вместе отобразить профиль и карточки
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function showData() {
      Promise.all([Api.getInitialUser(), Api.getInitialCards()])
        .then(([{about, avatar, name}, cardsData]) => {

          // Можно было бы использовать стрелочные функции, но так немного понятнее что делает код
          (function setSateUser() {
            setUserName(about);
            setUserDescription(name);
            setUserAvatar(avatar);
          }());

          (function setSateCards() {
            setCards(cardsData);
          }());

        });
    }

    showData();

  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${userAvatar})`,
    // Эти свойства лучше прописать в css, но не думаю что аватар должен быть фоном
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <main className="content">
      <section className="profile content__position-center content__profile">
        <div className="profile__img-container">
          {/* Странно, аватар это же нужный элемент во всех сайтах, он должен быть img */}
          {/* Помню. Если прописывать в тэге style стили, нужно передовать обьект, тоесть два раза оборачивать {{}} */}
          <img src={userAvatar} alt="Портрет" className="profile__img" style={backgroundImageStyle} />
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
          <Card cards={cards} onCardClick={onCardClick} />
        </ul>
      </section>
    </main>
  );
}

export default Main;
