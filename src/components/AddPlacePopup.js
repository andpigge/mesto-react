import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';

// Контекст
import { ValidationFormContext } from '../contexts/validationFormContext';

function AddPlacePopup({ isOpen, onClose, onAddPlace, loading }) {
  const [placeName, setPlaceName] = useState('');
  const [placeImg, setPlaceImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onAddPlace ({
      name: placeName,
      link: placeImg
    });

    setPlaceName('');
    setPlaceImg('');
  };

  const [isValidPlaceName, setValidPlaceName] = useState('false');
  const [isValidPlaceUrl, setValidPlaceUrl] = useState('false');

  // Контекст
  const validation = useContext(ValidationFormContext);

  useEffect(() => {
    const isValidPlaceName = validation(placeName, 2, 30);
    const isValidPlaceUrl = validation(placeImg, 1, 10000, 'url');

    setValidPlaceName(isValidPlaceName);
    setValidPlaceUrl(isValidPlaceUrl);
  }, [placeName, placeImg, validation]);

  const resetFormFieldsOnClose = () => {
    onClose();
    setPlaceName('');
    setPlaceImg('');
  }

  return (
    <PopupWithForm title={'Новое место'} name={'popup_add_card'} isOpen={isOpen} onClose={resetFormFieldsOnClose} onSubmit={handleSubmit} children={(
      <>
        <label className="popup__form-label">
          <input type="text" className="popup__form-input popup__form-input_value_place" id="place-name-input" placeholder="Название" name="placeName" minLength="2" maxLength="30" required value={placeName} onChange={e => setPlaceName(e.target.value)} style={{borderBottom: !isValidPlaceName ? '1px solid red' : ''}} />
          <span className={!isValidPlaceName ? "popup__error-message place-name-input-error popup__error-message_active" : "popup__error-message place-name-input-error"}>Ошибка валидации</span>
        </label>
        <label className="popup__form-label">
          <input type="url" className="popup__form-input popup__form-input_value_img" placeholder="Ссылка на картинку" id="place-img-input" name="placeImg" required value={placeImg} onChange={e => setPlaceImg(e.target.value)} style={{borderBottom: !isValidPlaceUrl ? '1px solid red' : ''}} />
          <span className={!isValidPlaceUrl ? "popup__error-message place-img-input-error popup__error-message_active" : "popup__error-message place-img-input-error"}>Ошибка валидации</span>
        </label>
        <button className="button-popup button-popup_add_card" type="submit" disabled={isValidPlaceName && isValidPlaceUrl ? false : true} style={{opacity: !(isValidPlaceName && isValidPlaceUrl) ? '.2' : ''}}>
          {loading ? 'Создать...' : 'Создать'}
        </button>
      </>
    )} />
  );
}

export default AddPlacePopup;
