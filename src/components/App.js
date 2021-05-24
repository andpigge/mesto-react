import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

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

  const [selectedCard, setselectedCard] = React.useState({});

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isShowPopupImg, setShowPopupImg] = React.useState(false);

  return (
    <>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm title={'Редактировать профиль'} name={'popup_edit_profile'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={(
        <>
          <label className="popup__form-label">
            <input type="text" className="popup__form-input popup__form-input_value_name" id="profile-name-input" defaultValue="Жак-Ив Кусто" placeholder="Имя" name="profileName" minLength="2" maxLength="40" required />
            <span className="popup__error-message profile-name-input-error"></span>
          </label>
          <label className="popup__form-label">
            <input type="text" className="popup__form-input popup__form-input_value_does" id="profile-does-input" defaultValue="Исследователь океана" placeholder="Деятельность" name="profileDoes" minLength="2" maxLength="200" required />
            <span className="popup__error-message profile-does-input-error"></span>
          </label>
          <button className="button-popup button-popup_edit_profile" type="submit">Сохранить</button>
        </>
      )} />
      <PopupWithForm title={'Новое место'} name={'popup_add_card'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={(
        <>
          <label className="popup__form-label">
            <input type="text" className="popup__form-input popup__form-input_value_place" id="place-name-input" placeholder="Название" name="placeName" minLength="2" maxLength="30" required />
            <span className="popup__error-message place-name-input-error"></span>
          </label>
          <label className="popup__form-label">
            <input type="url" className="popup__form-input popup__form-input_value_img" placeholder="Ссылка на картинку" id="place-img-input" name="placeImg" required />
            <span className="popup__error-message place-img-input-error"></span>
          </label>
          <button className="button-popup button-popup_add_card" type="submit">Создать</button>
        </>
      )} />
      <PopupWithForm title={'Обновить аватар'} name={'popup_edit_img'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={(
        <>
          <label className="popup__form-label">
            <input type="url" className="popup__form-input" id="url-img-edit" placeholder="Ссылка на картинку" name="imgEdit" required />
            <span className="popup__error-message url-img-edit-error"></span>
          </label>
          <button className="button-popup button-popup_edit_img" type="submit">Сохранить</button>
        </>
      )} />
      <PopupWithForm title={'Вы уверены?'} name={'popup_remove_card'} children={(
        <>
          <button className="button-popup button-popup_delete_card" type="submit">Да</button>
        </>
      )} />

      <ImagePopup card={selectedCard} name={'popup_edit_img'} isOpen={isShowPopupImg} onClose={closeAllPopups} />
    </>
  );
}

export default App;
