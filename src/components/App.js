import React, { useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmRemove from './ConfirmRemove';

import Api from '../utils/api';

// GIF preloader
import gifPreloader from '../images/gif/preloaderProfileImg.gif';

// Контекст
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardListContext } from '../contexts/cardListContext';
import {  ValidationFormContext, validation } from '../contexts/validationFormContext';

function App() {

  const [selectedCard, setselectedCard] = React.useState({});

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isShowPopupImg, setShowPopupImg] = React.useState(false);
  const [isConfirmPoppup, setConfirmPoppup] = React.useState(false);

  const [cardRemove, setCardRemove] = React.useState({});

  //* Данные с сервера
  const [currentUser, setCurrentUser] = React.useState({
    about: 'Загрузка...',
    name: 'Пожалуйста подождите',
    avatar: gifPreloader
  });

  const [cardList, setCardList] = React.useState([]);
  //*

  const [isLoadingData, setIsLoadingData] = React.useState(false);

  useEffect(() => {
    // Данные должны подгружаться одновремено
    Promise.all([Api.getInitialUser(), Api.getInitialCards()])
      .then(([ user, cardList ]) => {
        setCurrentUser(user);
        setCardList(cardList);
      });
  }, []);

  useEffect(() => {
    const closePopupTouchEsc = e => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    if (isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || isShowPopupImg) {
      document.addEventListener('keydown', closePopupTouchEsc);
    }
    return () => {
      document.removeEventListener('keydown', closePopupTouchEsc);
    };
  }, [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, isShowPopupImg]);

  //*
  const handleUpdateUser = ({ profileDoes, profileName }) => {
    setIsLoadingData(true);
    Api.patchUpdateProfile(profileDoes, profileName)
      .then(newUser => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  };

  const handleUpdateAvatar = ({ avatar }) => {
    setIsLoadingData(true);
    Api.patchUpdateUserAvatar(avatar)
      .then(newUser => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    Api.postAddCard(name, link)
      .then(newCard => {
        setCardList([newCard, ...cardList]);
        closeAllPopups();
      });
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick(card) {
    setConfirmPoppup(true);
    setCardRemove(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setShowPopupImg(false);
    setConfirmPoppup(false);
  }

  function handleCardClick(name, link) {
    setselectedCard({name, link});
    setShowPopupImg(true);
  }

  //* Card
  const addLike = idCard => {
    Api.putAppendLike(idCard)
      .then(newCard => {
        setCardList(state => {
          return state.map(previousCard => {
            return previousCard._id === idCard ? newCard : previousCard;
          });
        });
      });
  };

  const deleteLike = idCard => {
    Api.deleteLike(idCard)
      .then(newCard => {
        setCardList(state => {
          return state.map(previousCard => {
            return previousCard._id === idCard ? newCard : previousCard;
          });
        });
      });
  };

  const handleCardLike = card => {
    // true лайк стоит
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    isLiked ? deleteLike(card._id) : addLike(card._id);
  };
  //*

  const handleCardDelete = () => {
    setIsLoadingData(true);
    Api.deleteCard(cardRemove._id)
      .then(newCard => {
        setCardList(state => {
          return state.filter(previousCard => {
            return previousCard._id !== cardRemove._id;
          });
        })
        closeAllPopups();
    })
    .finally(() => {
      setIsLoadingData(false);
    });
  };

  return (
    <CurrentUserContext.Provider value={ currentUser } >
      <CardListContext.Provider value={ cardList }>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleDeleteCardClick} />
        <Footer />
        <ValidationFormContext.Provider value={ validation }>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} loading={isLoadingData} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} loading={isLoadingData} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} loading={isLoadingData} />
          <ConfirmRemove isOpen={isConfirmPoppup} onClose={closeAllPopups} onRemoveCard={handleCardDelete} loading={isLoadingData} />
        </ValidationFormContext.Provider>

        <ImagePopup card={selectedCard} name={'popup_edit_img'} isOpen={isShowPopupImg} onClose={closeAllPopups} />
      </CardListContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
