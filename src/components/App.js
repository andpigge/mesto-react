import React, { useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import Api from '../utils/Api';

// GIF preloader
import gifPreloader from '../images/gif/preloaderProfileImg.gif';

// Контекст
import { CurrentUserContext } from '../contexts/сurrentUserContext';
import { CardListContext } from '../contexts/cardListContext';

function App() {

  const [selectedCard, setselectedCard] = React.useState({});

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isShowPopupImg, setShowPopupImg] = React.useState(false);

  //* Данные с сервера
  const [currentUser, setCurrentUser] = React.useState({
    about: 'Загрузка...',
    name: 'Пожалуйста подождите',
    avatar: gifPreloader
  });

  const [cardList, setCardList] = React.useState([]);
  //*

  useEffect(() => {
    // Данные должны подгружаться одновремено
    Promise.all([Api.getInitialUser(), Api.getInitialCards()])
      .then(([ user, cardList ]) => {
        setCurrentUser(user);
        setCardList(cardList);
        // console.log(user)
        // console.log(cardList)
      });
  }, []);

  const closePopupTouchEsc = e => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  };

  document.addEventListener('keydown', closePopupTouchEsc);
  // if ((isEditProfilePopupOpen && isAddPlacePopupOpen && isEditAvatarPopupOpen && isShowPopupImg) === false) {
  //   document.removeEventListener('keydown', closePopupTouchEsc);
  // }

  const handleUpdateUser = ({ profileDoes, profileName }) => {
    Api.patchUpdateProfile(profileDoes, profileName)
      .then(newUser => {
        setCurrentUser(newUser);
      });
    closeAllPopups();
  };

  const handleUpdateAvatar = ({ avatar }) => {
    Api.patchUpdateUserAvatar(avatar)
      .then(newUser => {
        setCurrentUser(newUser);
      });
    closeAllPopups();
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    Api.postAddCard(name, link)
      .then(newCard => {
        setCardList([newCard, ...cardList]);
      });
    closeAllPopups();
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

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setShowPopupImg(false);
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
          return state.map(previousСard => {
            return previousСard._id === idCard ? newCard : previousСard;
          });
        });
      });
  };

  const deleteLike = idCard => {
    Api.deleteLike(idCard)
      .then(newCard => {
        setCardList(state => {
          return state.map(previousСard => {
            return previousСard._id === idCard ? newCard : previousСard;
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

  const handleCardDelete = card => {
    Api.deleteCard(card._id)
      .then(newCard => {
        setCardList(state => {
          return state.filter(previousСard => {
            return previousСard._id !== card._id;
          });
        });
    });
  };

  return (
    <CurrentUserContext.Provider value={ currentUser } >
      <CardListContext.Provider value={ cardList }>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} setCardList={setCardList} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <PopupWithForm title={'Вы уверены?'} name={'popup_remove_card'} children={(
          <>
            <button className="button-popup button-popup_delete_card" type="submit">Да</button>
          </>
        )} />
        <ImagePopup card={selectedCard} name={'popup_edit_img'} isOpen={isShowPopupImg} onClose={closeAllPopups} />
      </CardListContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
